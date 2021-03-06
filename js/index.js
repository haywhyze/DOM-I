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
logo.setAttribute('src', siteContent["nav"]["img-src"])

// header 
const header = document.getElementsByTagName('header');
header[0].style.backgroundColor = "#eee";
header[0].style.padding = "0 1rem 1rem 1rem";
header[0].style.position = "fixed";
header[0].style.top = "0";
header[0].style.width = "880px";

// nav
let nav = document.querySelector("nav");

let appendedNav = document.createElement('a');
appendedNav.setAttribute('href', '#');
appendedNav.textContent = 'Blog';

let prependedNav = document.createElement('a');
prependedNav.setAttribute('href', '#');
prependedNav.textContent = 'Home';

Array.from(nav.children).forEach((e, i) => {
  e.textContent = Object.values(siteContent.nav)[i];
})

nav.appendChild(appendedNav);
nav.prepend(prependedNav);

Array.from(nav.children).forEach((e, i) => {
  e.style.color = 'green';
})

// cta
let cta = document.querySelector('.cta')
cta.style.paddingTop = '2rem';
let h1 = document.querySelector('.cta-text>h1');
// h1.textContent = siteContent.cta.h1
let h1Text = siteContent.cta.h1.split(" ");
h1.appendChild(document.createTextNode(h1Text[0]))
h1.appendChild(document.createElement('br'))
h1.appendChild(document.createTextNode(h1Text[1]))
h1.appendChild(document.createElement('br'))
h1.appendChild(document.createTextNode(h1Text[2]))

let ctaTextButton = document.querySelector('.cta-text>button');
ctaTextButton.textContent = siteContent.cta.button;
ctaTextButton.addEventListener('click', e => {
  e.target.textContent === 'Sign In' ? e.target.textContent = siteContent.cta.button : e.target.textContent = 'Sign In'
})

let ctaImage = document.querySelector('#cta-img');
ctaImage.setAttribute('src', siteContent.cta["img-src"])

// main content
let topContent = document.querySelector('.top-content')

let featuresHeading = topContent.children[0].children[0];
featuresHeading.textContent = siteContent["main-content"]["features-h4"];

let aboutHeading = topContent.children[1].children[0];
aboutHeading.textContent = siteContent["main-content"]["about-h4"];

let featuresText = topContent.children[0].children[1];
featuresText.textContent = siteContent["main-content"]["features-content"];

let aboutText = topContent.children[1].children[1];
aboutText.textContent = siteContent["main-content"]["about-content"];

let middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContent = document.querySelector('.bottom-content')

let servicesHeading = bottomContent.children[0].children[0];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];

let productHeading = bottomContent.children[1].children[0];
productHeading.textContent = siteContent["main-content"]["product-h4"];

let servicesText = bottomContent.children[0].children[1];
servicesText.textContent = siteContent["main-content"]["services-content"];

let productText = bottomContent.children[1].children[1];
productText.textContent = siteContent["main-content"]["product-content"];

let visionHeading = bottomContent.children[2].children[0];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];

let visionText = bottomContent.children[2].children[1];
visionText.textContent = siteContent["main-content"]["vision-content"];

// contact
let contact = document.querySelector('.contact');
contact.children[0].textContent = siteContent.contact["contact-h4"];
let contactAddress = contact.children[1]
contactAddress.appendChild(document.createTextNode(siteContent.contact.address.split(" ").slice(0,4).join(' ')))
contactAddress.appendChild(document.createElement('br'));
contactAddress.appendChild(document.createTextNode(siteContent.contact.address.split(" ").slice(4).join(' ')))
contact.children[2].textContent = siteContent.contact.phone;
contact.children[3].textContent = siteContent.contact.email;


// footer
let footerText = document.querySelector('footer p');
footerText.textContent = siteContent.footer.copyright;