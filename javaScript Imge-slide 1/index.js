

var i = 0;
var images = [];
var time = 3000;

//Image List 
images[0] ='images/nature1.jpg';
images[1] ='images/nature3.jpg';
images[2] ='images/nature5.jpg';
images[3] ='images/nature6.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;


