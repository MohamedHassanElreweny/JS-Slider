var itemlist =Array.from(document.querySelectorAll('.item img'));
var itemimg = document.querySelector('.itemimg');
var layout = document.querySelector('.layout');
var currentIndex=0;

for(var i=0;i<itemlist.length;i++){

    itemlist[i].addEventListener('click',function(e){
        var imgsrc = e.target.getAttribute('src');
        itemimg.style.backgroundImage = `url(${imgsrc})`;
        layout.classList.replace('d-none','d-flex');
        currentIndex =itemlist.indexOf(e.target);
    })
}

var nextbtn = document.querySelector('.itemimg div:last-child i:last-child');
nextbtn.addEventListener('click',nextImage)

var prevbtn = document.querySelector('.itemimg div:last-child i:first-child');
prevbtn.addEventListener('click',PrevImage)

var closebtn = document.querySelector('.itemimg  div:first-child i');
closebtn.addEventListener('click',function(){
    layout.classList.replace('d-flex','d-none');
})

document.addEventListener("click", function(e){
    if(e.target== layout){
        layout.classList.replace('d-flex','d-none');
    }
})
//ArrowRight
document.addEventListener('keyup',function(e){
    if(e.key == 'ArrowRight'){
        nextImage()
    }
});

//ArrowLeft
document.addEventListener('keyup',function(e){
    if(e.key=='ArrowLeft'){
        PrevImage();
    }
})

//
document.addEventListener('keyup',function(e){
    if(e.key == 'Escape'){
        layout.classList.replace('d-flex','d-none');
    }
});


function nextImage(){
    currentIndex++;
    if(currentIndex == itemlist.length){
     currentIndex = 0
    }
    var imgsrc = itemlist[currentIndex].getAttribute('src');
    itemimg.style.backgroundImage = `url(${imgsrc})`;
}

function PrevImage(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex = itemlist.length-1;
    }
    var imgsrc =  itemlist[currentIndex].getAttribute('src');
    itemimg.style.backgroundImage=`url(${imgsrc})`;
}