const numDiv = document.getElementById("numbers")
let list = numDiv.value.split(',')

document.getElementById("visualize").addEventListener("click", () =>{
    list = numDiv.value.split(',')
    window.localStorage.setItem('list',list)
    location.reload()
})

document.getElementById("reset").addEventListener("click", () =>{
    window.localStorage.removeItem('list')
    list = []
    numDiv.value = list
    location.reload()
})



if(window.localStorage.getItem('list')){
    const nums = window.localStorage.getItem('list')
    list = nums.split(',')
    numDiv.value = list
}
else {
    numDiv.value = ''
}

//  - - - - - - - - - - - - - - - - - - - - -

// This stays always like that

const parent_node = {text: {name: list[0]}};
const treeAsArray = [parent_node]

for(let i = 2; i <= list.length; i++){
    const node = {
        text: {name: list[i-1]},
        parent: treeAsArray[Math.floor(i/2-1)]
    }
    treeAsArray.push(node)
}

const config = { container: "#tree"}
treeAsArray.push(config)