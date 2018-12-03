const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.setAttribute('src', siteContent["nav"]["img-src"])
// Nav links text
const navLinks = document.querySelectorAll('nav a');
let navText = [];
for (const navitem in siteContent["nav"]) {
  navText.push(siteContent["nav"][navitem]);
}
navText.pop();
navLinks.forEach((navLink, index) => {
  navLink.textContent = navText[index];
  navLink.style.color = "green";
})
// Nav link 2 new Items
const nav = document.querySelector("nav");
const storeLink = document.createElement('a');
storeLink.textContent = "Store";
storeLink.href = "#";
storeLink.style.color = "green";
const directionsLink = document.createElement('a');
directionsLink.textContent = "Directions"
directionsLink.href = "#";
directionsLink.style.color = "green";
nav.appendChild(directionsLink)
nav.prepend(storeLink)

// MAIN CONTENT 
  // cta
const ctaPara = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
ctaPara.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
  // main-content
const divList = document.querySelectorAll(".text-content");
const elements = Object.keys(siteContent["main-content"]);
elements.splice(4,1);
divList.forEach(divElement => {
  const divHeader = divElement.querySelector("h4");
  const divPara = divElement.querySelector("p");
  divHeader.textContent = siteContent["main-content"][elements[0]];
  divPara.textContent = siteContent["main-content"][elements[1]];
  elements.splice(0, 2);
}) 
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
  // contact
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];
const contactParaList = document.querySelectorAll(".contact p");
const contactParaTextList = Object.keys(siteContent["contact"]);
contactParaTextList.splice(0,1);
contactParaList.forEach((item, index) => {
  item.textContent = siteContent["contact"][contactParaTextList[index]];
})
  // footer
  const footerPara = document.querySelector("footer p");
  footerPara.textContent = siteContent["footer"]["copyright"]


  // Stretch Goals
const colors = [
  "#3E454C",
  "#2185C5",
  "#703030",
  "#044C29",
  "#FF7F66"
]

let styling = `h4 {
  color: ${colors[Math.floor(Math.random() * 5)]};
}`
  const styles = document.createElement("style");
  styles.type = "text/css";
  styles.innerHTML = styling;
  const body = document.getElementsByTagName("body")[0].appendChild(styles);

  ctaButton.onclick = () => {
    styling = `h4 {
      color: ${colors[Math.floor(Math.random() * 5)]};
    }`
    styles.innerHTML = styling;
  }