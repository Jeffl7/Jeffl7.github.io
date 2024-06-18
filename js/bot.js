const spotBtn = document.getElementById("spotBtn");
const futuresBtn = document.getElementById("futuresBtn");
const spotSlider = document.querySelector(".slider");
const futuresSlider = document.querySelectorAll(".slider")[1];

document.addEventListener('DOMContentLoaded', function() {
    function initSlider(sliderClass, radioName) {
        const slidesContainer = document.querySelector(`.${sliderClass} .slider-inner`);
        const slides = document.querySelectorAll(`.${sliderClass} .slide`);
        const radioButtons = document.querySelectorAll(`input[name="${radioName}"]`);
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID;
        let currentIndex = 0;

        slidesContainer.addEventListener('mousedown', dragStart);
        slidesContainer.addEventListener('mouseup', dragEnd);
        slidesContainer.addEventListener('mouseleave', dragEnd);
        slidesContainer.addEventListener('mousemove', dragAction);

        slidesContainer.addEventListener('touchstart', dragStart);
        slidesContainer.addEventListener('touchend', dragEnd);
        slidesContainer.addEventListener('touchmove', dragAction);

        radioButtons.forEach((radio, index) => {
            radio.addEventListener('change', () => {
                currentIndex = index;
                setPositionByIndex();
            });
        });

        function dragStart(event) {
            isDragging = true;
            startPos = getPositionX(event);
            animationID = requestAnimationFrame(animation);
            slidesContainer.classList.add('grabbing');
            slidesContainer.style.transition = 'none';
        }

        function dragEnd() {
            isDragging = false;
            cancelAnimationFrame(animationID);
            slidesContainer.classList.remove('grabbing');
            slidesContainer.style.transition = 'transform 0.3s ease-out';

            const movedBy = currentTranslate - prevTranslate;
            if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex++;
            if (movedBy > 100 && currentIndex > 0) currentIndex--;

            setPositionByIndex();
            updateRadioButtons();
        }

        function dragAction(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
                setSliderPosition();
            }
        }

        function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        }

        function animation() {
            if (isDragging) requestAnimationFrame(animation);
        }

        function setSliderPosition() {
            slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
        }

        function setPositionByIndex() {
            currentTranslate = currentIndex * -slidesContainer.clientWidth;
            prevTranslate = currentTranslate;
            setSliderPosition();
        }

        function updateRadioButtons() {
            radioButtons[currentIndex].checked = true;
        }

        setPositionByIndex();
    }

    initSlider('slider1', 'slider1');
    initSlider('slider2', 'slider2');

    const switchToSlider1 = document.getElementById('switch1-1');
    const switchToSlider2 = document.getElementById('switch2-1');

    switchToSlider1.addEventListener('change', () => {
        if (switchToSlider1.checked) {
            document.querySelector('.slider1').style.display = 'block';
            document.querySelector('.slider2').style.display = 'none';
        }
    });

    switchToSlider2.addEventListener('change', () => {
        if (switchToSlider2.checked) {
            document.querySelector('.slider1').style.display = 'none';
            document.querySelector('.slider2').style.display = 'block';
        }
    });
});


function activateSpotTab() {
    spotSlider.style.display = "block";
    futuresSlider.style.display = "none";
    spotBtn.classList.add("active");
    futuresBtn.classList.remove("active");
}

function activateFuturesTab() {
    spotSlider.style.display = "none";
    futuresSlider.style.display = "block";
    spotBtn.classList.remove("active");
    futuresBtn.classList.add("active");
}

function initializeTabs() {
    if (spotBtn.classList.contains("active")) {
        activateSpotTab();
    } else {
        activateFuturesTab();
    }
}

initializeTabs(); 

spotBtn.addEventListener("click", () => {
    activateSpotTab();
});

futuresBtn.addEventListener("click", () => {
    activateFuturesTab();
});


function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectCategory(category) {
    document.querySelector('.dropbtn').innerText = category;
    document.getElementById("myDropdown").classList.remove("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function togglePopupSpotM16Desc() {
    var popup = document.getElementById("spotM16Description");
    var overlay = document.getElementById("overlayM16Description");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupSpotM16Buy() {
    var popup = document.getElementById("spotM16Buy");
    var overlay = document.getElementById("overlayM16Buy");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupDeagleDesc() {
    var popup = document.getElementById("spotDeagleDescription");
    var overlay = document.getElementById("overlayDeagleDescription");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupDeagleBuy() {
    var popup = document.getElementById("spotDeagleBuy");
    var overlay = document.getElementById("overlayDeagleBuy");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupAwmDesc() {
    var popup = document.getElementById("spotAwmDescription");
    var overlay = document.getElementById("overlayAwmDescription");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupAwmBuy() {
    var popup = document.getElementById("spotAwmBuy");
    var overlay = document.getElementById("overlayAwmBuy");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupRpgDesc() {
    var popup = document.getElementById("spotRpgDescription");
    var overlay = document.getElementById("overlayRpgDescription");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupRpgBuy() {
    var popup = document.getElementById("spotRpgBuy");
    var overlay = document.getElementById("overlayRpgBuy");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupFutM16Buy() {
    var popup = document.getElementById("FutM16Buy");
    var overlay = document.getElementById("overlayFutM16Buy");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupFutM16Desc() {
    var popup = document.getElementById("FutM16Description");
    var overlay = document.getElementById("overlayFutM16Description");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupFutAKBuy() {
    var popup = document.getElementById("FutAKBuy");
    var overlay = document.getElementById("overlayFutAKBuy");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}

function togglePopupFutAKDesc() {
    var popup = document.getElementById("FutAKDescription");
    var overlay = document.getElementById("overlayFutAKDescription");
    var body = document.querySelector("body");
    if (popup.style.display === "block") {
        popup.style.display = "none";
        overlay.style.display = "none";
        body.style.overflow = "auto";
    } else {
        popup.style.display = "block";
        overlay.style.display = "block";
        body.style.overflow = "hidden";
    }
}