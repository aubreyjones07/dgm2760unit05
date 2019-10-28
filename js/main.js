/*jslint node:true*/
"use strict";

/*global alert*/



function loadImage() {
    
}



var companyTitle = "The Arborist";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "Events and Arrays";
document.getElementById("slogan").innerHTML = companySlogan;




const trees = ['Oak ', 'Pine ', 'Aspen ', 'Bald Cypress ']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')



// Display the list of trees inside the displayResults div

const listTrees = () => {
let treeList = ''
trees.forEach(tree => {
treeList += tree

})
displayResults.innerHTML = treeList 

}

listTrees()


// Add redwood to the end

document.querySelector('#add_redwood').onclick = () => {
    trees.push(' Redwood ')
    listTrees()
}

// Add a pear to the start

document.querySelector('#add_pear').onclick = () => {
    trees.unshift(' Pear ')
    listTrees()
}


// remove tree one

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0){
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Dude, I cannot remove the first tree cause there are NO TREES!'
        
    }


}



// remove tree two

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 0){
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Dude, I cannot remove the second tree cause there are NO TREES!'
    }


}


// remove last tree

document.querySelector('#remove_treelast').onclick = () => {
    if (trees.length > 0){
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'Dude, I cannot remove the last tree cause there are NO TREES!'
    }


}



// Sort Trees A-Z

document.querySelector('#sort_Trees').onclick = () => {
        trees.sort()
        listTrees()
     
}



// Sort Trees All Lowercase

document.querySelector('#lower_Trees').onclick = () => {
        trees.toLowerCase()
        console.log(trees) 
        listTrees()
   
}


// Tree Number Three

document.querySelector('#show_Name3').onclick = () => {
    if (trees.length > 2){
        const three = trees[2]
        console.log(three)
        listTrees()
    } else {
        errorElement.textContent = 'Dude, there are NO more than 3 TREES!'
        
    }


}



// Tree Number Four

document.querySelector('#show_Name4').onclick = () => {
    if (trees.length > 3){
        const four = trees[3]
        console.log(four)
        listTrees(four)
    } else {
        errorElement.textContent = 'Dude, there are NO more than 4 TREES!'
        
    }


}


























