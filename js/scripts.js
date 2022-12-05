/*!
* Start Bootstrap - Scrolling Nav v5.0.5 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// My own custom javascript

arrow = document.getElementById("arrow");

var showHideArrow = function() {
    var y = window.scrollY;
    if (y <= 60) {
        arrow.style.visibility = "visible";
    } else {
        arrow.style.visibility = "hidden";
    }
};

var fadeImages = function() {
    var y = window.scrollY;

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".header-end-image::before {  opacity: " + ((y - 10) / 150) + "; }";
};

window.addEventListener("scroll", showHideArrow);
window.addEventListener("scroll", fadeImages);