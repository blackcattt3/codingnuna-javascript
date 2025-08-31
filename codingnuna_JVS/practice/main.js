let addBtn = document.querySelector("#add-btn");
let item = document.querySelector("#item")
let checkBtn = document.querySelector("#check-btn");
let deleteBtn = document.querySelector("#delete-btn");
let menus = document.querySelectorAll(".menu");
let underLine = document.querySelector(".under-line");
let mode = "all";
let filterList = [];
// let taskList = document.querySelector("#task-list");
// let resultHTML = '';    -> 함수 외부에 선언했을 경우 전역변수이므로 실행할때마다 새로 누적되어 쌓임.
// but 함수 내부에 선언하면 함수가 호출될때마다 resultHTML이 새로 초기화. 

let itemList = [];

addBtn.addEventListener("click", addTask);

// 필터 함수
menus.forEach((event)=>event.addEventListener("click", (e)=>filter(e)));
menus.forEach((event)=>event.addEventListener("click", (e)=>menuIndicator(e)));

function filter(e){
    filterList = [];
    if(e && e.target && e.target.id){
        mode = e.target.id;
    }

    if(mode == "not-done"){
        for(let i=0;i<itemList.length;i++){
            if(itemList[i].isDone === false){
                filterList.push(itemList[i]);
            }
        }
        // isDone == false인 애들 filterList에 푸시
    } else if(mode == "done"){
        // isDone == true인 애들 푸시
        for(let i=0;i<itemList.length;i++){
            if(itemList[i].isDone === true){
                filterList.push(itemList[i]);
            }
        }
    }
    // console.log(filterList);
    showTask();
}

function menuIndicator(e){
    underLine.style.left = e.currentTarget.offsetLeft+"px";
    underLine.style.width = e.currentTarget.offsetWidth+"px";
    underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight+"px";
}

function addTask(){
    if(item.value.trim() === ""){
        return;
    }
    Task = {
        id : getNewId(),
        itemValue : item.value,
        isDone : false
    }
    itemList.push(Task);
    // console.log(itemList[0]);
    showTask();
    item.value = "";
    item.focus();
}

function showTask(){
    // 기본 list는 itemList. mode == "done" or "not-done" 이면 filterList
    list = [];
    if(mode == "all"){
        list = itemList;
    }
    if(mode == "done" || mode == "not-done"){
        list = filterList;
    }
    let resultHTML = '';
    let taskList = document.querySelector("#task-list");
    for(let i=0;i<list.length;i++){
        if(list[i].isDone == true){
            resultHTML += `<div id="list" class="done">
                <div class="doneItems">${list[i].itemValue}</div>
                <div>
                    <button onclick="toggleSwitch('${list[i].id}')" type="button" id="check-btn">
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                    </button>
                    <button onclick="deleteItem('${list[i].id}')" type="button" id="delete-btn">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`
        } else{
            resultHTML += `<div id="list">
                <div>${list[i].itemValue}</div>
                <div>
                    <button onclick="toggleSwitch('${list[i].id}')" type="button" id="check-btn">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button onclick="deleteItem('${list[i].id}')" type="button" id="delete-btn">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`
        }
    }
    
    taskList.innerHTML = `${resultHTML}`;
}

function getNewId(){
    return Math.random().toString(36).substr(2, 16);
}

function toggleSwitch(id){
    for(let i=0;i<itemList.length;i++){
        if(id == itemList[i].id){
            itemList[i].isDone = !itemList[i].isDone;
            break;
        }
    }
    // console.log(id);
    filter();
    // deleteItem(id)
}

// 작은 따옴표
// 매개변수로 넘겨주기

function deleteItem(id){
    for(let i=0;i<itemList.length;i++){
        if(id == itemList[i].id){
            // console.log(itemList[i].id);
            itemList.splice(i,1)
            // console.log(itemList);
            break;
        }
        // console.log(itemList);
    }
    // console.log(itemList);
    filter();
}

// 이제 제발 되라..
// 테스트
// isDone이 true 일때 deleteItem이 안먹힘.