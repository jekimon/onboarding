/*!
* PLEASE DO NOT EDIT WITHOUT PERMISSION
* GoHighLevel Onboarding Funnel Script
* author: Jek Tibayan
* company: Insert Fuel
*/
const loginUrl = 'https://engine.insertfuel.com/v2/preview/23n0YsF8qhJcW9PpeQJu'

if (localStorage.getItem("_ud") == null) {
    if (window.location.href != loginUrl) {
        localStorage.clear();
        sessionStorage.clear();
        window.location.replace(loginUrl);
    } else {
        localStorage.clear();
        sessionStorage.clear();
    }
} else {

    if (window.location.href == loginUrl) {
        localStorage.clear();
        sessionStorage.clear();

    } else {

        // SET NAVIGATION BAR SCROLL POSITION ON LOAD
        window.onload = function () {
            let scrollPosition = window.scrollY;
            const sideNavBar = document.getElementById('section-_LQQKPp1HD');
            if (window.scrollY > 5) {
                sideNavBar.classList.add('sticky');
            } else {
                sideNavBar.classList.remove('sticky');
            }
        };

        // SET NAVIGATION BAR SCROLL POSITION ON SCROLL
        window.addEventListener('scroll', function (event) {
            const sideNavBar = document.getElementById('section-_LQQKPp1HD');

            if (window.scrollY > 5) {
                sideNavBar.classList.add('sticky');
            } else {
                sideNavBar.classList.remove('sticky');
            }
        });

        // SET USER ACCOUNT DETAILS
        const contDetails = document.querySelector('.contact_details > div');
        if (contDetails) {
            const contName = contDetails.children[0].innerHTML;
            const contEmail = contDetails.children[1].innerHTML;
            const accName = document.getElementById('account-name');
            const accEmail = document.getElementById('account-email');
            accName.innerHTML = contName;
            accEmail.innerHTML = contEmail;
        }

        // SIGN OUT POPUP TOGGLE
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

        // SET STEP ITEM INDEX
        function getIndex(txt) {
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

        // SET STEP CODE NAME
        function getStepCode(text) {
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

        function getPrevCurrNext(index) {
            const stepsContainer = document.querySelector('.hl-faq');
                if (stepsContainer) {
                    const steps = stepsContainer.children;

                    // CURRENT STEP
                    const step = steps[index];
                    const stepTitle = step.getElementsByTagName('h4')[0].innerHTML;

                    // PREVIOUS STEP
                    const prevStep = step.previousElementSibling;
                    if (prevStep != null) {
                        var prevStepTitle = prevStep.getElementsByTagName('h4')[0].innerHTML;
                    } else {
                        var prevStepTitle = "";
                    }
             

                    // NEXT STEP
                    const nextStep = step.nextElementSibling;
                    if (nextStep != null) {
                        var nextStepTitle = nextStep.getElementsByTagName('h4')[0].innerHTML; 
                    } else {
                        var nextStepTitle = ""; 
                    }
                    
                    const prevCurrNext = { prev: prevStepTitle, curr: stepTitle, next: nextStepTitle};

                    return prevCurrNext;
                }
        }

        // SIDE NAVIGATION ACCORDION OPENS AND SCROLL INTO VIEW AFTER PAGE LOAD
        const pageTitle = document.querySelector('.img-feature-container h2').innerHTML;
        if (pageTitle) {
            const stepCode = getStepCode(pageTitle);
            const stepIndex = getIndex(stepCode);
            const stepsContainer = document.querySelector('.hl-faq');
            if (stepsContainer) {
                const steps = stepsContainer.children;

                // CURRENT STEP
                const step = steps[stepIndex];
                const stepChild = step.children
                const stepHeading = stepChild[0];
                const stepTitle = stepHeading.getElementsByTagName('h4')[0];
                const stepPanel = stepChild[1];

                // PREVIOUS STEP
                // const prevStep = step.previousElementSibling;
                // const prevStepChild = prevStep.children;
                // const prevStepHeading = prevStepChild[0];
                // const prevStepTitle = prevStepHeading.getElementsByTagName('h4')[0];
                // const prevStepPanel = prevStepChild[1];

                // NEXT STEP
                // const nextStep = step.nextElementSibling;
                // const nextStepChild = nextStep.children;
                // const nextStepHeading = nextStepChild[0];
                // const nextStepTitle = nextStepHeading.getElementsByTagName('h4')[0];
                // const nextStepPanel = nextStepChild[1];

                setTimeout(function () {
                    if (!stepTitle.classList.contains('completed')) {
                        stepHeading.click();
                        step.scrollIntoView({ behavior: "smooth", block: "center" });

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
                    const number = getIndex(step);

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

        function updateProgress(text) {
            const dataRaw = text.replaceAll('//', ',').replaceAll('/', '');
            const dataSteps = dataRaw.split(",");
            const progCon = document.querySelector('.progress-txt');
            const progEl = progCon.getElementsByTagName('h2')[0];
            progEl.innerHTML = 'Progress: ' + dataSteps.length + ' / 15';
        }

        function getCompletedSteps() {
            const dataCon = document.querySelector('.contact_steps');
            const dataEl = dataCon.getElementsByTagName('p')[0];
            const dataStr = dataEl.innerHTML;
            return dataStr;
        }

        function completeStep(aTitle, aBtn, current, selected, full) {
            if (aBtn.classList.contains('completed')) {
                aTitle.classList.remove('completed');
                aBtn.classList.remove('completed');
                aBtn.innerHTML = '⬜ Completed';
                var steps = current.replace('/' + selected + '/', '');
                var action = "Reset";
            } else {
                aTitle.classList.add('completed');
                aBtn.classList.add('completed');
                aBtn.innerHTML = '✅ Completed';
                if (current == "") {
                    var steps = '/' + selected + '/';
                } else {
                    var steps = current + '/' + selected + '/';
                }
                var action = "Complete";
            }

            const index = getIndex(selected);
            const step_ = getPrevCurrNext(index);
            const dataCon = document.querySelector('.contact_steps');
            const dataEl = dataCon.getElementsByTagName('p')[0];
            dataEl.innerHTML = steps;
            updateProgress(steps);
            // GET THE HIDDEN INPUT ELEMENT
            const completedSteps = document.getElementById('47XCCIASHeapQTFu5oJg');
            const selectedStep = document.getElementById('7T5nQdOA930d3evMHix9');
            const previousStep = document.getElementById('sGvEVb7C7qpgJrlftNbM');
            const nextStep = document.getElementById('f3FXM3g8oVm8BhxX6piI');
            const lastAction = document.getElementById('jP0GzzahGuAf3dEM9Rzb');
            // GET THE HIDDEN FORM SUBMIT BUTTON
            const completeBtn = document.querySelector('.form-builder--btn-submit button');

            if (completedSteps && selectedStep && lastAction) {
                // SET COMPLETED STEPS
                document.getElementsByName('47XCCIASHeapQTFu5oJg')[0].value = steps;
                document.getElementsByName('47XCCIASHeapQTFu5oJg')[0].dispatchEvent(new Event("input"));
                // SET CURRENT STEP
                document.getElementsByName('7T5nQdOA930d3evMHix9')[0].value = full;
                document.getElementsByName('7T5nQdOA930d3evMHix9')[0].dispatchEvent(new Event("input"));
                // SET PREVIOUS STEP
                document.getElementsByName('sGvEVb7C7qpgJrlftNbM')[0].value = step_.prev;
                document.getElementsByName('sGvEVb7C7qpgJrlftNbM')[0].dispatchEvent(new Event("input"));
                // SET NEXT STEP
                document.getElementsByName('f3FXM3g8oVm8BhxX6piI')[0].value = step_.next;
                document.getElementsByName('f3FXM3g8oVm8BhxX6piI')[0].dispatchEvent(new Event("input"));
                // SET LAST ACTION REQUEST
                document.getElementsByName('jP0GzzahGuAf3dEM9Rzb')[0].value = action;
                document.getElementsByName('jP0GzzahGuAf3dEM9Rzb')[0].dispatchEvent(new Event("input"));

                // CLICK THE SUBMIT BUTTON OF THE HIDDEN FORM TO UPDATE ONBOARDING PROGRESS
                setTimeout(function () {
                    completeBtn.click();
                    const spin = document.getElementById('popup-spinner');
                    const popContent = document.getElementById('confirmation-pop-up');
                    spin.style.display = 'block';
                    popContent.classList.add('loading');
                    setTimeout(function () {
                        const error = document.getElementById('error-container');
                        if (error) {
                            const formColumn = document.querySelector('.form-column');
                            formColumn.style.display = "flex";
                        } else {
                            console.log('Progress updated successfully')
                        }
                        popContent.classList.remove('loading');
                        spin.style.display = 'none';
                        closePopup();
                    }, 2000);
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

        function openPopup(request, current, selected, fullTitle) {
            const popup = document.querySelector('.confirm-popup');
            popup.style.display = "flex";
            if (request == "reset") {
                const popupTitle = document.getElementById('popupTitle');
                const popupText = document.getElementById('popupText');
                const popupAction = document.getElementById('completeButton');
                const popupPayload = document.getElementById('payload');
                const payloadJson = { c: current, s: selected, f: fullTitle };
                popupTitle.innerHTML = "Are you sure you want to uncheck this step?";
                popupText.innerHTML = "If it was marked complete by mistake, click Reset. Otherwise, click Cancel to proceed.";
                popupAction.innerHTML = "Reset";
                popupPayload.innerHTML = JSON.stringify(payloadJson);
                setTimeout(function () {
                    popup.style.opacity = "1";
                }, 100);
            } else {
                const popupTitle = document.getElementById('popupTitle');
                const popupText = document.getElementById('popupText');
                const popupAction = document.getElementById('completeButton');
                const popupPayload = document.getElementById('payload');
                const payloadJson = { c: current, s: selected, f: fullTitle };
                popupTitle.innerHTML = "Are you sure you've finished this step?";
                popupText.innerHTML = "If you've watched the video and completed the associated tasks, please click Complete. If not, click Cancel.";
                popupAction.innerHTML = "Complete";
                popupPayload.innerHTML = JSON.stringify(payloadJson);
                setTimeout(function () {
                    popup.style.opacity = "1";
                }, 100);
            }
        }

        function processAction() {
            const payload = document.getElementById('payload').innerHTML;
            const json = JSON.parse(payload);
            const faqCont = document.querySelector(".hl-faq");
            const faqs = faqCont.children;
            const number = getIndex(json.s);
            const faq = faqs[number];
            const faqChild = faq.children
            const faqHeading = faqChild[0];
            const faqPanel = faqChild[1];
            const title = faqHeading.getElementsByTagName('h4')[0];
            const btn = faqPanel.getElementsByTagName('u')[0];
            const completed = json.c;
            const selected = json.s;
            const fullTitle = json.f;

            // UPDATE COMPLETED STEPS
            completeStep(title, btn, completed, selected, fullTitle);
        }

        function closePopup() {
            const popup = document.querySelector('.confirm-popup');
            popup.style.opacity = "0";
            setTimeout(function () {
                popup.style.display = "none";
            }, 200);
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
                        const newStep = getStepCode(stepTitle);
                        const btnAClass = btnA.classList;

                        if (btnAClass.contains('completed')) {
                            openPopup("reset", currentStep, newStep, stepTitle);
                        } else {
                            openPopup("complete", currentStep, newStep, stepTitle);
                        }

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
}


