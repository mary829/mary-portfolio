
const text = ["Web Developer", "Network Engineer", "IT Student"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    const typing = document.querySelector(".typing");

    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        typing.innerHTML = current;

        if (j == text[i].length) isDeleting = true;
        if (j == 0) {
            isDeleting = false;
            i++;
        }

        setTimeout(type, 100);
    }
}

type();


// Scroll Animation
const elements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});