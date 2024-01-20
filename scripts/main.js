const myImage=document.querySelector("img");

myImage.onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/pngimg.com - github_PNG53.png"){
        myImage.setAttribute("src","images/purepng.com-cat-cuteanimalscats-115205020723cicy.png");
    }else{
        myImage.setAttribute("src","images/pngimg.com - github_PNG53.png");
    }
};