class Project {
    constructor(title, client, taskList) {
        this.title = title;
        this.client = client;
        this.taskList = taskList;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }

}
class ToDoList {
    constructor(title, description, deuDate, priority) {
        this.title = title;
        this.description = description;
        this.deuDate = deuDate;
        this.priority = priority;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get deuDate() {
        return this._deuDate;
    }
    set deuDate(value) {
        this._deuDate = value;
    }
    get priority() {
        return this._priority;
    }
    set priority(value) {
        this._priority = value;
    }

}

const projectControl = (() => {
    let projects = [
        {
            title: "Railway",
            client: "infosys",
            taskList: [
                {
                    title:"title of list",
                    description:"description of task",
                    deuDate:"27/06/2021",
                    priority:"#00FF00"
                }
            ]
        },
        {
            title: "GST",
            client: "TCS",
            taskList: [
                {
                    title:"title of list",
                    description:"description of task",
                    deuDate:"27/06/2021",
                    priority:"#00FF00"
                },
                {
                    title:"title of list",
                    description:"description of task",
                    deuDate:"27/06/2021",
                    priority:"#00FF00"
                }
            ]
        },
    ];

    function projrctOnDOM() {
        const sidBar = document.querySelector('.sidebar');
        sidBar.innerHTML = ''
        projects.forEach((element, i) => {
            const sidBarElm = document.createElement(`div`);
            sidBarElm.innerHTML = `
            
            <div>
                <table>
                <tr>
                    <td>Title :</td>
                    <td>${element.title}</td>
                </tr>
                <tr>
                    <td>Client :</td>
                    <td>${element.client}</td>
                </tr>
            
                </table>
            </div>
            <div>
                <button class="deleteBtn">Delete project</button>
                <button class="editBtn">Edit project</button>
            </div>
           
            `;
            sidBarElm.setAttribute('id', i);
            sidBarElm.classList.add('projectDetails')
            sidBarElm.style.cssText = ["width:200px;border:1px solid blue;background-color: rgb(203, 226, 235);margin:10px;border-radius:10px;padding:10px"]
            sidBar.appendChild(sidBarElm);
        });


        document.querySelectorAll('.deleteBtn').forEach(element => {
            element.addEventListener('click', function (e) {
                const num = e.target.parentNode.parentNode.id;
                deletePro(num);

            })
        });
        document.querySelectorAll('.editBtn').forEach(element => {
            element.addEventListener('click', function (e) {
                const num = e.target.parentNode.parentNode.id;
                ProjectInEdit.createDesign(num);
            });
        });

    }



    const addProjectBtn = document.querySelector('#addPro');
    addProjectBtn.addEventListener('click', function () {

        const pro = document.querySelector('.project');
        pro.innerHTML = `
        <h3>Enter Project Details</h3>
        <table>
            <tr>
                <td><label for="title">Title :</label></td>
                <td><input id="title" type="text"placeholder="Enter name of project"></td>
            </tr>
            <tr>
                <td><label for="client">Client :</label></td>
                <td><input id="client" type="text"placeholder="Enter name of Client"></td>
            </tr>
            <tr>
                <button id="submitPro"  type="submit">Submit</button>
            </tr>
        </table>
        `;
        document.querySelector('#submitPro').addEventListener('click', function () {
            let newProject = new Project(`${document.querySelector('#title').value}`, `${document.querySelector('#client').value}`, []);

            projects.push(newProject);
            projrctOnDOM();
            pro.innerHTML = ``;
        })

    });

    function deletePro(value) {
        projects.splice(value, 1);
        projrctOnDOM();
    }

    function getProjectsDB() {
        return projects;
    }

    return {
        projrctOnDOM,
        getProjectsDB
    }

})();
window.onload = projectControl.projrctOnDOM();


const ProjectInEdit = (() => {
    let pHead = document.querySelector('.projecthead');
    const page = document.querySelector('.page');
    const todo = document.querySelector(".projectToDo");

    let projects = projectControl.getProjectsDB();
    console.log(projects);





    function createDesign(value) {
        //console.log("hello");
        //console.log(typeof (value));
        todo.innerHTML=``;
       // console.log(pHead);
        //page.innerHTML=`<h1>Welcome to Indexnine</h1>`;
        pHead.innerHTML = `<h1>Welcome to Indexnine</h1>
            <table>
            <tr>
                <td>Title :</td>
                <td><input id="editInputT" type="text" value="${projects[value].title}"></td>
            </tr>
            <tr>
                <td>Description :</td>
                <td><input id="editInputC" type="text" value="${projects[value].client}"></td>
            </tr>
            <tr>
               
               <button id="submitOfEdit" type="submit">Save</button>
            </tr>
            <tr>
               
               <button id="addToDoList" type="submit">Add Task</button>
            </tr>
            </table>
            `;

            displayToDO(value);
       

        document.querySelector('#addToDoList').addEventListener('click', function () {
            addTaskToProject(value);
            
        })
        document.querySelector('#submitOfEdit').addEventListener('click', function () {
            let proElement = new Project(`${document.querySelector('#editInputT').value}`, `${document.querySelector('#editInputC').value}`, projects[value].taskList);
            projects[value] = proElement;
            //console.log(proElement);
            projectControl.projrctOnDOM();
            pHead.innerHTML = ``;
            todo.innerHTML = ``;
            
        })
    }

    function addTaskToProject(value) {
        todo.innerHTML=`<table>
        <tr>
           <td>List Title :</td>
           <td><input id="addItemTitle" type="text" value="" ></td>
           
           <td><button id="addItemSaveBtnnn">Save</button></td>
         

       </tr>
       <tr>
           <td>Description :</td>
           <td><input id="addItemDescription" type="text" value="" ></td>
        </tr>
       <tr>
            <td>DeuDate :</td>
            <td><input id="addItemDeuDate" type="date" value="" ></td>
       </tr>
       <tr>
           <td>Priority :</td>
           <td><input id="addItemPriority" list="#colorCode" type="color" value="" >
           <datalist id="colorCode">
            <option value="#ff0000"></option>
            <option value="#ffff00"></option>
            <option value="#00ff00"></option>
            </datalist>
           </td>
       </tr>
        </table>`;
        todo.style.cssText = ["width:400px;border:1px solid blue;background-color: rgb(203, 226, 235);margin:10px;border-radius:10px;padding:10px"];

        document.querySelector('#addItemSaveBtnnn').addEventListener('click',function () {
            let listNo=new ToDoList(
                document.querySelector('#addItemTitle').value,
                document.querySelector('#addItemDescription').value,
                document.querySelector('#addItemDeuDate').value,
                document.querySelector('#addItemPriority').value,

            );
            projects[value].taskList.push(listNo);
            todo.innerHTML=``;
            todo.style.cssText=[];
            createDesign(value);
            
        });
    }

    function displayToDO(value) {
        if (projects[value].taskList.length > 0) {
            
            projects[value].taskList.forEach((element,i) => {
            
                const item=document.createElement('div');
            item.innerHTML = `
                
            <table>
                <tr>
                   <td>List Title :</td>
                   <td>${element.title}</td>
                   <td><button class="editebtnnn">Edit</button></td>
                   <td><button class="deletebtnnn">Delete</button></td>
                 

               </tr>
               <tr>
                   <td>Description :</td>
                   <td>${element.description}</td>
                </tr>
               <tr>
                    <td>DeuDate :</td>
                    <td>${element.deuDate}</td>
               </tr>
               <tr>
                   <td>Priority :</td>
                   <td><input type="color" value="${element.priority}" disabled></td>
               </tr>
           </table>
                `;
                item.style.cssText = ["width:400px;border:1px solid blue;background-color: rgb(203, 226, 235);margin:10px;border-radius:10px;padding:10px"]
                item.setAttribute('id',i);
                todo.appendChild(item);
            });
           
        }

        document.querySelectorAll('.editebtnnn').forEach(element => {
            element.addEventListener('click', function (e) {
                const num = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                todo.innerHTML=``;
                editListItem(value,num);
                
                
            })
        });
        document.querySelectorAll('.deletebtnnn').forEach(element => {
            element.addEventListener('click', function (e) {
                const num = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
                deleteProItem(value,num);
                todo.innerHTML=``;
                createDesign(num);
            })
        });
    }
    function deleteProItem(value,num) {
        projects[value].taskList.splice(num, 1);
    
    }
    function editListItem(value,num) {
        todo.innerHTML=`<table>
        <tr>
           <td>List Title :</td>
           <td><input id="itemTitle" type="text" value="${projects[value].taskList[num].title}" ></td>
           
           <td><button id="itemSaveBtnnn">Save</button></td>
         

       </tr>
       <tr>
           <td>Description :</td>
           <td><input id="itemDescription" type="text" value="${projects[value].taskList[num].description}" ></td>
        </tr>
       <tr>
            <td>DeuDate :</td>
            <td><input id="itemDeuDate" type="date" value="${projects[value].taskList[num].deuDate}" ></td>
       </tr>
       <tr>
           <td>Priority :</td>
           <td><input id="itemPriority" list="#colorCode" type="color" value="${projects[value].taskList[num].priority}" >
           <datalist id="colorCode">
           <option value="#ff0000"></option>
           <option value="#ffff00"></option>
           <option value="#00ff00"></option>
           </datalist>
           </td>
       </tr>
        </table>`;
        todo.style.cssText = ["width:400px;border:1px solid blue;background-color: rgb(203, 226, 235);margin:10px;border-radius:10px;padding:10px"];

        document.querySelector('#itemSaveBtnnn').addEventListener('click',function () {
            let listNo=new ToDoList(
                document.querySelector('#itemTitle').value,
                document.querySelector('#itemDescription').value,
                document.querySelector('#itemDeuDate').value,
                document.querySelector('#itemPriority').value,

            );
            projects[value].taskList[num]=listNo;
            todo.innerHTML=``;
            todo.style.cssText=[];
            createDesign(num);
            
        });

    }

    return {
        createDesign
    }

})();