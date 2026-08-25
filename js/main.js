document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       RESET PAGINA
    ===================================================== */

    document.body.classList.remove("page-exit");


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", () => {

            const isOpen =
                navigation.classList.toggle("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Chiudi menu"
                    : "Apri menu"
            );

        });


        /* Chiude il menu quando viene cliccato un link */

        navigation
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    navigation.classList.remove("is-open");

                    menuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    menuButton.setAttribute(
                        "aria-label",
                        "Apri menu"
                    );

                });

            });


        /* Chiude il menu cliccando fuori */

        document.addEventListener("click", (event) => {

            if (
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                navigation.classList.remove("is-open");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Apri menu"
                );

            }

        });

    }


    /* =====================================================
       ANNO AUTOMATICO NEL FOOTER
    ===================================================== */

    const currentYear =
        document.querySelector("#current-year");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       CHIUSURA MENU CON ESC
    ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key !== "Escape") {
            return;
        }

        if (!navigation || !menuButton) {
            return;
        }

        navigation.classList.remove("is-open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Apri menu"
        );

    });

});


/* =====================================================
   BACK / FORWARD BROWSER
===================================================== */

window.addEventListener("pageshow", () => {

    document.body.classList.remove("page-exit");

});


/* =====================================================
   TRANSIZIONE TRA LE PAGINE
===================================================== */

document.querySelectorAll("a").forEach(link => {

    if (link.classList.contains("no-transition")) {
        return;
    }

    const url = link.getAttribute("href");

    if (
        url &&
        !url.startsWith("http") &&
        !url.startsWith("#")
    ) {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {

                window.location.href = url;

            }, 300);

        });

    }

});
