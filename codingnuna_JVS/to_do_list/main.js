let taskInput = document.getElementById("task-input");
let addBtn = document.querySelector("#add-btn");
let taskList = [];
let checkBtn = document.querySelector("#check-btn");
let deleteBtn = document.querySelector("#delete-btn");
let tabs = document.querySelectorAll(".task-tabs div");
let menus = document.querySelectorAll(".menu");
let underLine = document.querySelector(".under-line");
let mode = 'all';
let filterList = [];

// let notDoneList = [];
// let doneList = [];
addBtn.addEventListener("click", addTask);
// checkBtn.addEventListener("click", function(){
//     isComplete = true;
// })
// console.log(tabs);
taskInput.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        addTask();
    }
})

menus.forEach((menu)=>menu.addEventListener("click", (e)=>menuIndicator(e)));
function menuIndicator(e){
    underLine.style.left = e.currentTarget.offsetLeft+"px";
    underLine.style.width = e.currentTarget.offsetWidth+"px";
    underLine.style.top = e.currentTarget.offsetTop+e.currentTarget.offsetHeight+"px";
}



for(let i=1;i<tabs.length;i++){
    tabs[i].addEventListener("click", function(event){filter(event)});
}

function addTask(){
    // 객체 사용!
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task);
    // console.log(taskList);
    render();
    taskInput.value = "";
    taskInput.focus();
}

// UI 요소 표시 함수
function render(){
    // 내가 선택한 탭에 따라서
    // 리스트를 달리 보여준다.
    list = [];
    if(mode=='all'){
        // all : taskList
        list = taskList;
    } else if(mode=='not-done' || mode=='done'){
        // done, not-done : filterList
        list = filterList;
    }
    let resultHTML = '';
    let taskBoard = document.querySelector("#task-board");
    for(let i=0;i<list.length;i++){
        if(list[i].isComplete == true){
            resultHTML += `<div class="list">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')" id="check-btn">
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                </button>
                <button onclick="deleteItem('${list[i].id}')" id="delete-btn">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
        } else{
            resultHTML += `<div class="list">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')" id="check-btn">
                    <i class="fa-solid fa-check"></i>
                </button>
                <button onclick="deleteItem('${list[i].id}')" id="delete-btn">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
        }
    }
    // moveToDone();
    taskBoard.innerHTML  = `${resultHTML}`;
}

// 전체를 새로 랜딩하기때문에 체크버튼을 눌러도 새로운 항목이 입력이 돼서
// 새로운 항목이 화면에 나타나기전에는 줄이 그어지지 않는다.


function toggleComplete(id){
    // for(let i=0;i<taskList[i].length;i++){
    //     taskList[i].addEventListener("click", function(){
    //         console.log(this)
    //     })
    // }
    // isComplete = true;
    // console.log(id);
    for(let i=0;i<taskList.length;i++){
        if(id == taskList[i].id){
            // console.log(taskList[i].taskContent);
            taskList[i].isComplete = !taskList[i].isComplete;
            // 왔다갔다 가능!!
            // render();

            break;
        }
    }
    filter();
    // render();
    // console.log(taskList);
}

function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 9);
}

function deleteItem(id){
    for(let i=0;i<taskList.length;i++){
        if(id==taskList[i].id){
            taskList.splice(i, 1);
            break;
        }
    }
    filter();
}

// function moveToDone(){
//     let notDoneList = [];
//     let doneList = [];
//     for(let i=0;i<taskList.length;i++){
//         if(taskList[i].isComplete == true){
//             doneList.push(taskList[i]);
//         } else if(taskList[i].isComplete == false){
//             notDoneList.push(taskList[i]);
//         }
//     }
//     console.log(doneList);
//     console.log(notDoneList);
// }



// ctrl + d
// target !! this는 안되네
function filter(event){
    // console.log(event.target.id);
    // mode = event.target.id      // let 없이 전역변수로 선언!
    filterList = [];
    if (event && event.target && event.target.id) {
        mode = event.target.id;
    }

    if(mode === "all"){
        // 전체 목록 보여주기
    } else if(mode === "not-done"){
        // not done 목록 보여주기
        // taskList[i].isComplete == false
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].isComplete === false){
                filterList.push(taskList[i]);
                // render();
            }
        }
        console.log(filterList);
    } else if(mode === "done"){
        // done 목록 보여주기
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].isComplete === true){
                filterList.push(taskList[i]);
                // render();
            }
        }
        console.log(filterList);
    }
    render();
    // console.log(filterList);
}


// Done에서 체크표시 해제했을때 바로 Not Done으로 안돌아감.