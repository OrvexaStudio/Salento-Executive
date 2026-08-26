document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       RESET PAGINA
    ===================================================== */

    document.body.classList.remove("page-exit");


    /* =====================================================
       SISTEMA LINGUE
    ===================================================== */

    const defaultLanguage = "it";
    const languageStorageKey = "salentoExecutiveLanguage";

    const savedLanguage =
        localStorage.getItem(languageStorageKey) ||
        defaultLanguage;

    function applyLanguage(language) {

        if (
            typeof translations === "undefined" ||
            !translations[language]
        ) {
            return;
        }

        /* Lingua HTML */

        document.documentElement.lang = language;


        /* Salva la lingua */

        localStorage.setItem(
            languageStorageKey,
            language
        );


        /* Testi */

        document
            .querySelectorAll("[data-i18n]")
            .forEach(element => {

                const key =
                    element.getAttribute("data-i18n");

                const value =
                    translations[language][key];

                if (value === undefined) {
                    return;
                }

                if (
                    element.hasAttribute("data-i18n-html")
                ) {

                    element.innerHTML = value;

                } else {

                    element.textContent = value;

                }

            });


        /* Placeholder */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                const value =
                    translations[language][key];

                if (value !== undefined) {

                    element.setAttribute(
                        "placeholder",
                        value
                    );

                }

            });


        /* Selettore lingua */

        document
            .querySelectorAll("[data-language-current]")
            .forEach(element => {

                element.textContent =
                    language.toUpperCase();

            });

    }


    /* Applica la lingua salvata */

    applyLanguage(savedLanguage);


    /* =====================================================
       SELETTORE LINGUA
    ===================================================== */

    document
        .querySelectorAll("[data-language]")
        .forEach(button => {

            button.addEventListener("click", event => {

                event.preventDefault();
                event.stopPropagation();

                const language =
                    button.getAttribute(
                        "data-language"
                    );

                if (!language) {
                    return;
                }

                applyLanguage(language);

            });

        });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".navigation");

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
            .forEach(link => {

                link.addEventListener("click", () => {

                    navigation.classList.remove(
                        "is-open"
                    );

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

        document.addEventListener("click", event => {

            if (
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                navigation.classList.remove(
                    "is-open"
                );

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

    document.addEventListener("keydown", event => {

        if (event.key !== "Escape") {
            return;
        }

        if (!navigation || !menuButton) {
            return;
        }

        navigation.classList.remove(
            "is-open"
        );

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

    /* Non applicare la transizione al selettore lingua */

    if (
        link.classList.contains("no-transition") ||
        link.hasAttribute("data-language")
    ) {
        return;
    }

    const url =
        link.getAttribute("href");

    if (
        url &&
        !url.startsWith("http") &&
        !url.startsWith("#")
    ) {

        link.addEventListener("click", function(e) {

            e.preventDefault();

            document.body.classList.add(
                "page-exit"
            );

            setTimeout(() => {

                window.location.href = url;

            }, 300);

        });

    }

});
