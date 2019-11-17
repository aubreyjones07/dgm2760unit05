/*jslint node:true*/
"use strict";

/*global alert*/




var companyTitle = "The Arborist";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "Events and Arrays";
document.getElementById("slogan").innerHTML = companySlogan;




const trees = ['Oak ', 'Pine ', 'Aspen ', 'Bald Cypress ']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')
const displayResults2 = document.querySelector('#displayResults2')
const displayResults3 = document.querySelector('#displayResults3')


// Display the list of trees inside the displayResults div

const listTrees = () => {
let treeList = ''



trees.forEach(tree => {
treeList += tree


})

displayResults.innerHTML = treeList 


document.querySelector('#lower_Trees').onclick = () => {

    let lower = treeList.toLowerCase()
    displayResults2.innerHTML = lower
}

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
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'Dude, I cannot remove the last tree cause there are NO TREES!'
    }


}



// Sort Trees A-Z

document.querySelector('#sort_Trees').onclick = () => {
        trees.sort()
        listTrees()
        /*const firstList = trees.sort()
        const secondList = listTrees()
        const order = firstList.push(secondList)
        displayResults2.textContent = order.length
        //let order = listTrees(trees.sort())
        console.log(order)*/
}



/* Sort Trees All Lowercase

document.querySelector('#lower_Trees').onclick = () => {
        listTrees()
   
}
*/

// Tree Number Three

document.querySelector('#show_Name3').onclick = () => {
    if (trees.length > 2){
        const three = trees[2]
        console.log(three)
        listTrees()
        displayResults3.textContent = three
    } else {
        errorElement.textContent = 'Dude, there are NO more than 3 TREES!'
        
    }


}



// Tree Number Four

document.querySelector('#show_Name4').onclick = () => {
    if (trees.length > 3){
        const four = trees[3]
        displayResults3.textContent = four
        console.log(four)
        listTrees(four)
    } else {
        errorElement.textContent = 'Dude, there are NO more than 4 TREES!'
        
    }


}

























