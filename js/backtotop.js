$(document).ready(function(){
    var backtop = document.getElementById("iconbacktotop");
    window.addEventListener("scroll",function(){
        if (document.documentElement.scrollTop >= 300){
            backtop.style.display = "flex";
        }else{
            backtop.style.display= "none";
        }
    })
    backtop.addEventListener("click",function(){
        document.documentElement.scrollTop =0;
    })
});