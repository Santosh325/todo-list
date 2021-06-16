var input = document.getElementById('inputItem');
var save = document.getElementById('save');
var ul = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function addListToUl() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
}

function addListByClick() {
    if(inputLength() > 0) {
        addListToUl();
    }
}

function addListByPressingEnter(event) {
    if(event.which === 13 && inputLength()) {
        addListToUl();
     }
}


save.addEventListener("click", addListByClick);


input.addEventListener('keypress', addListByPressingEnter);
