var popoverlay=document.querySelector(".overlay");
var poppopup=document.querySelector(".popup");
var addpop=document.getElementById("btn-pop");

addpop.addEventListener("click",function(){
    popoverlay.style.display="block";
    poppopup.style.display="block";
})

var canbook=document.getElementById("canbook");
canbook.addEventListener("click",function(event){
    event.preventDefault();
    popoverlay.style.display="none";
    poppopup.style.display="none";
})

var container=document.querySelector(".container");
var addbook=document.getElementById("addbook");
var titleinput=document.getElementById("title-input");
var authorinput=document.getElementById("author-input");
var desinput=document.getElementById("Des-input");

addbook.addEventListener("click",function(event){
    event.preventDefault();
    popoverlay.style.display="none";
    poppopup.style.display="none";
    var div=document.createElement("div");
    div.setAttribute("class","book-con");
    div.innerHTML=`<h2>${titleinput.value}</h2>
            <h5>${authorinput.value}</h5>
            <p>${desinput.value}</p>
            <button onclick="dltbook(event)">Delete</button>`;
    container.append(div);

    titleinput.value="";
    authorinput.value="";
    desinput.value="";
})

function dltbook(event){
    event.target.parentElement.remove();
}

