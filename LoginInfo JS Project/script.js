var ame=document.getElementById("name");
var age=document.getElementById("age");
var course=document.getElementById("course");
var email=document.getElementById("email");
var message=document.getElementById("message");

var dltbtn=document.querySelector(".dltbtn");
var save=document.getElementById("save");
var z=document.querySelector(".z");

save.addEventListener("click",function(event){
    event.preventDefault();
    
    var selectedGender = document.querySelector('input[name="gender"]:checked');
    var genderValue = selectedGender ? selectedGender.value : "";
    
    var r=document.createElement("tr");
    r.innerHTML=`<tr>
                <td>${ame.value}</td>
                <td>${age.value}</td>
                <td>${course.value}</td>
                <td>${genderValue}</td>
                <td>${email.value}</td>
                <td><button class="dltbtn" onclick="dlt(event)">Delete</button></td>
            </tr>`;
            z.append(r);

            ame.value = "";
            age.value = "";
            email.value = "";
            course.selectedIndex = 0;
            if (selectedGender) {
                selectedGender.checked = false;
    }
    message.textContent="Form Submitted Successfully!!";

    setTimeout(function(){
        message.textContent="";
    },1000);
})

function dlt(event) {
    event.preventDefault(); 
    let button = event.target; 
    let row = button.closest('tr');  
    row.remove();                 
}