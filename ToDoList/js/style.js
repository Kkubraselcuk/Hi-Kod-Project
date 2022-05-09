const newInput = document.querySelector('#task');
const buton = document.querySelector(`.button`);
const list = document.querySelector('ul');


for (let i = 0; i < list.children.length; i++) {
    list.children[
        i
    ].innerHTML += `<button style="margin-right: 20px; margin-top:15px"class="close">&times</button></li>`;
}
let sayac = 0;
function newElement() {
    if (newInput.value != '' || newInput.value != ' ') {
        list.innerHTML += `<li>${newInput.value}<button style="margin-right: 20px; margin-top:15px" class="close">&times</button></li>`;
        localStorage.setItem(sayac, newInput.value);
        sayac++;
        let toastBasarili = document.querySelector('.success');
        let toastAlertBasarili = new bootstrap.Toast(toastBasarili);
        toastAlertBasarili.show();
    } else {
        let toastBasarisiz = document.querySelector('.error');
        let toastAlertBasarisiz = new bootstrap.Toast(toastBasarisiz);
        toastAlertBasarisiz.show();
    }
}
buton.addEventListener('submit', newElement);

list.addEventListener('click', function (e) {
    if (e.target.className == '' || e.target.className == 'checked') {
        e.target.classList.toggle('checked');
    } else {
        e.target.parentElement.remove();
    }
});