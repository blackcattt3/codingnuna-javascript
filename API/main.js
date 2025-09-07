const API_KEY = `12dddfa0489b427c9b4d886527577d89`
// let news = data.articles
let searchIcon = document.querySelector(".search-icon");
let searchToggle = document.querySelector(".search-toggle");
let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");
let menus = document.querySelector(".menus");
let xBtn = document.querySelector(".x-btn");
let newsBoard = document.querySelector(".news-board");
let container = document.querySelector(".container");


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



// 뉴스 가지고 오는 함수
const getLatestNews = async () =>{
    newsList = [];
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    // 인스턴스를 쿼리만 떼온다던가 하는 작업들을 수작업으로 하지않고 미리 만들어놓은 함수를 사용한다.
    // URL 인스턴스 -> 다양한 작업에 필요한 함수와 변수들을 제공한다.
    // URL 인스턴스를 새로 생성한다. (http://~ 를 통해서 생성!)
    // console.log("uuu", url);

    // fetch : URL 호출. 요청.
    const response = await fetch(url);
    // 우리가 보고싶은 데이터는 body안에 있고 이것을 json 데이터로 뽑아야한다.
    const data = await response.json()
    // console.log("rrr", response);
    newsList = data.articles
    render()
    console.log("ddd", newsList);
};
getLatestNews();

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
        return `<div class="row news">
                <div class="col-lg-4">
                    <img class="news-img-size" src="${news.urlToImage}">
                </div>
                <div class="col-lg-8">
                    <h2>${news.title}</h2>
                    <p>${news.description}</p>
                    <div>${news.source.name} * ${news.publishedAt.split('T')[0]}</div>
                </div>
            </div>`;
    }).join("");


    newsBoard.innerHTML = newsHTML;
    console.log(newsHTML);
}






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