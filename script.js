// SIDE NAVIGATION BAR SCROLL BEHAVIOR
window.addEventListener('scroll', function (event) {
    const sideNavBar = document.getElementById('section-_LQQKPp1HD');

    if (window.scrollY > 5) {
        sideNavBar.classList.add('sticky');
    } else {
        sideNavBar.classList.remove('sticky');
    }
});

// SIDE NAVIGATION BAR EXPAND & COLLAPSE FUNCTION
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

// SIDE NAVIGATION ACCORDION OPENS AND SCROLL INTO VIEW
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

const faqCont = document.querySelector('.hl-faq');
const faqs = faqCont.children;
const faq = faqs[faqNo];
const faqChild = faq.children
const faqHeading = faqChild[0];
const faqPanel = faqChild[1];

setTimeout(function () {
    faqHeading.click();
    faq.scrollIntoView({ behavior: "smooth", block: "center" });
}, 500);


// WHEN THE VIDEO HAS ENDED IT WILL START A 5 SECOND COUNTDOWN THEN WILL GO TO NEXT STEP
// ADDED CANCEL BUTTON TO CANCEL THE FUNCTION
function startTimer() {
    const loader = document.getElementById('loading');
    const spinner = document.getElementById('cirleSpinner');
    const playNext = document.querySelector('.play-next');
    var circle = document.getElementById('green-halo');
    var myTimer = document.getElementById('myTimer');
    var interval = 13;
    var angle = 0;
    var angle_increment = 1;
    loader.classList.remove('hidden');
    spinner.style.display = "block";
    playNext.style.display = "inline";

    window.timer = window.setInterval(function () {
        circle.setAttribute("stroke-dasharray", angle + ", 20000");

        // DO SOMETHING AFTER WHEN THE TIMER IS OVER
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

// CALL THE FUNCTION WHEN VIDEO HAS ENDED
player.on('ended', function () {
    startTimer();
});


// FUNCTION TO CANCEL GOING TO NEXT STEP
function cancelPlayNext() {
    window.clearInterval(window.timer);
    const loader = document.getElementById('loading');
    const spinner = document.getElementById('cirleSpinner');
    const playNext = document.querySelector('.play-next');
    spinner.style.display = "none";
    playNext.style.display = "none";
    loader.classList.add('hidden');
}

// GET THE USER ONBOARDING PROGRESS THEN STYLE COMPLETED STEPS
const textEl = document.querySelector('.contact_steps');
setTimeout(function () {
    const textP = textEl.getElementsByTagName('p')[0];

    // GET CURRENT COMPLETED STEPS
    const textS = textP.innerHTML;
    const progress = textS.split(" ");

    // SET PROGRESS TEXT IN SIDE NAVIGATION BAR HEADER
    const progTxt = document.querySelector('.progress-txt');
    const progH2 = progTxt.getElementsByTagName('h2')[0];
    progH2.innerHTML = 'Progress: ' + progress.length + ' / 15'

    // SET STEP ITEM INDEX
    function getNumber(txt) {
        const step = txt;
        if (step == 'welcome') {
            var faqNo = 0;
        } else if (step == 'socials') {
            var faqNo = 1;
        } else if (step == 'step1') {
            var faqNo = 2;
        } else if (step == 'step2') {
            var faqNo = 3;
        } else if (step == 'step3') {
            var faqNo = 4;
        } else if (step == 'step4') {
            var faqNo = 5;
        } else if (step == 'step5') {
            var faqNo = 6;
        } else if (step == 'step6') {
            var faqNo = 7;
        } else if (step == 'step7') {
            var faqNo = 8;
        } else if (step == 'step8') {
            var faqNo = 9;
        } else if (step == 'step9') {
            var faqNo = 10;
        } else if (step == 'step10') {
            var faqNo = 11;
        } else if (step == 'step11') {
            var faqNo = 12;
        } else if (step == 'step12') {
            var faqNo = 13;
        } else {
            var faqNo = 14;
        }
        return faqNo;
    }

    // GET ALL STEPS
    const container = document.querySelector(".hl-faq");
    const faqs = container.children;

    // UPDATE THE STEP ITEM TITLE TEXT AND COMPLETE BUTTON STYLE
    for (let i = 0; i < progress.length; i++) {
        const step = progress[i];
        const number = getNumber(step);
        const faq = faqs[number];
        const faqChild = faq.children
        const faqHeading = faqChild[0];
        const faqPanel = faqChild[1];
        const title = faqHeading.getElementsByTagName('a')[0];
        const complete = faqPanel.getElementsByTagName('a')[0];
        title.classList.add('completed');
        complete.innerHTML = '✅ Completed';
    }

    // STEP ITEM COMPLETE BUTTON FUNCTION
    container.addEventListener('click', function (event) {
        if (event.target.tagName == 'A') {
            if (event.target.innerHTML.includes('Completed')) {
                const trigger = event.target;
                const parent = trigger.closest('.hl-faq-child-panel');
                const title = parent.previousElementSibling;
                const stepTitle = title.getElementsByTagName('a')[0].innerHTML;
                const step = stepTitle.toLowerCase();

                // SET STEP ITEM CODENAME
                if (step.includes('welcome')) {
                    var codeNme = 'welcome';
                } else if (step.includes('socials')) {
                    var codeNme = 'socials';
                } else if (step.includes('step 1:')) {
                    var codeNme = 'step1';
                } else if (step.includes('step 2')) {
                    var codeNme = 'step2';
                } else if (step.includes('step 3')) {
                    var codeNme = 'step3';
                } else if (step.includes('step 4')) {
                    var codeNme = 'step4';
                } else if (step.includes('step 5')) {
                    var codeNme = 'step5';
                } else if (step.includes('step 6')) {
                    var codeNme = 'step6';
                } else if (step.includes('step 7')) {
                    var codeNme = 'step7';
                } else if (step.includes('step 8')) {
                    var codeNme = 'step8';
                } else if (step.includes('step 9')) {
                    var codeNme = 'step9';
                } else if (step.includes('step 10')) {
                    var codeNme = 'step10';
                } else if (step.includes('step 11')) {
                    var codeNme = 'step11';
                } else if (step.includes('step 12')) {
                    var codeNme = 'step12';
                } else {
                    var codeNme = 'call';
                }

                const newStep = codeNme;

                // CURRENT COMPLETED STEPS PLUS NEW COMPLETED STEP
                const steps = textS + ' ' + newStep;

                setTimeout(function () {
                    // GET THE HIDDEN INPUT ELEMENT
                    const stepToComplete = document.querySelector('#zduFaHuTGsHuJVmxlhn2');

                    // GET THE HIDDEN FORM SUBMIT BUTTON
                    const completeBtn = document.querySelector('.form-builder--btn-submit button');

                    if (stepToComplete) {
                        // SET THE HIDDEN FORM INPUT VALUE
                        document.getElementsByName('zduFaHuTGsHuJVmxlhn2')[0].value = steps;
                        document.getElementsByName('zduFaHuTGsHuJVmxlhn2')[0].dispatchEvent(new Event("input"));
                    
                        // CLICK THE SUBMIT BUTTON OF THE HIDDEN FORM TO UPDATE ONBOARDING PROGRESS
                        setTimeout(function () {
                            completeBtn.click();
                        }, 500);
                    }
                }, 500);
            }
        }
    });
}, 500);
