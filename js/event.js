// Option 2 .................

function makeRed(){
    document.body.style.backgroundColor="red";
}


// Option 3 ............

const makeYellow= document.getElementById("yellow");
makeYellow.onclick= yellowColor;

function yellowColor(){
    document.body.style.backgroundColor="yellow";
}

// Option 3 another ............

const makePurple= document.getElementById('purple');

makePurple.onclick= function purpleButton(){
    document.body.style.backgroundColor='purple';
}