/* =====================================================
   SALENTO EXECUTIVE NCC
   MAIN.JS
===================================================== */


/* =====================================================
   TRADUZIONI
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       RESET PAGINA
    ================================================= */

    document.body.classList.remove("page-exit");


    /* =================================================
       LINGUA
    ================================================= */

    const supportedLanguages = ["it", "en", "fr", "es", "de"];

    const savedLanguage =
        localStorage.getItem("salentoExecutiveLanguage");

    let currentLanguage =
        supportedLanguages.includes(savedLanguage)
            ? savedLanguage
            : "it";


/* =================================================
   APPLICA TRADUZIONI
================================================= */

function applyLanguage(language) {

    if (!supportedLanguages.includes(language)) {
        language = "it";
    }

    currentLanguage = language;

    const languageButton =
        document.querySelector(".language-button");

    if (languageButton) {
        languageButton.textContent =
            language.toUpperCase();
    }

    /* Salva la lingua */

    localStorage.setItem(
        "salentoExecutiveLanguage",
        language
    );
        /* Aggiorna lang HTML */

        document.documentElement.lang = language;


        /* Recupera le traduzioni */

        const languageTranslations =
            translations[language];

        if (!languageTranslations) {
            return;
        }


        /* ---------------------------------------------
           ELEMENTI CON data-i18n
        --------------------------------------------- */

        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {

                const key =
                    element.getAttribute("data-i18n");

                if (
                    key &&
                    languageTranslations[key] !== undefined
                ) {

                    element.textContent =
                        languageTranslations[key];

                }

            });


        /* ---------------------------------------------
           ATTRIBUTI ARIA
        --------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-aria-label]")
            .forEach((element) => {

                const key =
                    element.getAttribute(
                        "data-i18n-aria-label"
                    );

                if (
                    key &&
                    languageTranslations[key] !== undefined
                ) {

                    element.setAttribute(
                        "aria-label",
                        languageTranslations[key]
                    );

                }

            });


        /* ---------------------------------------------
           PLACEHOLDER
        --------------------------------------------- */

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach((element) => {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                if (
                    key &&
                    languageTranslations[key] !== undefined
                ) {

                    element.setAttribute(
                        "placeholder",
                        languageTranslations[key]
                    );

                }

            });


        /* ---------------------------------------------
           SELETTORE LINGUA
        --------------------------------------------- */

        document
            .querySelectorAll("[data-lang]")
            .forEach((button) => {

                const buttonLanguage =
                    button.getAttribute("data-lang");

                button.classList.toggle(
                    "active",
                    buttonLanguage === language
                );

                button.setAttribute(
                    "aria-pressed",
                    String(
                        buttonLanguage === language
                    )
                );

            });

    }


    /* =================================================
       GESTIONE SELETTORE LINGUA
    ================================================= */

    document
        .querySelectorAll("[data-lang]")
        .forEach((button) => {

            button.addEventListener("click", (event) => {

                event.preventDefault();
                event.stopPropagation();

                const language =
                    button.getAttribute("data-lang");

                if (
                    !supportedLanguages.includes(language)
                ) {
                    return;
                }

                applyLanguage(language);

            });

        });


    /* =================================================
       APPLICA LA LINGUA SALVATA
    ================================================= */

    applyLanguage(currentLanguage);


/* =================================================
   SELETTORE LINGUA
================================================= */

const languageSelector =
    document.querySelector(".language-selector");

const languageButton =
    document.querySelector(".language-button");

const languageMenu =
    document.querySelector(".language-menu");


if (
    languageSelector &&
    languageButton &&
    languageMenu
) {

    languageButton.addEventListener("click", (event) => {

        event.stopPropagation();

        languageSelector.classList.toggle("is-open");

    });


    languageMenu
        .querySelectorAll("[data-lang]")
        .forEach((button) => {

            button.addEventListener("click", () => {

                const language =
                    button.getAttribute("data-lang");

                applyLanguage(language);

                languageButton.textContent =
                    language.toUpperCase();

                languageSelector.classList.remove(
                    "is-open"
                );

            });

        });


    document.addEventListener("click", (event) => {

        if (!languageSelector.contains(event.target)) {

            languageSelector.classList.remove(
                "is-open"
            );

        }

    });


    languageButton.textContent =
        currentLanguage.toUpperCase();

}
    /* =================================================
       MOBILE MENU
    ================================================= */

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
                    ? (
                        translations[currentLanguage]?.[
                            "accessibility.closeMenu"
                        ] || "Chiudi menu"
                    )
                    : (
                        translations[currentLanguage]?.[
                            "accessibility.openMenu"
                        ] || "Apri menu"
                    )
            );

        });


        /* ---------------------------------------------
           CHIUDE MENU QUANDO SI CLICCA UN LINK
        --------------------------------------------- */

        navigation
            .querySelectorAll("a")
            .forEach((link) => {

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
                        translations[currentLanguage]?.[
                            "accessibility.openMenu"
                        ] || "Apri menu"
                    );

                });

            });


        /* ---------------------------------------------
           CHIUDE MENU CLICCANDO FUORI
        --------------------------------------------- */

        document.addEventListener("click", (event) => {

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
                    translations[currentLanguage]?.[
                        "accessibility.openMenu"
                    ] || "Apri menu"
                );

            }

        });

    }



    /* =================================================
       ANNO AUTOMATICO NEL FOOTER
    ================================================= */

    const currentYear =
        document.querySelector("#current-year");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =================================================
       CHIUSURA MENU CON ESC
    ================================================= */

    document.addEventListener("keydown", (event) => {

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
            translations[currentLanguage]?.[
                "accessibility.openMenu"
            ] || "Apri menu"
        );

    });

});



/* =====================================================
   BACK / FORWARD BROWSER
===================================================== */

window.addEventListener("pageshow", () => {

    document.body.classList.remove("page-exit");

    /*
       Rilegge la lingua salvata quando la pagina
       viene ripristinata dalla cache del browser.
    */

    const savedLanguage =
        localStorage.getItem(
            "salentoExecutiveLanguage"
        );

    if (
        savedLanguage &&
        typeof translations !== "undefined" &&
        translations[savedLanguage]
    ) {

        document.documentElement.lang =
            savedLanguage;

    }

});



/* =====================================================
   TRANSIZIONE TRA LE PAGINE
===================================================== */

document.querySelectorAll("a").forEach((link) => {

    /* Link esclusi dalla transizione */

    if (
        link.classList.contains("no-transition")
    ) {
        return;
    }


    const url =
        link.getAttribute("href");


    /* Ignora link esterni, anchor e vuoti */

    if (
        url &&
        !url.startsWith("http") &&
        !url.startsWith("#") &&
        !url.startsWith("mailto:") &&
        !url.startsWith("tel:")
    ) {

        link.addEventListener("click", function (event) {

            /*
               Se il link è stato già gestito
               dal browser o da un altro sistema,
               non interferiamo.
            */

            if (
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey ||
                event.button !== 0
            ) {
                return;
            }


            event.preventDefault();


            document.body.classList.add(
                "page-exit"
            );


            setTimeout(() => {

                window.location.href = url;

            }, 300);

        });

    }

});
