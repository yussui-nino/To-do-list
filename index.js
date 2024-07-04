function newProject(){
    let list = []
    
    function NewP(){
            dialog.showModal()
    }
    function SubP(event){
        dialog.close()
        event.preventDefault()

        const title = document.querySelector('#title')
        const SelectedDescription = document.querySelector('#SelectedDescription')
        const SelectedLastTime = document.querySelector('#SelectedLastTime')
        const SelectedPriority = document.querySelector('#SelectedPriority')
        
        const myProject = {
            title: title.value,
            Description: SelectedDescription.value,
            TimeLimit: SelectedLastTime.value,
            Priority: SelectedPriority.value
        }
        list.push(myProject)
        console.log(list)
        display()

    }
    function DelP(event){
        const number = event.target.getAttribute('data-id');
        list.splice(number, 1);
        display();
        console.log("Item deleted, new list is: " + list);
        i--;
        event.target.parentNode.remove();
    }
    return{NewP,DelP,SubP,list}
}

function alertList(){
    alert(projecto.list)
}
const projecto = new newProject()

let i = 0

function display(){
    console.log("yo chico")
    for(; i<projecto.list.length; i++){
       const project = projecto.list[i]

       const a = document.createElement('div')
        a.id = `${i}`;
       const b = document.createElement('h1')
       b.textContent = "Project: " + project.title
       const c = document.createElement('h3')
       c.textContent = "Description: " + project.Description
       const d = document.createElement('h4')
       d.textContent = "Time limit for the project: " + project.TimeLimit
       const e = document.createElement('h4')
       e.innerHTML = "Project priority: " + project.Priority
       const f = document.createElement('button')
       f.textContent = "Project done?";
       f.setAttribute('data-id', i);
       f.addEventListener('click', SetCheckTrue);

       const g = document.createElement('button');
       g.textContent = "Delete Project";
       g.setAttribute('data-id', i);
       g.addEventListener('click', projecto.DelP);

       a.appendChild(b)
       a.appendChild(c)
       a.appendChild(d)
       a.appendChild(e)
       a.appendChild(f)
       a.appendChild(g)

       MainPart.appendChild(a)
    }}
    function currProjects(){
        container.innerHTML = ""
        container.appendChild(header)
        container.appendChild(MainPart)
    }
    function finProjects(){
        container.innerHTML = ""
        container.appendChild(header)
        container.appendChild(finished)
    }
const container = document.createElement('div')
container.id = "container"

// Header

const header = document.createElement('div')
header.classList.add('header')

container.appendChild(header)

const form = document.querySelector('form')

const dialog = document.createElement('dialog')

dialog.innerHTML = `
<form action=""></form>
<label for="title">Project Title:</label>
<input type="text" id="title">
<label for="SelectedDescription">Description for the project:</label>
<input type="text" id="SelectedDescription">
<label for="SelectedLastTime">Select final date for project:</label>
<input type="date" id="SelectedLastTime">
<label for="SelectedPriority">Priority:</label>
<input type="number" id="SelectedPriority" min= "1" max= "4" step= "1">
<button class ="SubmitInfos" type="submit">Submit</button>
`


header.appendChild(dialog)

const AddButton = document.createElement('button')
const AddButtonText = document.createElement('h1')

AddButtonText.textContent = "Add project"

AddButton.appendChild(AddButtonText)
header.appendChild(AddButton)

const CurrentProjects = document.createElement('button')
const FinishedProjects = document.createElement('button')

CurrentProjects.addEventListener('click', currProjects)
FinishedProjects.addEventListener('click', finProjects)

const currH1 = document.createElement('h1')
const finH1 = document.createElement('h1')

currH1.textContent = "Current projects"
finH1.textContent = "Finished projects"

CurrentProjects.appendChild(currH1)
FinishedProjects.appendChild(finH1)

header.appendChild(CurrentProjects)
header.appendChild(FinishedProjects)

// Main Part

const MainPart = document.createElement('div')
MainPart.classList.add('MainPart')

container.appendChild(MainPart)

const finished = document.createElement('div')
finished.classList.add('finished')

function SetCheckTrue(event){
    const DoneProject = event.target.parentNode;
    finished.appendChild(DoneProject);
    i--;

}

document.body.appendChild(container)

const SubmitButton = document.querySelector('.SubmitInfos')

AddButton.addEventListener('click' , projecto.NewP)
SubmitButton.addEventListener('click' , projecto.SubP)

// const project1 = document.createElement('div')
// const project2 = document.createElement('div')
// const project3 = document.createElement('div')

// project1.id = "100"
// project2.id = '101'
// project3.id = '102'
// const title1 = document.createElement('h1')
// const title2 = document.createElement('h1')
// const title3 = document.createElement('h1')

// title1.innerHTML = "Project 1"
// title2.innerHTML = "Project 2"
// title3.innerHTML = "Project 3"

// const Description1 = document.createElement('h3')
// const Description2 = document.createElement('h3')
// const Description3 = document.createElement('h3')

// Description1.innerHTML = "Description about the project and a lot of details here might lower it to h3 in fact"
// Description2.innerHTML = "Description about the project and a lot of details here might lower it to h3 in fact"
// Description3.innerHTML = "Description about the project and a lot of details here might lower it to h3 in fact"

// const TimeLimit1 = document.createElement('div')
// const TimeLimit2 = document.createElement('div')
// const TimeLimit3 = document.createElement('div')

// TimeLimit1.innerHTML = "15/07/2024"
// TimeLimit2.innerHTML = "17/07/2024"
// TimeLimit3.innerHTML = "19/07/2024"

// const priority1 = document.createElement('div')
// const priority2 = document.createElement('div')
// const priority3 = document.createElement('div')

// priority1.innerHTML = "1"
// priority2.innerHTML = "2"
// priority3.innerHTML = "3"

// const checked1 = document.createElement('div') 
// const checked2 = document.createElement('div') 
// const checked3 = document.createElement('div')

// checked1.innerHTML = '<button onclick="SetCheckTrue()"></button>'
// checked2.innerHTML = '<button onclick="SetCheckTrue()"></button>'
// checked3.innerHTML = '<button onclick="SetCheckTrue()"></button>'

// const delete1 = document.createElement('button');
//        delete1.textContent = "Delete Project";
//        delete1.setAttribute('data-id', i);
//        delete1.addEventListener('click', projecto.DelP);

// const delete2 = document.createElement('button');
//        delete2.textContent = "Delete Project";
//        delete2.setAttribute('data-id', i);
//        delete2.addEventListener('click', projecto.DelP);

// const delete3 = document.createElement('button');
//        delete3.textContent = "Delete Project";
//        delete3.setAttribute('data-id', i);
//        delete3.addEventListener('click', projecto.DelP);

// project1.appendChild(title1)
// project1.appendChild(Description1)
// project1.appendChild(TimeLimit1)
// project1.appendChild(priority1)
// project1.appendChild(checked1)
// project1.appendChild(delete1)

// project2.appendChild(title2)
// project2.appendChild(Description2)
// project2.appendChild(TimeLimit2)
// project2.appendChild(priority2)
// project2.appendChild(checked2)
// project2.appendChild(delete2)

// project3.appendChild(title3)
// project3.appendChild(Description3)
// project3.appendChild(TimeLimit3)
// project3.appendChild(priority3)
// project3.appendChild(checked3)
// project3.appendChild(delete3)

// MainPart.appendChild(project1)
// MainPart.appendChild(project2)
// MainPart.appendChild(project3)
