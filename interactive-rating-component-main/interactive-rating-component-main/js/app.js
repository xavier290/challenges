
const stars = document.querySelector('.number-stars');
const count = document.querySelectorAll('.count');
const button = document.querySelector('#btn');

let selected = document.querySelector('.selected-number');
let countSelected = [];
// let selected = false;

count.forEach(element => {
    element.addEventListener('click', (e) => {
        // console.log(e.target.innerText);
        removeClass();
        e.target.classList.add('selected');
        // forbidden = false;
        
        let value = e.target.innerText;
        countSelected.push(value);
        localStorage.setItem('rating', JSON.stringify(countSelected));

        selected.innerHTML = `You selected ${value} out of 5`;
    });
});

function removeClass() {
    count.forEach(e => {
        e.classList.remove("selected");
    });
}

button.addEventListener('click', () => {
    document.querySelector('.rating-card').style.display = 'none';
    document.querySelector('.thanks-card').style.display = 'flex';
})