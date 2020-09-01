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
const navigation = document.querySelector('nav a').style.color = 'green'
// navigation.appendChild(childElement)

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let count = 1
const navigationLinks = document.querySelectorAll(["nav a"])
navigationLinks.forEach(item => item.textContent=siteContent.nav[`nav-item-${count++}`])


const title = document.querySelector(".cta h1")
title.textContent = siteContent.cta.h1

const but = document.querySelector(".cta button")
but.textContent = siteContent.cta.button

const head = document.querySelector("#cta-img")
head.setAttribute('src', siteContent["cta"]["img-src"])

const main = document.querySelectorAll(".text-content h4")
main[0].textContent = siteContent["main-content"]["features-h4"]
main[1].textContent = siteContent["main-content"]["about-h4"]
main[2].textContent = siteContent["main-content"]["services-h4"]
main[3].textContent = siteContent["main-content"]["products-h4"]
main[4].textContent = siteContent["main-content"]["vision-h4"]


const main1 = document.querySelectorAll(".text-content p")
main1[0].textContent = siteContent["main-content"]["features-content"]
main1[1].textContent = siteContent["main-content"]["about-content"]
main1[2].textContent = siteContent["main-content"]["services-content"]
main1[3].textContent = siteContent["main-content"]["products-content"]
main1[4].textContent = siteContent["main-content"]["vision-content"]

const mid = document.querySelector("#middle-img")
mid.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const cont = document.querySelector(".contact h4")
cont.textContent = siteContent["contact"]["contact-h4"]

const contp = document.querySelectorAll(".contact p")
contp[1].textContent = siteContent["contact"]["address"]
contp[2].textContent = siteContent["contact"]["phone"]
contp[3].textContent = siteContent["contact"]["email"]

const foot = document.querySelector("footer p")
foot.textContent = siteContent["footer"]["copyright"]