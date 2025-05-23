const waitForElement = (selector, callback) => {
    const intervalId = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
            clearInterval(intervalId);
            callback(element);
        }
    }, 100);
};

waitForElement('.cfaq-K5Ex15tMsl', (element) => {
    console.log('Element found:', element);
    myFunction(element);
});

function myFunction(element) {
    console.log("Function called with element:", element);
}

window.addEventListener('scroll', function (event) {
    const sideNavBar = document.getElementById('section-_LQQKPp1HD');

    if (window.scrollY > 5) {
        sideNavBar.classList.add('sticky');
    } else {
        sideNavBar.classList.remove('sticky');
    }
});

const expandBtn = document.querySelector('.col-expand-btn');
expandBtn.addEventListener("click", showHidden);

function showHidden() {
    const sideNavBar = document.getElementById('section-_LQQKPp1HD');
    const blankColumn1 = document.querySelector('.nav-column.blank-column');
    const blankColumn2 = document.querySelector('.extra-column.blank-column');
    sideNavBar.classList.toggle("collapsed");
    blankColumn1.classList.toggle("collapsed");
    blankColumn2.classList.toggle("collapsed");

}

const pageTitle = document.querySelector('.img-feature-container h2').innerHTML;
const title = pageTitle.toLowerCase();

if (title.includes('welcome')) {
    var faqNo = 0;
} else if (title.includes('socials')) {
    var faqNo = 1;
} else if (title.includes('step 1:')) {
    var faqNo = 2;
} else if (title.includes('step 2')) {
    var faqNo = 3;
} else if (title.includes('step 3')) {
    var faqNo = 4;
} else if (title.includes('step 4')) {
    var faqNo = 5;
} else if (title.includes('step 5')) {
    var faqNo = 6;
} else if (title.includes('step 6')) {
    var faqNo = 7;
} else if (title.includes('step 7')) {
    var faqNo = 8;
} else if (title.includes('step 8')) {
    var faqNo = 9;
} else if (title.includes('step 9')) {
    var faqNo = 10;
} else if (title.includes('step 10')) {
    var faqNo = 11;
} else if (title.includes('step 11')) {
    var faqNo = 12;
} else if (title.includes('step 12')) {
    var faqNo = 13;
} else {
    var faqNo = 14;
}

console.log(title);
const faqCont = document.querySelector('.hl-faq');
const faqs = faqCont.children;
const faq = faqs[faqNo];
const faqChild = faq.children
const faqHeading = faqChild[0];
const faqPanel = faqChild[1];
setTimeout(function () {
    // faq.classList.add('active');
    faq.className = "hl-faq-child active faq-contained-child"
    faqHeading.classList.add('active');
    faqPanel.style.opacity = '1';
    faqPanel.style.height = 'auto';
    faqPanel.style.removeProperty('padding');
    faq.scrollIntoView({ behavior: "smooth", block: "center" });

}, 500);
console.log(faq);
console.log(faqHeading);
console.log(faqPanel);

function startTimer() {
    const loader = document.getElementById('loading');
    const playNext = document.querySelector('.play-next');
    var circle = document.getElementById('green-halo');
    var myTimer = document.getElementById('myTimer');
    var interval = 13;
    var angle = 0;
    var angle_increment = 1;
    loader.classList.remove('hidden');
    loader.style.display = "block";
    playNext.style.display = "inline";

    window.timer = window.setInterval(function () {
        circle.setAttribute("stroke-dasharray", angle + ", 20000");

        if (angle >= 360) {
            window.clearInterval(window.timer);
            //  loader.classList.add('hidden');
             playNext.click();
        }
        angle += angle_increment;
    }.bind(this), interval);
}
const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('ended', function () {
    startTimer();
});
