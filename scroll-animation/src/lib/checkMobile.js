let style = document.createElement('style');
document.head.appendChild(style);

const rootDiv = document.querySelector('.root')

const maxWidth = 1200

let width = 0
let height = 0
function update() {
    width = document.body.offsetWidth;
    height = document.body.offsetHeight;

    let ratio = width / maxWidth;

    if (ratio > 1) { ratio = 1 }
    style.innerText = `:root { --ratio: ${ratio}; }`;

    if (
        (ratio < 1) &&
        (height > width)
    ) {
        rootDiv.classList.add('mobile')
    }
    else {
        rootDiv.classList.remove('mobile')
    }
}
update();

window.addEventListener('resize', function () {
    update();
})