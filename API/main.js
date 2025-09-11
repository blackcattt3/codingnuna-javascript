const API_KEY = `12dddfa0489b427c9b4d886527577d89`
let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
// 전역변수로 빼두면 함수마다 상황에 맞게 재정의 된다!
let searchIcon = document.querySelector(".search-icon");
let searchToggle = document.querySelector(".search-toggle");
let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let menus = document.querySelector(".menus");
let xBtn = document.querySelector(".x-btn");
let newsBoard = document.querySelector(".news-board");
let container = document.querySelector(".container");
let categoryBtn = document.querySelectorAll(".category-btn");
let input = document.querySelector(".search-toggle input");
let goBtn = document.querySelector(".search-toggle button");
let totalResult = 0;
let page = 1;   // 현재 있는 페이지
const pageSize = 10;   // 한 페이지당 몇개의 정보 담을건지
const groupSize = 5;  // 그룹당 몇개의 페이지 만들건지
let pagination = document.querySelector(".pagination");

const getNews = async ()=>{
    try{
        url.searchParams.set("page", page);     // -> &page=${page}
        url.searchParams.set("pageSize", pageSize);

        const response = await fetch(url);
        const data = await response.json();

        if(response.status === 200){
            if(data.articles.length === 0){
                throw new Error("No result for this search");
            }
            newsList = data.articles;
            totalResult = data.totalResults;
            console.log(data);
            // console.log("totalResult",totalResult)
            // console.log("articles", data.articles.length);
            render();
            paginationRender();
        } else{
            throw new Error(data.message)
        }
    } catch(error){
        // console.log("rrr", error.message);
        errorRender(error.message)
    }
}

const errorRender = (errorMessage)=>{
    const errorHTML = `<div class="alert alert-danger" role="alert">${errorMessage}</div>`;
    newsBoard.innerHTML = errorHTML;
}


goBtn.addEventListener("click", (event)=>getNewsByInput(event));
const getNewsByInput = async ()=>{
    // console.log(typeof(input.value));
    const text = input.value;
    url = new URL(`https://newsapi.org/v2/everything?q=${text}&apiKey=${API_KEY}`)
    getNews();
}
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // 폼 없을 때 필요
        getNewsByInput();
    }
});


// searchIcon.addEventListener("click", renderToggle);
hamburger.addEventListener("click", ()=>{
    menus.classList.toggle("active");
});

// function renderToggle(){
//     if (searchToggle.style.display === 'none' || searchToggle.style.display === '') {
//         searchToggle.style.display = 'flex'; // Or 'flex', 'grid', etc., depending on the element's original display
//       } else {
//         searchToggle.style.display = 'none';
//       }
// }
searchIcon.addEventListener("click", ()=>{
    searchToggle.classList.toggle("active");
})

xBtn.addEventListener("click", ()=>{
    menus.classList.toggle("active");
})
// categoryBtn.forEach((category)=>category.addEventListener("click", ()=>{
//     console.log(category.textContent);
//     urlAddress =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
//     urlAddress += `&category=${category.textContent}`
//     url = new URL(urlAddress);
//     // console.log(urlAddress);
//     getLatestNews();
// }))
categoryBtn.forEach((category)=>category.addEventListener("click", (event)=>getNewsByCategory(event)));

const getNewsByCategory = async(event)=>{
    // console.log(event.target.textContent)
    const category = event.target.textContent;
    url = new URL(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
    // console.log(url)
    getNews();
}




// 뉴스 가지고 오는 함수
const getLatestNews = async () =>{
    newsList = [];
    url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    // 인스턴스를 쿼리만 떼온다던가 하는 작업들을 수작업으로 하지않고 미리 만들어놓은 함수를 사용한다.
    // URL 인스턴스 -> 다양한 작업에 필요한 함수와 변수들을 제공한다.
    // URL 인스턴스를 새로 생성한다. (http://~ 를 통해서 생성!)
    // console.log("uuu", url);

    // fetch : URL 호출. 요청.
    // const response = await fetch(url);
    // 우리가 보고싶은 데이터는 body안에 있고 이것을 json 데이터로 뽑아야한다.
    // const data = await response.json()
    // console.log("rrr", response);
    // newsList = data.articles
    // render()
    // console.log("ddd", newsList);
    getNews();
};

// const render = ()=>{
//     let resultHTML = '';
//     newsList.forEach((articles)=>{
//         resultHTML += `<div class="row news">
//                 <div class="col-lg-4">
//                     <img class="news-img-size" src="${articles.urlToImage || './img/no_image.png'}">
//                 </div>
//                 <div class="col-lg-8">
//                     <h2>${articles.title}</h2>
//                     <p>${articles.description}</p>
//                     <div>${articles.author} ${articles.publishedAt.split("T")[0]}</div>
//                 </div>
//             </div>`
//     })
//     newsBoard.innerHTML = resultHTML;
// }

const render = ()=>{
    const newsHTML = newsList.map((news)=>{
        const abstract = textAbstract(news.description, 200);
        const image = showImage (news.urlToImage);
        const source = showSource(news.source);
        const pastTime = moment(news.publishedAt).fromNow();
        const category = ['business', 'entertainment','general', 'health', 'science', 'sports', 'technology']

        return `<div class="row news">
                <div class="col-lg-4">
                    <img class="news-img-size" src="${image}">
                </div>
                <div class="col-lg-8">
                    <h2>${news.title}</h2>
                    <p>${abstract}</p>
                    <div>${source.name} * ${pastTime}</div>
                </div>
            </div>`;
    }).join("");
    // 배열형태이므로 ,을 지워야 한다! 문자열 형태로 바꿔줘야한다.
    newsBoard.innerHTML = newsHTML;
    // console.log(moment().format('DD/MM/YY'));

}

const textAbstract=(text, length)=>{
    if(text == null){
        return "내용없음";
    }
    if(text.length <= length){
        return text;   // 이미 짧으면 그대로
    }
    let shortened = text.substring(0, length); // 원하는 길이만큼 자르기
    let last = shortened.lastIndexOf(" ");     // 마지막 공백에서 끊기
    if(last > 0){
        shortened = shortened.substring(0, last);
    }
    return shortened + "...";
}

const showImage = (img)=>{
    if(img == null){
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png"
    } else{
        return img;
    }
}

const showSource = (source)=>{
    if(source == null){
        return "no source";
    } else{
        return source;
    }
}

const paginationRender = ()=>{
    // totalResult
    // pageSize
    // groupSize
    // page
    // pageGroup
    const totalPage = Math.ceil(totalResult / pageSize);
    const pageGroup = Math.ceil(page/groupSize);
    let lastPage = pageGroup * groupSize;
    // 마지막 페이지 그룹이 그룹사이즈보다 작다?! -> lastPage = totalPage
    if(lastPage > totalPage){
        lastPage = totalPage;
    }

    let firstPage = lastPage - (groupSize-1)<=0? 1:lastPage - (groupSize-1) ;
    // totalpage
    // <nav aria-label="Page navigation example">
    //     <ul class="pagination">
    //         <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    //         <li class="page-item"><a class="page-link" href="#">1</a></li>
    //         <li class="page-item"><a class="page-link" href="#">2</a></li>
    //         <li class="page-item"><a class="page-link" href="#">3</a></li>
    //         <li class="page-item"><a class="page-link" href="#">Next</a></li>
    //     </ul>
    // </nav>
    let paginationHTML = ``
    if(page>1){
        paginationHTML += `<li class="page-item" onclick="moveToPage(${page-1})"><a class="page-link" href="#"><</a></li>`
    }
    for(let i=firstPage;i<=lastPage;i++){
        paginationHTML += `<li class="page-item ${i===page?"active":""}" onclick="moveToPage(${i})"><a class="page-link">${i}</a></li>`
    }
    if(page<totalPage){
        paginationHTML += `<li class="page-item" onclick="moveToPage(${page+1})"><a class="page-link" href="#">></a></li>`
    }
    pagination.innerHTML = paginationHTML;
}



const moveToPage = (pageNum)=>{
    console.log("page", pageNum);
    page = pageNum;
    getNews();
}
getLatestNews();

// 자바스크립트는 동기적 프로그래밍. 코드를 하나하나 실행한다.
// 메모리 힙 : 내가 저장하고 싶은 정보들을 두서없이 그냥 저장.
// 콜 스택 : 실행하는 애들. 
// stack : 자료형 구조. (LIFO)

// 브라우저 : Web API (Ajax, fetch, setTimeout, eventHandling)
// task Queue(FIFO) : 브라우저에서 실행한 일을 큐에 쌓아놓고 기다림. 콜스택이 일을 하고있으면 콜스택에 일을 보내지않음.
// 콜스택이 비어있으면 그제서야 콜스택에 일을 보낸다. 콜스택이 한가해질때까지 기다림.

// async / await

// => 자바스크립트는 동기적인 언어이다(위에서부터 차례로 실행한다.) 얘한테는 알바생(브라우저에서 사용하는 쓰레드),
// (Ajax, fetch, setTimeout, EventHandling)등의 시간이 걸리는 것들을 대신 처리해준다.
// 위에꺼가 해결되어야 밑에것도 할 수 있는 경우 강제적으로 async와 await(이걸 만나는 순간 일시정지됨)을 써서
// task queue로 넘어가게 된다. 기다리다가 그 후에 콜스택이 비면 다시 콜스택으로 가져와서 남은 코드 실행.





// let response = await fetch(url)
// let daa = await response.json()


// const callAPI = async() =>{
//     let url = new URL(`url주소`)
//     let header = new Headers({헤더내용}) // 이건 필요한 경우만
//     let response = await fetch(url,{headers:header})
//     let data = await response.json()
// }

// 에러 핸들링
// let weight = 45;
// try{
//     // 소스코드를 쓴다.
//     // 이안에서 에러가 발생하면
//     noona

//     if(weight < 30){
//         throw new Error("말랐다!")
//     }
// } catch(error) {
//     // catch가 에러를 잡아준다.
//     console.log("내가 잡은 에러는", error.message)
// }
// 에러가 발생하는 순간 try문은 끝난다. 바로 catch로 넘어간다!
// 잡고싶은 에러가 있으면 try문 안에 쓰고 이것을 catch에서 잡는다.


// 페이지네이션
// totalResult = 101
// pageSize = 10
// page = 3

// groupSize = 5 (한번에 최대 몇개 페이지까지 보여줄거냐!)
// pageGroup = page(내가 현재 보고있는 페이지) / groupSize (1,2,3,4,5)->1그룹 (6,7,8,9,10)->2그룹
// ex) 내가 7번째 페이지를 보고있을때 몇번째 페이지 그룹에 속해있냐? -> 7 / 5 = 1.xxx -> 반올림해서 2!!
// 두번째 페이지그룹에 있다는 것을 알 수 있다.

// 내가 속한 그룹 번호를 알면 그 그룹의 첫번째와 마지막 페이지를 알 수 있다. -> 그룹사이즈 x 페이지그룹 = 5*2 = 10
// 마지막페이지는 10, 첫번째페이지 : 마지막페이지-(그룹사이즈-1) -> 10-(5-1) = 6


// totalResult(전체) -> 주어짐
// pageSize(한페이지에 몇개의 정보) -> 정해야함
// page(현재 보고있는 페이지)) -> 정해야함
// groupSize(한 그룹당 몇개의 페이지 넣을건지 (1,2,3,4,5)->1그룹 (6,7,8,9,10)->2그룹   이때 groupSize=5) -> 정해야함

// 구해야하는것 :
// totalPage(전체 페이지) = Math.ceil(totalResult / pageSize)
// pageGroup(몇번째 페이지 그룹에 있는지) = Math.ceil(page / groupSize)
// 마지막 페이지 = pageGroup * groupSize
// 첫번째 페이지 = 마지막 페이지 - (groupSize-1)

// totalResult
// page
// pagesize
// groupSize
// totalPage
// pageGroup

// 1. totalPage = Math.ceil(totalResult / pageSize)
// 2. Math.ceil(page/groupSize)
// 3. pagegroup * groupSize