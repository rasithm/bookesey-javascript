var overlay= document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var popupbutton=document.getElementById("add-popup-button")


popupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})


var cancel=document.getElementById("cancel-popup")


cancel.addEventListener("click",function(event){
    event.preventDefault(event)
})
cancel.addEventListener("click",function(){
    overlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var shortDescription=document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault(event)
})

addbook.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitle.value}</h1>
    <h5>${bookauthor.value}</h5>
    <P>${shortDescription.value}</p>
    <button onclick="dal(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
})
function dal(event)
{
    event.target.parentElement.remove()
}

