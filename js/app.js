const exchangeBtn = document.getElementById("exchangeBtn");
const connectBtn = document.getElementById("connectBtn");
const exchangeCard = document.getElementById("exchangeCard");
const connectCard = document.getElementById("connectCard");

function activateExchangeCard() {
    exchangeCard.style.display = "block";
    connectCard.style.display = "none";
    exchangeBtn.classList.add("active");
    connectBtn.classList.remove("active");
}

function activateConnectCard() {
    exchangeCard.style.display = "none";
    connectCard.style.display = "block";
    exchangeBtn.classList.remove("active");
    connectBtn.classList.add("active");
}

const btnProfile = document.getElementById("btn-profile");
const contProfile = document.getElementById("container__profile");
const btnBots = document.getElementById("btn-bots");
const contBots = document.getElementById("container__bots");
const btnExchanges = document.getElementById("btn-exchanges");
const contExchanges = document.getElementById("container__exchanges");

function toggleTab(activeBtn, activeCont, ...rest) {
    // Скрыть все контейнеры, кроме активного
    for (let container of rest) {
        container.style.display = "none";
    }
    // Показать активный контейнер
    activeCont.style.display = "block";

    // Установить активное состояние для кнопок
    btnProfile.classList.remove("active");
    btnBots.classList.remove("active");
    btnExchanges.classList.remove("active");
    activeBtn.classList.add("active");
}

btnProfile.addEventListener("click", function() {
    toggleTab(btnProfile, contProfile, contBots, contExchanges);
});

btnBots.addEventListener("click", function() {
    toggleTab(btnBots, contBots, contProfile, contExchanges);
});

btnExchanges.addEventListener("click", function() {
    toggleTab(btnExchanges, contExchanges, contProfile, contBots);
});


window.onload = function() {
    const mainBlocks = document.querySelectorAll('.main__block');
    const rotatedBlocks = document.querySelectorAll('.block__rotated');

    if (mainBlocks.length > 0 && rotatedBlocks.length > 0 && mainBlocks.length === rotatedBlocks.length) {
        const setRotatedBlockDimensions = (mainBlock, rotatedBlock) => {
            const mainBlockHeight = mainBlock.clientHeight;
            const mainBlockWidth = mainBlock.clientWidth;

            if (!isNaN(mainBlockHeight) && !isNaN(mainBlockWidth)) {
                rotatedBlock.style.height = `${mainBlockHeight}px`;
                rotatedBlock.style.width = `${mainBlockWidth}px`;
            } else {
                console.error('Invalid dimensions detected.');
            }
        };

        mainBlocks.forEach((mainBlock, index) => {
            const rotatedBlock = rotatedBlocks[index];
            setRotatedBlockDimensions(mainBlock, rotatedBlock);

            const resizeObserver = new ResizeObserver(() => setRotatedBlockDimensions(mainBlock, rotatedBlock));
            resizeObserver.observe(mainBlock);
        });

    } else {
        console.error('Mismatch in number of main and rotated blocks, or no elements found');
    }
};

if (exchangeBtn.classList.contains("active")) {
    activateExchangeCard();
} else {
    activateConnectCard();
}

exchangeBtn.addEventListener("click", () => {
    activateExchangeCard();
});

connectBtn.addEventListener("click", () => {
    activateConnectCard();
});


function changeColor(button) {
    var path = button.querySelector('.turnSvg path');
    var currentColor = path.getAttribute('fill');
    var buttonId = button.getAttribute('data-id');
    
    if (currentColor === '#24f22b') {
        path.setAttribute('fill', 'rgb(255, 0, 51)');
        path.setAttribute('d', 'M24 0C23.4477 0 23 0.447708 23 1V19C23 19.5523 23.4477 20 24 20H26C26.5523 20 27 19.5523 27 19V1C27 0.447708 26.5523 0 26 0H24ZM39.2758 6.23172L37 9.41783V9.52167C42.4404 13.3165 46 19.6214 46 26.7576C46 38.3556 36.598 47.7576 25 47.7576C13.402 47.7576 4 38.3556 4 26.7576C4 19.5979 7.58301 13.2751 13.0537 9.48434L11.0659 6.00566L11.0626 5.99998C4.38989 10.4891 0 18.1107 0 26.7576C0 40.5647 11.1929 51.7576 25 51.7576C38.8071 51.7576 50 40.5647 50 26.7576C50 18.2578 45.7581 10.7486 39.2758 6.23172Z');
    } else {
        path.setAttribute('fill', '#24f22b');
        path.setAttribute('d', 'M24 0C23.4477 0 23 0.447708 23 1V19C23 19.5523 23.4477 20 24 20H26C26.5523 20 27 19.5523 27 19V1C27 0.447708 26.5523 0 26 0H24ZM39.2758 6.23172L37 9.41783V9.52167C42.4404 13.3165 46 19.6214 46 26.7576C46 38.3556 36.598 47.7576 25 47.7576C13.402 47.7576 4 38.3556 4 26.7576C4 19.5979 7.58301 13.2751 13.0537 9.48434L11.0659 6.00566L11.0626 5.99998C4.38989 10.4891 0 18.1107 0 26.7576C0 40.5647 11.1929 51.7576 25 51.7576C38.8071 51.7576 50 40.5647 50 26.7576C50 18.2578 45.7581 10.7486 39.2758 6.23172Z');
    }
}

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.dropbtn').forEach(button => {
            button.addEventListener('click', function () {
                const dropdownContent = this.nextElementSibling;
                dropdownContent.classList.toggle('show');
            });
        });

        document.querySelectorAll('.dropdown-content a').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const dropdownContent = this.closest('.dropdown-content');
                const dropbtn = dropdownContent.previousElementSibling;
                dropbtn.innerText = this.getAttribute('data-value');
                dropdownContent.classList.remove('show');
            });
        });

        window.addEventListener('click', function (event) {
            if (!event.target.matches('.dropbtn')) {
                document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        });
    });


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
        
        slidesContainer.addEventListener('touchstart', dragStart, { passive: true });
        slidesContainer.addEventListener('touchend', dragEnd);
        slidesContainer.addEventListener('touchmove', dragAction, { passive: true });

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
            slidesContainer.style.transition = '-webkit-transform 0.3s ease-out';
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
            slidesContainer.style.webkitTransform = `translateX(${currentTranslate}px)`;
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


function togglePopup(popupId, overlayId) {
    var popup = document.getElementById(popupId);
    var overlay = document.getElementById(overlayId);
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

document.querySelectorAll('.overlay, .close-btn, .open-popup-btn').forEach(item => {
    item.addEventListener('click', function() {
        var popupId = this.dataset.popup;
        var overlayId = this.dataset.overlay || this.id;
        togglePopup(popupId, overlayId);
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    let wrapLength = 10;
    let exchangeWrapLength = 14;

    if (window.innerWidth < 380) {
        wrapLength = 9;
        exchangeWrapLength = 13;
    }

    applyWordWrap('td.wrap', wrapLength);
    applyWordWrap('td.wrap-exchange', exchangeWrapLength);
});

function applyWordWrap(selector, length) {
    const cells = document.querySelectorAll(selector);
    cells.forEach(cell => {
        cell.innerHTML = insertBreaks(cell.textContent, length);
    });
}

function insertBreaks(text, length) {
    let result = '';
    for (let i = 0; i < text.length; i += length) {
        result += text.slice(i, i + length) + '<br>';
    }
    return result;
}