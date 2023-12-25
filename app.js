function changer (color) {
    document.body.style.backgroundColor = color;
   
let headingColor = document.getElementsByClassName("heading1");
if(color === "Black") {
    for(let elm of heading1) {
        elm.style.color = "White";
    }
}
}