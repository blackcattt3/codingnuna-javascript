let addBtn = document.querySelector("#add-btn");
let item = document.querySelector("#item")
let checkBtn = document.querySelector("#check-btn");
let deleteBtn = document.querySelector("#delete-btn");
// let taskList = document.querySelector("#task-list");
// let resultHTML = '';    -> 함수 외부에 선언했을 경우 전역변수이므로 실행할때마다 새로 누적되어 쌓임.
// but 함수 내부에 선언하면 함수가 호출될때마다 resultHTML이 새로 초기화. 

let itemList = [];

addBtn.addEventListener("click", addTask);

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
    let resultHTML = '';
    let taskList = document.querySelector("#task-list");
    for(let i=0;i<itemList.length;i++){
        if(itemList[i].isDone == true){
            resultHTML += `<div id="list" class="done">
                <div class="doneItems">${itemList[i].itemValue}</div>
                <div>
                    <button onclick="toggleSwitch('${itemList[i].id}')" type="button" id="check-btn">
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                    </button>
                    <button type="button" id="delete-btn">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>`
        } else{
            resultHTML += `<div id="list">
                <div>${itemList[i].itemValue}</div>
                <div>
                    <button onclick="toggleSwitch('${itemList[i].id}')" type="button" id="check-btn">
                        <i class="fa-solid fa-check"></i>
                    </button>
                    <button onclick="deleteItem('${itemList[i].id}')"type="button" id="delete-btn">
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
    showTask();
}

// 작은 따옴표
// 매개변수로 넘겨주기

function deleteItem(id){
    for(let i=0;i<itemList.length;i++){
        if(id == itemList[i].id){
            // console.log(itemList[i].id);
            itemList.splice(i,1)
            console.log(itemList);
            break;
        }
        // console.log(itemList);
    }
    showTask();
}

// 이제 제발 되라..
// 테스트