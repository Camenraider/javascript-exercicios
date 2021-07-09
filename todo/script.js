const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []
/** 
// list de objetos
// [{
//    id: 1,
//    name: 'html'
//},{
//    id: 2,
//    name:'js'
//},{
//    id: 3,
//    name:'css'
//}]
//
**/

newListForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const listName = newListInput.value
    if (listName === null || listName === '') return;
    const list = createList(listName)
    newListInput.value = null
    list.push(list)
    render()
})

function createList(name){
    return {id: Date.now().toString(), name: name }
}

function render() {
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

    
render()