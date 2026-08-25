/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle(
            "active"
        );

    }
);


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING
===================================================== */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    }
);


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 50) {

            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.3)";

        }

        else {

            header.style.boxShadow =
                "none";

        }

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const sections =
    document.querySelectorAll(
        ".section"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(
    function (section) {

        observer.observe(section);

    }
);