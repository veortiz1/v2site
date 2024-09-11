var current_slide=0;

function next(){
    if(current_slide==0){
        current_slide=1;
    }

    else if(current_slide==1){
        current_slide=2;
    }
    else if(current_slide==2){
        current_slide=0;
    }
console.log(current_slide);
    if(current_slide==0){
        console.log("here");
        document.getElementById("option1").src="img/picked.png";
        document.getElementById("option2").src="img/option.png";
        document.getElementById("option3").src="img/option.png";
        document.getElementById("about_screen").style.display="flex";
        document.getElementById("what_screen").style.display="none";
        document.getElementById("message_screen").style.display="none";
    }
    if(current_slide==1){
        console.log("here1");
        document.getElementById("option1").src="img/option.png";
        document.getElementById("option2").src="img/picked.png";
        document.getElementById("option3").src="img/option.png";
        document.getElementById("about_screen").style.display="none";
        document.getElementById("what_screen").style.display="flex";
        document.getElementById("message_screen").style.display="none";
    }
    if(current_slide==2){
        console.log("here2");
        document.getElementById("option1").src="img/option.png";
        document.getElementById("option2").src="img/option.png";
        document.getElementById("option3").src="img/picked.png";
        document.getElementById("about_screen").style.display="none";
        document.getElementById("what_screen").style.display="none";
        document.getElementById("message_screen").style.display="flex";
    }
}

function back(){
    if(current_slide==0){
        current_slide=2;
    }

    else if(current_slide==1){
        current_slide=0;
    }
    else if(current_slide==2){
        current_slide=1;
    }
console.log(current_slide);
    if(current_slide==0){
        console.log("here");
        document.getElementById("option1").src="img/picked.png";
        document.getElementById("option2").src="img/option.png";
        document.getElementById("option3").src="img/option.png";
        document.getElementById("about_screen").style.display="flex";
        document.getElementById("what_screen").style.display="none";
        document.getElementById("message_screen").style.display="none";
    }
    if(current_slide==1){
        console.log("here1");
        document.getElementById("option1").src="img/option.png";
        document.getElementById("option2").src="img/picked.png";
        document.getElementById("option3").src="img/option.png";
        document.getElementById("about_screen").style.display="none";
        document.getElementById("what_screen").style.display="flex";
        document.getElementById("message_screen").style.display="none";
    }
    if(current_slide==2){
        console.log("here2");
        document.getElementById("option1").src="img/option.png";
        document.getElementById("option2").src="img/option.png";
        document.getElementById("option3").src="img/picked.png";
        document.getElementById("about_screen").style.display="none";
        document.getElementById("what_screen").style.display="none";
        document.getElementById("message_screen").style.display="flex";
    }
}