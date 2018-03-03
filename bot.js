function next1(){
    document.getElementById("error").style.display="block";
    document.getElementById("first").style.display="block";
}

function next2(){
    document.getElementById("first").style.display="block";
    document.getElementById("second").style.display="block";
    document.getElementById("newname").innerHTML = "HEY " + document.getElementById("name").value + " HOW OLD ARE YOU? ";
}

function next3(){
    document.getElementById("second").style.display="block";
    document.getElementById("third").style.display="block";
    var age = parseInt(document.getElementById("age").value);
}

function agevalidation(){
    var age = parseInt(document.getElementById("age").value);
    if(age>15 && age<=25){
        document.getElementById("second").style.display="block";
        document.getElementById("second").ondblclick =next4();
    }
    else{
        document.getElementById("second").style.display="block";
        document.getElementById("second").ondblclick = error();
    }
}

function error(){
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display="none";
    document.getElementById("third").style.display="none";
    document.getElementById("fourth").style.display="none";
    document.getElementById("fifth").style.display="none";
    document.getElementById("sixth").style.display="none";
    document.getElementById("seventh").style.display="none";
    document.getElementById("eighth").style.display="none";
    document.getElementById("nineth").style.display="none";
    document.getElementById("tenth").style.display="none";
    document.getElementById("error").style.display="block";
    document.getElementById("errorp").innerHTML = "SORRY, " + document.getElementById("name").value +" YOU ARE NOT QUALIFIED FOR A SCHOLARSHIP";
}

function success(){
    document.getElementById("success").style.display="block";
    document.getElementById("successp").innerHTML = "Congrats, " + document.getElementById("name").value +
    " <br>YOU HAVE SUCCESSFULLY APPLIED FOR LOLITA EDUCATIONAL CONSULT'S SCHOLARSHIP FOR 2018";
}

function next4(){
    document.getElementById("third").style.display="none";
    document.getElementById("fourth").style.display="block";
}

function next5(){
    document.getElementById("fourth").style.display="block";
    document.getElementById("fifth").style.display= "block";
}

function next6(){
    var cgpa = document.getElementById("cgpa").value;
    if(cgpa>=3.5&& cgpa<=5.0){
        document.getElementById("fifth").style.display="block";
        document.getElementById("sixth").style.display= "block";
    }
    else{
        document.getElementById("fifth").style.display="block";
        document.getElementById("fifth").ondblclick= error();
    }
}

function next7(){
    document.getElementById("sixth").style.display="block";
    document.getElementById("seventh").style.display= "block";
}

function next8(){
    document.getElementById("seventh").style.display="block";
    document.getElementById("eighth").style.display= "block";
}

function next9(){
    document.getElementById("eighth").style.display="block";
    document.getElementById("nineth").style.display= "block";
}

function next10(){
    document.getElementById("nineth").style.display= "block";
    document.getElementById("tenth").style.display= "block";
    document.getElementById("peaceout").innerHTML = "nnjhjjk";

}