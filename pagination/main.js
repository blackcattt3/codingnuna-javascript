// totalResult(전체 자료 개수)
// pageSize (한페이지당 자료 몇개씩 보여줄건지)
// page (현재 내가 있는 페이지)
// groupSize (한 그룹당 페이지 몇개씩 넣을건지)
// totalPage (전체 페이지) -> Math.ceil(totalResult / pageSize)
// pageGroup (현재 내가 있는 그룹) -> Math.ceil(page / groupSize)
// lastPage (내가 현재 있는 그룹의 마지막 페이지) -> PageGroup * GroupSize
// firstPage (내가 현재 있는 그룹의 첫번째 페이지) -> lastPage - (GroupSize-1)

const totalResult = 1000;
const pageSize = 10;
let page = 1
const groupSize = 5;
const totalPage = Math.ceil(totalResult / pageSize); // 1000/10 = 100
const dummyNews = Array.from({ length: 73 }, (_, i) => `뉴스 ${i + 1}`);


const paginationRender = ()=>{

    const pageGroup = Math.ceil(page / groupSize);    // 1
    let lastPage = pageGroup * groupSize;
    if(lastPage>totalPage){
        lastPage = totalPage;
    }
    let firstPage = lastPage - (groupSize-1);
    if(firstPage<1){
        firstPage = 1;
    }

    paginationHTML = '';
    if(page>1){
        paginationHTML += `<li class="page-item" onclick="moveToPage(${1})"><a class="page-link" href="#"><<</a></li>
        <li class="page-item" onclick="moveToPage(${page-1})"><a class="page-link" href="#"><</a></li>`
    }
    for(let i=firstPage;i<=lastPage;i++){
        paginationHTML += `<li class="page-item ${i===page?"active":""}" onclick="moveToPage(${i})"><a class="page-link" href="#">${i}</a></li>`
    }
    if(page<totalPage){
        paginationHTML += `<li class="page-item" onclick="moveToPage(${page+1})"><a class="page-link" href="#">></a></li>
        <li class="page-item" onclick="moveToPage(${totalPage})"><a class="page-link" href="#">>></a></li>`
    }
    document.querySelector(".pagination").innerHTML = paginationHTML
    dataRender();
}  

const moveToPage = (clickPage)=>{
    page = clickPage;
    console.log(clickPage);
    paginationRender();
}

const dataRender = ()=>{
    const start = (page-1)*pageSize;
    const end = start+pageSize;
    const items = dummyNews.slice(start, end);

    document.querySelector(".news-board").innerHTML =
    items.map((item)=>`<div>${item}</div>`).join("");
}

paginationRender();