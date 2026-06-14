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