//1
const colors = ['red', 'yellow', 'green']
let index = 0;

function colorCircle() {
    this.style.background = colors[index]
}

function unHover() {
    if (index == 2) {
        index = 0
    } else {
        index++
    }
    this.style.background = 'purple'
}

document.querySelector('#color-block').addEventListener('mouseover', colorCircle)
document.querySelector('#color-block').addEventListener('mouseout', unHover)


//2
const secretBlock = document.querySelector('#secret-block');
const styles = [
    {
        text: 'У мене є секрет.',
        background: 'yellow',
        color: 'orange'
    },
    {
        text: 'Хочеш знати який?',
        background: 'green',
        color: 'brown'
    },
    {
        text: 'А я тобі не скажу.',
        background: 'blue',
        color: 'white'
    },

]

initHTML(styles[0], secretBlock);

function initHTML(obj, elem){
    elem.innerHTML = obj.text;
    elem.style.background = obj.background;
    elem.style.color = obj.color;
}

secretBlock.onmouseover = function(){
    initHTML(styles[1], this)
}
secretBlock.onmouseout = function(){
    initHTML(styles[0], this)
}
secretBlock.onmousedown = function(){
    initHTML(styles[2], this)
}
secretBlock.onmouseup = function(){
    initHTML(styles[1], this)
}


//3
document.querySelector('.img-container').addEventListener('click', e =>{
    if(e.target.tagName == 'IMG'){
        let userUrl = prompt('Введіть адресу сображуння!')
        e.target.src = userUrl
    }
})

//4
document.querySelector('ul').addEventListener('click', e =>{
    if(e.target.tagName =='LI'){
        e.target.style.background = e.target.textContent
    }
})