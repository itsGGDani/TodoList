let data = [
    {date: "14.06",  deadTime:"15.06", doingTime:"2", prio:"important", taskText:"Doing A Project"},
    {date: "14.06",  deadTime:"15.06", doingTime:"2", prio:"important", taskText:"Doing A Project"},
    {date: "14.06",  deadTime:"15.06", doingTime:"2", prio:"important", taskText:"Doing A Project"},
    {date: "14.06",  deadTime:"15.06", doingTime:"2", prio:"important", taskText:"Doing A Project"}
]


window.onload = (event) =>{
    displayInputBoxes()
    displayTable()

    const form = document.getElementById('tasks')

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        handleCheck()
    })
}

function addToData(createDate, deadDate, doingTime, prio, text){
    data.push({date: createDate, deadTime: deadDate, doingTime: doingTime, prio: prio, taskText: text})
    console.log(data)
    displayTable()
}
//rendering Table
function displayTable(){
    clearContainer("container")
    const parent = document.getElementById("container")
    const keys = Object.keys(data[0])
    const table = document.createElement('table')
    
    table.classList.add("data-table")
    table.appendChild(renderTHead(keys))
    table.appendChild(renderTBody(keys, data))
    parent.appendChild(table)
}

function renderTH(txt, scope){
    const th = document.createElement("th")
    th.textContent = txt
    th.scope = scope
    return th
}

function renderTHeadTr(keys){
    const tr = document.createElement('tr')
    for(let i = 0; i < keys.length; i++){
        tr.appendChild(renderTH(keys[i], "col"))
    }
    tr.appendChild(renderTH("Action", "col"))
    return tr
}

function renderTHead(keys){
    const tHeadParent = document.createElement('thead')
    tHeadParent.appendChild(renderTHeadTr(keys))
    return tHeadParent
}

function renderTD(txt){
    const td = document.createElement('td')
    td.textContent = txt

    return td
}

function renderBtn(txt, handler){
    const btn = document.createElement('button')
    btn.textContent = txt
    btn.addEventListener('click', handler)
    return btn
}

function renderTBodyTr(keys, object, i){
    const tr = document.createElement('tr')
    tr.appendChild(renderTH(object[keys[0]], "row"))

    for(let i = 1; i < keys.length; i++){
        tr.appendChild(renderTD(object[keys[i]]))
    }
    const td = renderTD("")
    td.appendChild(renderBtn("Delete", () => handleDelete(i)))

    tr.appendChild(td)
    return tr
}

function renderTBody(keys, datas){
    const tBodyParent = document.createElement('tbody')
    for(let i = 0; i < datas.length; i++){
        tBodyParent.appendChild(renderTBodyTr(keys, datas[i], i))
    }
    
    return tBodyParent
}

function clearContainer(id){
    document.getElementById(id).replaceChildren()
}

function displayInputBoxes(){
    clearContainer("inputBoxes")
    const parent = document.getElementById("inputBoxes")
    parent.appendChild(renderInputBoxes())
}


function renderLable(txt, forr){
    const label = document.createElement('label')
    label.textContent = txt
    label.for = forr
    
    return label
}


function renderInputBox(type, id){
    const inputBox = document.createElement('input')
    inputBox.type = type
    inputBox.id = id

    return inputBox
}

function renderInputBoxes(){
    const parentUlt = document.createElement('ul')

    const li1 = document.createElement('li')
    li1.appendChild(renderLable("Save Local Storage", "input-Local-Storage"))
    li1.appendChild(renderInputBox("string", "input-Local-Storage"))
    li1.appendChild(renderBtn("Save", () => handleSave()))

    const li2 = document.createElement('li')
    li2.appendChild(renderLable("Loading Local Storage", "load-Local-Storage"))
    li2.appendChild(renderInputBox("string", "load-Local-Storage"))
    li2.appendChild(renderBtn("Load", () => handleLoad()))
    
    const li3 = document.createElement('li')
    li3.appendChild(renderLable("Delete Local Storage", "delete-Local-Storage"))
    li3.appendChild(renderInputBox("string", "delete-Local-Storage"))
    li3.appendChild(renderBtn("Delete", () => handleDelete()))


    parentUlt.append(li1, li2, li3)

    return parentUlt
}


function readValue(id){
    return document.getElementById(id).value
}