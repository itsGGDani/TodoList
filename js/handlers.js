function handleSave(){
    console.log(data)
    localStorage.setItem(readValue("input-Local-Storage"), JSON.stringify(data))
    displayInputBoxes()
}

function handleDelete(){
    localStorage.removeItem(readValue("delete-Local-Storage"))
    displayInputBoxes()
}

function handleLoad(){
    data = JSON.parse(localStorage.getItem(readValue("load-Local-Storage")))
    displayInputBoxes()
    displayTable()
}


function validateDate(date){
    const pattern = /^(0[0-9]|[12][0-9]|3[0-1]).(0[0-9]|1[0-2])$/
    return pattern.test(date)
}


function validateTime(time){
    const pattern = /^[0-9]{1,}$/
    return pattern.test(time)
}

function handleCheck(){
    const createDate = readValue("date").trim()
    const deadDate = readValue("deadTime").trim()
    const doingTime = readValue("doingTime").trim()
    const prio = readValue("prio").trim()
    const text = readValue("taskText").trim()

    if(validateDate(createDate) && validateDate(deadDate) && validateTime(doingTime) && prio != "" && text != ""){
        addToData(createDate, deadDate, doingTime, prio, text)
    }
    return false
}

function handleDelete(pos){
    for(let i = pos; i < data.length; i++){
        data[i] = data[i + 1]
    }

    data.length--
    displayTable()
}