var pic=0;
var slides=[];
var time = 2500;
slides[0]='img/slide1.png';
slides[1]='img/slide2.png';
slides[2]='img/slide3.png';


i=0;

function slideshow(){
    document.getElementById("slides").src=slides[i];
    if(i<slides.length - 1 ){
        i=i+1;
    }
    else{
        i=0;
    }
    
    setTimeout("slideshow()",time);
}




window.onload=slideshow;
