class Project{
    constructor(title,client,toDoList){
        this.title=title;
        this.client=client;
        this.toDoList=toDoList;
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title=value;
    }
    get client(){
        return this._client;
    }
    set client(value){
        this._client=value;
    }
    
}
class ToDoList{
    constructor(title,description,deuDate,priority){
        this.title=title;
        this.description=description;
        this.deuDate=deuDate;
        this.priority=priority;
    }
    get title(){
        return this._title;
    }
    set title(value){
        this._title=value;
    }
    get description(){
        return this._description;
    }
    set description(value){
        this._description=value;
    }
    get deuDate(){
        return this._deuDate;
    }
    set deuDate(value){
        this._deuDate=value;
    }
    get priority(){
        return this._priority;
    }
    set priority(value){
        this._priority=value;
    }
    
}

const projectControl=(()=>{
    let projects=[
        {
            title:"Railway",
            client:"infosys",
            taskList:[]
        },
        {
            title:"GST",
            client:"TCS",
            taskList:[]
        },
    ];

    function projrctOnDOM(){
        const sidBar=document.querySelector('.sidebar');
        sidBar.innerHTML=''
        projects.forEach((element,i) => {
            const sidBarElm=document.createElement(`div`);
            sidBarElm.innerHTML=`
            
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
            sidBarElm.setAttribute('id',i);
            sidBarElm.classList.add('projectDetails')
            sidBarElm.style.cssText=["width:200px;border:1px solid blue;background-color: rgb(203, 226, 235);margin:10px;border-radius:10px;padding:10px"]
            sidBar.appendChild(sidBarElm);
        });
        
        
        document.querySelectorAll('.deleteBtn').forEach(element=>{
            element.addEventListener('click',function (e) {
                const num=e.target.parentNode.parentNode.id;
                deletePro(num);

            })
        });
        document.querySelectorAll('.editBtn').forEach(element=>{
            element.addEventListener('click',function (e) {
                const num=e.target.parentNode.parentNode.id;
                ProjectInEdit.createDesign(num);
            });
        });

    }
    

   
    const addProjectBtn=document.querySelector('#addPro');
    addProjectBtn.addEventListener('click',function () {
        
        const pro=document.querySelector('.project');
        pro.innerHTML=`
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
        document.querySelector('#submitPro').addEventListener('click',function () {
            let newProject=new Project(`${document.querySelector('#title').value}`,`${ document.querySelector('#client').value}`,[]);
            
            projects.push(newProject);
            projrctOnDOM();
            pro.innerHTML=``;
        })
        
    });

    function deletePro(value){
        projects.splice(value,1);
        projrctOnDOM();
    }

    function getProjectsDB() {
        return projects;
    }

    return{
        projrctOnDOM,
        getProjectsDB
    }

})();
window.onload=projectControl.projrctOnDOM();


const ProjectInEdit=(()=>{
    let pHead=document.querySelector('#projecthead');
        const page=document.querySelector('.page');
        
        let projects=projectControl.getProjectsDB();
        console.log(projects);

        page.innerHTML=`<h1>Welcome to Indexnine</h1>`;
        


         function createDesign(value) {
            console.log("hello");
            console.log(typeof(value));
           
            console.log(pHead);
            pHead.innerHTML=`
            <table>
            <tr>
                <td>Title :</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>Description :</td>
                <td><input type="text"></td>
            </tr>
            <tr>
               
               <button type="submit">Save</button>
            </tr>
            </table>
            `;
        }

        return{
            createDesign
        }

})();