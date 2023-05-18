function dark() {

    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var bg11=document.getElementById("Bg11");
    var logos = document.getElementById("dLogo");
    var navlink=document.getElementsByClassName("nav-link");

    var image = document.getElementById("light");
    
    if (image.src.match("./images/dark.png")) {
        image.src = "./images/light.png";
        bg11.style.backgroundColor='#e9ebee'
        logos.src = "./images/metamask.png";
        navbar.style.backgroundColor='white';
        for(let i=0;i<navlink.length;i++){
        navlink[i].style.color='black';
       }        
    }
    else {
        image.src = "./images/dark.png";
        logos.src = "./images/darklogo.png";
        bg11.style.backgroundColor='#3c444b';
        navbar.style.backgroundColor='black';
        for(let i=0;i<navlink.length;i++){
        navlink[i].style.color='White';
       }  
    }
    
}



