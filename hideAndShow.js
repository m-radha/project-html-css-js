const divContainer1 = document.querySelector('#elementToWorkOn1')
const divContainer2 = document.querySelector('#elementToWorkOn2')
const divContainer3 = document.querySelector('#elementToWorkOn3')
const divContainer4 = document.querySelector('#elementToWorkOn4')
let isClicked=true;

let showOrHide1 = function(){
    if(isClicked){
        divContainer1.style.display = 'block';
        isClicked=false;
    }
    else{
        divContainer1.style.display = 'none';
        isClicked=true;
    }
}

let showOrHide2 = function(){
    if(isClicked){
        divContainer2.style.display = 'block';
        isClicked=false;
    }
    else{
        divContainer2.style.display = 'none';
        isClicked=true;
    }
}

let showOrHide3 = function(){
    if(isClicked){
        divContainer3.style.display = 'block';
        isClicked=false;
    }
    else{
        divContainer3.style.display = 'none';
        isClicked=true;
    }
}

let showOrHide4 = function(){
    if(isClicked){
        divContainer4.style.display = 'block';
        isClicked=false;
    }
    else{
        divContainer4.style.display = 'none';
        isClicked=true;
    }
}

//toggle button
const btns = document.querySelectorAll('.outline');
const anchorBtn = document.querySelector('#anchor-sample-btn');
let btnOn = true;

