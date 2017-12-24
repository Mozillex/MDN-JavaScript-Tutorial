// - - create new paragraph on any button click
function createParagraph(){
    var para = document.createElement('p');
    para.textContent = "Hey, thanks!!! That's nice.";
    document.body.appendChild(para);
}

var buttons = document.querySelectorAll('button');

for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', createParagraph);
}

//- - new section - - 
