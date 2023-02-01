$(document).ready(function() {

// functions go here

});

document.addEventListener("mousemove", function(){
    let mouseposition_x = event.offsetX;
//    console.log(mousepotion_x);
    
    document.querySelector(".page-wrapper").style.background = `linear-gradient(to right, white 0%, white ${mouseposition_x}px, black ${mouseposition_x}px, black 100%)`;
    
//    console.log(`linear-gradient(to right, white 0%, white ${mousepotion_x}px, black ${mousepotion_x}px, black 100%)`);
});