/*!
* PLEASE DO NOT EDIT WITHOUT PERMISSION
* GoHighLevel Onboarding Funnel Script
* author: Jek Tibayan
* company: Insert Fuel
*/

if (localStorage.getItem("_ud") == null) {
    localStorage.clear();
    sessionStorage.clear();
    const loginUrl = 'https://engine.insertfuel.com/v2/preview/23n0YsF8qhJcW9PpeQJu'
    if (window.location.href != loginUrl) {
        window.location.replace(loginUrl);
    }

} else {

    // SIDE NAVIGATION BAR SCROLL BEHAVIOR
    window.onload = function () {
        let scrollPosition = window.scrollY;
        const sideNavBar = document.getElementById('section-_LQQKPp1HD');
        if (window.scrollY > 5) {
            sideNavBar.classList.add('sticky');
        } else {
            sideNavBar.classList.remove('sticky');
        }
    };

    window.addEventListener('scroll', function (event) {
        const sideNavBar = document.getElementById('section-_LQQKPp1HD');

        if (window.scrollY > 5) {
            sideNavBar.classList.add('sticky');
        } else {
            sideNavBar.classList.remove('sticky');
        }
    });

    const accName = document.getElementById('account-name');
    const accEmail = document.getElementById('account-email');
    const contName = document.querySelector('.contact_details > div').children[0].innerHTML;
    const contEmail = document.querySelector('.contact_details > div').children[1].innerHTML;

    if (contName) {
        accName.innerHTML = contName;
        accEmail.innerHTML = contEmail;
    }

    const accBtn = document.querySelector('.sign-in-btn');
    accBtn.addEventListener("click", showHideSignout);
    function showHideSignout() {
        const signoutContainer = document.getElementById('custom-code-Z00b-mgovB');
        signoutContainer.classList.toggle("show");
    }

    // SIDE NAVIGATION BAR EXPAND & COLLAPSE FUNCTION
    const expandBtn = document.querySelector('.col-expand-btn');
    expandBtn.addEventListener("click", showHidden);

    function showHidden() {
        const sideNavBar = document.getElementById('section-_LQQKPp1HD');
        const videoColumn = document.querySelector('.video-column');
        const blankColumn1 = document.querySelector('.nav-column.blank-column');
        const blankColumn2 = document.querySelector('.extra-column.blank-column');
        sideNavBar.classList.toggle("collapsed");
        videoColumn.classList.toggle("expand");
        blankColumn1.classList.toggle("collapsed");
        blankColumn2.classList.toggle("collapsed");
    }

    function hideNavBar() {
        const sideNavBar = document.getElementById('section-_LQQKPp1HD');
        const videoColumn = document.querySelector('.video-column');
        const blankColumn1 = document.querySelector('.nav-column.blank-column');
        const blankColumn2 = document.querySelector('.extra-column.blank-column');
        sideNavBar.classList.add("collapsed");
        videoColumn.classList.add("expand");
        blankColumn1.classList.add("collapsed");
        blankColumn2.classList.add("collapsed");
    }

    function showNavBar() {
        const sideNavBar = document.getElementById('section-_LQQKPp1HD');
        const videoColumn = document.querySelector('.video-column');
        const blankColumn1 = document.querySelector('.nav-column.blank-column');
        const blankColumn2 = document.querySelector('.extra-column.blank-column');
        sideNavBar.classList.remove("collapsed");
        videoColumn.classList.remove("expand");
        blankColumn1.classList.remove("collapsed");
        blankColumn2.classList.remove("collapsed");
    }

    function checkViewportWidth() {
        const threshold = 768;
        if (window.innerWidth <= threshold) {
            hideNavBar();
        } else {
            showNavBar()
        }
    }

    checkViewportWidth();
    window.addEventListener('resize', checkViewportWidth);

    // SIDE NAVIGATION ACCORDION OPENS AND SCROLL INTO VIEW AFTER PAGE LOAD
    const pageTitle = document.querySelector('.img-feature-container h2').innerHTML;
    if (pageTitle) {
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
        } else if (title.includes('onboarding')) {
            var faqNo = 14;
        }

        const faqCont = document.querySelector('.hl-faq');
        if (faqCont) {
            const faqs = faqCont.children;
            const faq = faqs[faqNo];
            const faqChild = faq.children
            const faqHeading = faqChild[0];
            const title = faqHeading.getElementsByTagName('h4')[0];
            const faqPanel = faqChild[1];

            setTimeout(function () {
                if (!title.classList.contains('completed')) {
                    faqHeading.click();
                    faq.scrollIntoView({ behavior: "smooth", block: "center" });

                } else {
                    const iframe = document.getElementById('vimeo-player');
                    if (iframe) {
                        const url = new URL(iframe.src);
                        url.searchParams.set('autoplay', '0');
                        url.searchParams.set('muted', '0');
                        iframe.src = url.toString();
                    } else {
                        console.error('iframe element with id "your-iframe-id" not found.');
                    }
                }
            }, 600);
        }
    }

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
        } else if (step == 'call') {
            var faqNo = 14;
        }
        return faqNo;
    }


    // GET THE USER ONBOARDING PROGRESS THEN STYLE COMPLETED STEPS AFTER PAGE LOAD
    setTimeout(function () {

        // GET CURRENT COMPLETED STEPS
        const dataCon = document.querySelector('.contact_steps');
        const dataEl = dataCon.getElementsByTagName('p')[0];
        const dataStr = dataEl.innerHTML;

        // SET PROGRESS TEXT IN SIDE NAVIGATION BAR HEADER
        if (dataStr != "") {
            const dataRaw = dataStr.replaceAll('//', ',').replaceAll('/', '');
            const dataSteps = dataRaw.split(",");
            const progCon = document.querySelector('.progress-txt');
            const progEl = progCon.getElementsByTagName('h2')[0];
            progEl.innerHTML = 'Progress: ' + dataSteps.length + ' / 15';
            console.log(dataSteps)
            // GET ALL STEPS
            const faqCont = document.querySelector(".hl-faq");
            const faqs = faqCont.children;

            // UPDATE THE STEP ITEM TITLE TEXT AND COMPLETE BUTTON STYLE
            for (let i = 0; i < dataSteps.length; i++) {
                const step = dataSteps[i];
                const number = getNumber(step);
                const faq = faqs[number];
                const faqChild = faq.children
                const faqHeading = faqChild[0];
                const faqPanel = faqChild[1];
                const title = faqHeading.getElementsByTagName('h4')[0];
                const complete = faqPanel.getElementsByTagName('u')[0];
                title.classList.add('completed');
                complete.classList.add('completed');
                complete.innerHTML = '✅ Completed';
            }
        }

    }, 500);

    // START A 5 SECOND COUNTDOWN THEN WILL GO TO NEXT STEP
    function startTimer() {
        const loader = document.getElementById('loading');
        const spinner = document.getElementById('cirleSpinner');
        const playNext = document.querySelector('.play-next');
        const cancelBtn = document.querySelector('#loading button');
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
                spinner.style.display = "none";
                cancelBtn.style.marginButton = "0px"
                cancelBtn.style.pointerEvents = "none";
                cancelBtn.innerHTML = 'Redirecting to next step...'
                playNext.click();
            }
            angle += angle_increment;
        }.bind(this), interval);
    }

    // CALLS THE FUNCTION STARTTIMER WHEN VIDEO HAS ENDED
    const iframe = document.getElementById('vimeo-player');
    if (iframe) {
        const player = new Vimeo.Player(iframe);
        // CALL THE FUNCTION WHEN VIDEO HAS ENDED
        player.on('ended', function () {
            startTimer();
        });
    }

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
        } else if (step == 'call') {
            var faqNo = 14;
        }
        return faqNo;
    }

    function updateProgress(text) {
        const dataRaw = text.replaceAll('//', ',').replaceAll('/', '');
        const dataSteps = dataRaw.split(",");
        const progCon = document.querySelector('.progress-txt');
        const progEl = progCon.getElementsByTagName('h2')[0];
        progEl.innerHTML = 'Progress: ' + dataSteps.length + ' / 15';
    }

    function getSelectedStep(text) {
        const step = text.toLowerCase();

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
        } else if (step.includes('onboarding')) {
            var codeNme = 'call';
        }
        return codeNme;
    }

    function getCompletedSteps() {
        const dataCon = document.querySelector('.contact_steps');
        const dataEl = dataCon.getElementsByTagName('p')[0];
        const dataStr = dataEl.innerHTML;
        return dataStr;
    }

    function completeStep(aTitle, aBtn, current, selected) {
        if (aBtn.classList.contains('completed')) {
            aTitle.classList.remove('completed');
            aBtn.classList.remove('completed');
            aBtn.innerHTML = '⬜ Completed';
            var steps = current.replace('/' + selected + '/', '');
            var action = "Remove";
        } else {
            aTitle.classList.add('completed');
            aBtn.classList.add('completed');
            aBtn.innerHTML = '✅ Completed';
            if (current == "") {
                var steps = '/' + selected + '/';
            } else {
                var steps = current + '/' + selected + '/';
            }
             var action = "Add";
        }

        const dataCon = document.querySelector('.contact_steps');
        const dataEl = dataCon.getElementsByTagName('p')[0];
        dataEl.innerHTML = steps;
        updateProgress(steps);
        // GET THE HIDDEN INPUT ELEMENT
        const completedSteps = document.querySelector('#zduFaHuTGsHuJVmxlhn2');
        const selectedStep = document.querySelector('#QS91JexNdpYTzFQ74XKR');
        const lastAction = document.querySelector('#aMdFWgt2ZjAW7JRLglr0');
        // GET THE HIDDEN FORM SUBMIT BUTTON
        const completeBtn = document.querySelector('.form-builder--btn-submit button');

        if (completedSteps && selectedStep && lastAction) {
            // SET THE HIDDEN FORM INPUT VALUE
            document.getElementsByName('zduFaHuTGsHuJVmxlhn2')[0].value = steps;
            document.getElementsByName('zduFaHuTGsHuJVmxlhn2')[0].dispatchEvent(new Event("input"));

            document.getElementsByName('QS91JexNdpYTzFQ74XKR')[0].value = selected;
            document.getElementsByName('QS91JexNdpYTzFQ74XKR')[0].dispatchEvent(new Event("input"));

            document.getElementsByName('aMdFWgt2ZjAW7JRLglr0')[0].value = action;
            document.getElementsByName('aMdFWgt2ZjAW7JRLglr0')[0].dispatchEvent(new Event("input"));

            // CLICK THE SUBMIT BUTTON OF THE HIDDEN FORM TO UPDATE ONBOARDING PROGRESS
            setTimeout(function () {
                completeBtn.click();
            }, 100);
        }
    }

    function verify() {
        const completeBtn = document.querySelector('.form-builder--btn-submit button');
        const formColumn = document.querySelector('.form-column');
        const error = document.getElementById('error-container');
        completeBtn.click();
        setTimeout(function () {
            if (!error) {
                formColumn.style.display = "none";
            }
        }, 100);
    }

    // STEP ITEM COMPLETE BUTTON FUNCTION
    const container = document.querySelector(".hl-faq");
    if (container) {
        container.addEventListener('click', function (event) {
            if (event.target.tagName == 'U') {
                if (event.target.innerHTML.includes('Completed')) {
                    const btnA = event.target; // BUTTON
                    const parent = btnA.closest('.hl-faq-child-panel'); // PANEL
                    const title = parent.previousElementSibling; // TITLE
                    const titleA = title.getElementsByTagName('h4')[0];
                    const stepTitle = titleA.innerHTML;
                    const currentStep = getCompletedSteps();
                    const newStep = getSelectedStep(stepTitle);

                    // UPDATE COMPLETED STEPS
                    setTimeout(function () {
                        completeStep(titleA, btnA, currentStep, newStep);
                        setTimeout(function () {
                            const error = document.getElementById('error-container');
                            if (error) {
                                const formColumn = document.querySelector('.form-column');
                                formColumn.style.display = "flex";
                            } else {
                                console.log('Progress updated successfully')
                            }
                        }, 2000);
                    }, 100);
                }
            }
        });
    }

    function signout() {
        localStorage.clear();
        sessionStorage.clear();
           setTimeout(function () {
                location.reload();
           }, 200);
    }
}
