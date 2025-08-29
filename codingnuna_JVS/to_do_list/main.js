let taskInput = document.getElementById("task-input");
let addBtn = document.querySelector("#add-btn");
let taskList = [];
let checkBtn = document.querySelector("#check-btn");
let deleteBtn = document.querySelector("#delete-btn");

addBtn.addEventListener("click", addTask);
// checkBtn.addEventListener("click", function(){
//     isComplete = true;
// })

function addTask(){
    // 객체 사용!
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task);
    console.log(taskList);
    render();
    taskInput.value = "";
    taskInput.focus();
}

// UI 요소 표시 함수
function render(){
    let resultHTML = '';
    let taskBoard = document.querySelector("#task-board");
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].isComplete == true){
            resultHTML += `<div class="list">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')" id="check-btn">check</button>
                <button id="delete-btn">delete</button>
            </div>
        </div>`;
        } else{
            resultHTML += `<div class="list">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')" id="check-btn">check</button>
                <button id="delete-btn">delete</button>
            </div>
        </div>`;
        }
    }
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
    console.log(id);
    for(let i=0;i<taskList.length;i++){
        if(id == taskList[i].id){
            // console.log(taskList[i].taskContent);
            taskList[i].isComplete = !taskList[i].isComplete;
            // 왔다갔다 가능!!
            break;
        }
    }
    render();
    console.log(taskList);
}

function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 9);
}