
// navbar menu

function myFunction(x) {
  x.classList.toggle("change")
}

// navbar scroll

window.addEventListener("scroll", function () {
  let header = this.document.querySelector("nav");
  header.classList.toggle("bg-color", window.scrollY > 0);
})


// SINGLE PAGENAV

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

// cog opened

let opened = document.querySelector('.cog-block');
let clickb = document.querySelector('.colors');

opened.onclick = () => {
  clickb.classList.toggle('open');
  opened.classList.toggle('open')
};


let hide = document.querySelector('.hide');
let show = document.querySelector('.show');
let cursorM = document.querySelector('.cursor-mouse');
let svg = document.querySelector('.svg');
let mouseH = document.querySelector('.cursor')

hide.onclick = () => {
  svg.classList.add('active');
  cursorM.classList.remove('active');
  mouseH.classList.add('active');
};

show.onclick = () => {
  cursorM.classList.add('active');
  svg.classList.remove('active');
  mouseH.classList.remove('active');
};

// color

// let black = document.querySelector('.black');
// let title = document.querySelector('.name');

// black.onclick = () => {
//   title.classList.add('black');
// };


// filter img

