let save = document.querySelectorAll('.save');
let like = document.querySelectorAll('.like');
let modal = document.querySelector('.modal1');

for (let i = 0; i < save.length; i++) {
    save[i].addEventListener('click', function () {
        modal.style.display = "block";
    });
}

for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', function () {
        modal.style.display = "block";
    });
}

let close = document.querySelector('.close_modal');

close.addEventListener('click', function () {
    modal.style.display = "none";
});

//         FIN MODAL ----------------------->