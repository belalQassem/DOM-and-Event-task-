let ChooseButton =document.querySelector("#choose");
let changeInput=document.querySelector("#change");
let box = document.querySelector(".box");



ChooseButton.addEventListener('click',()=>{
    let randomColor = Math.floor(Math.random()*9274720).toString(16);
    box.style.backgroundColor = `#`+randomColor;
    changeInput.value = `#`+randomColor ;
    
});
changeInput.oninput=()=>{
    box.style.backgroundColor = changeInput.value;
}

