const myImage=document.querySelector("img");

myImage.onclick=()=>{
    const mySrc=myImage.getAttribute("src");
    if(mySrc==="images/pngimg.com - github_PNG53.png"){
        myImage.setAttribute("src","images/purepng.com-cat-cuteanimalscats-115205020723cicy.png");
    }else{
        myImage.setAttribute("src","images/pngimg.com - github_PNG53.png");
    }
};

let myButton=document.querySelector("button");
let myHeading=document.querySelector("h1");

function setUserName(){
    const myName=prompt("あなたの名前を入力してください。");
    if(!myName){
        setUserName();
    }else{
    localStorage.setItem("name",myName);
    myHeading.textContent=`${myName}さん、github使ってる？`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName=localStorage.getItem("name");
    myHeading.textContent=`${storedName}さん、githubにはもう慣れた？`;
}

myButton.onclick=setUserName();
