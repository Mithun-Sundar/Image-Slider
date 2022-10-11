const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const img = document.querySelector(".img");
const imgs = document.querySelectorAll("img");

let cimg = 1;
let time;

next.addEventListener("click", () => {
    cimg++;
    clearTimeout(time);
    updateimg();
})
prev.addEventListener("click", () => {
    cimg--;
    clearTimeout(time);
    updateimg();
})

updateimg();

function updateimg() {
    if (cimg > imgs.length) {
        cimg = 1;
    }
    if (cimg == 0) {
        cimg = imgs.length;
    }

    img.style.transform = `translateX(-${(cimg-1)*500}px)`;

    time = setTimeout(() => {
        cimg++;
        updateimg();
    }, 5000);
}