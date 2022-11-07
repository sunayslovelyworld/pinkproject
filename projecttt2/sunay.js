let input = document.querySelector('input');

input.addEventListener('click', function(event) {
    event.target.style.outline = '0'
})
input.addEventListener('focus', function(event) {
    event.target.style.outline = '0';
})


let list = document.querySelector('.list');
let btn = document.querySelector('.button')
let deletebtn = document.querySelector('.delete');
let firstinput = document.querySelector('input');
firstinput.addEventListener('blur', () => {
    firstinput.setAttribute("value", firstinput.value);
})

function addlistitem() {
    list.innerHTML += `<div class="input">
    <input type="text">
    <button class="delete"></button>
</div>`;
    list.style.outline = '0'
    let deletebtnnew = document.querySelectorAll('.delete');
    deletebtnnew.forEach(el => {
        el.addEventListener('click', deletefunc)

        function deletefunc(event) {
            event.target.parentElement.remove()
        }
    })

    let inputs = document.querySelectorAll('input');
    inputs.forEach(el => {

        el.addEventListener('click', function(event) {
            event.target.style.outline = '0'

        })
        el.addEventListener('focus', function(event) {
            event.target.style.outline = '0';
        })

        el.addEventListener('blur', () => {
            el.setAttribute("value", el.value);
        })
    })

    let inpdiv = document.querySelectorAll('.input');
    inpdiv.forEach(el => {
        el.style.border = 'none'
    })
    list.style.border = '1px solid #C4C4C4';
}

btn.addEventListener('click', addlistitem);


// SORT
let arr = [];
let counter = 0;

let sortbtn = document.querySelector('.sortbtn');
sortbtn.addEventListener('click', sorter);
sortbtn.addEventListener('click', demo);
sortbtn.addEventListener('click', firstsort);

function demo() {
    let deletebtnnew = document.querySelectorAll('.delete');
    deletebtnnew.forEach(el => {
        el.addEventListener('click', deletefunc)

        function deletefunc(event) {
            event.target.parentElement.remove()
        }
    })
}

function firstsort() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(el => {

        el.addEventListener('click', function(event) {
            event.target.style.outline = '0'

        })
        el.addEventListener('focus', function(event) {
            event.target.style.outline = '0';
        })

        el.addEventListener('blur', () => {
            el.setAttribute("value", el.value);
        })
    })

    let inpdiv = document.querySelectorAll('.input');
    inpdiv.forEach(el => {
        el.style.border = 'none'
    })
    list.style.border = '1px solid #C4C4C4';
}

function sorter() {

    let allist = document.querySelectorAll('input');

    allist.forEach(el => arr.push(el.value))
    console.log(arr);
    list.innerHTML = '';

    if (counter == 0) {
        domcreator(counter);
        counter++;
        decrease.src = "images/increase2.png"
    } else {
        domcreator(counter);
        counter--;
        decrease.src = "images/decrease1.png"
    }
    arr = [];
}

function domcreator(el) {
    if (el == 0) {
        let element = ''

        arr.sort(function(a, b) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        });

        arr.map(c => {
            element += `<div class="input">
            <input type="text" value="${c}">
            <button class="delete"></button>
        </div>`;
        });
        list.innerHTML = element
        console.log(arr);

    } else {
        let element = ''

        arr.sort(function(a, b) {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        });
        arr.map(c => {
            element += `<div class="input">
            <input type="text" value="${c}">
            <button class="delete"></button>
        </div>`;

        });
        list.innerHTML = element
        console.log(arr);
    }
}
//Mouseover-mouseout
let decrease = document.querySelector('.decrease')
sortbtn.addEventListener('mouseover', () => {
    let img = document.getElementById('photos').getAttribute('src');
    if (img == "images/increase2.png") {
        decrease.src = 'images/increase1.png'
    } else if (img == "images/decrease1.png") {
        decrease.src = 'images/decrease2.png'
    }
})
sortbtn.addEventListener('mouseout', () => {
    let img = document.getElementById('photos').getAttribute('src');

    if (img == "images/increase1.png") {
        decrease.src = 'images/increase2.png'

    } else if (img == "images/decrease2.png") {
        decrease.src = 'images/decrease1.png'
        
    }
})
