var btn = document.querySelector(".reg a")
var flex = 0;
btn.addEventListener("click", function(){
    if(flex == 0){
        btn.style.backgroundColor = "green"
        flex = 1; 
    }
    else{
        btn.style.backgroundColor = "rgb(231, 21, 63)"
        flex = 0; 
    }   
})

