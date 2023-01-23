function changeImage() {
    const hamburger = document.getElementById("hamburger");
    const close = document.getElementById("close");
    const hamburgerDisplay = getComputedStyle(hamburger).display;

    const navbar = document.querySelector("ul.main-navbar");

    if(hamburgerDisplay !== "none"){
        hamburger.style.display = "none";
        close.style.display = "block";
        navbar.classList.add("open");    
    } else {
        hamburger.style.display = "block";
        close.style.display = "none";
        navbar.classList.remove("open");    
    }
}

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', event => {
        const tabId = event.target.getAttribute('data-tab');
        const tabImage = document.querySelector(`.tab-data-img[data-tab="${tabId}"]`);
        const tabDescription = document.querySelector(`.tab-data-desc[data-tab="${tabId}"]`);

        tabImage.style.display = 'block';
        tabDescription.style.display = 'block';

        tabs.forEach(tab => tab.classList.remove("active"));
        event.target.classList.add("active");

        const otherTabImages = document.querySelectorAll(`.tab-data-img:not([data-tab="${tabId}"])`);
        const otherTabDescriptions = document.querySelectorAll(`.tab-data-desc:not([data-tab="${tabId}"])`);
        otherTabImages.forEach(tab => {
            tab.style.display = 'none';
        });
        otherTabDescriptions.forEach(tab => {
            tab.style.display = 'none';
        });
    });
});

const defaultTabId = "1";
const defaultTabImage = document.querySelector(`.tab-data-img[data-tab="${defaultTabId}"]`);
const defaultTabDescription = document.querySelector(`.tab-data-desc[data-tab="${defaultTabId}"]`);
defaultTabImage.style.display = 'block';
defaultTabDescription.style.display = 'block';

const defaultTab = document.querySelector(`.tab[data-tab="${defaultTabId}"]`);
defaultTab.classList.add("active");
