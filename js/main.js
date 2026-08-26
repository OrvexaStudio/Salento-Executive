/* =====================================================
   SALENTO EXECUTIVE NCC
   MAIN.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       RESET PAGINA
    ================================================= */

    document.body.classList.remove("page-exit");


    /* =================================================
       LINGUE SUPPORTATE
    ================================================= */

    const supportedLanguages = [
        "it",
        "en",
        "fr",
        "es",
        "de"
    ];


    /* =================================================
       LINGUA SALVATA
    ================================================= */

    const savedLanguage =
        localStorage.getItem(
            "salentoExecutiveLanguage"
        );

    let currentLanguage =
        supportedLanguages.includes(savedLanguage)
            ? savedLanguage
            : "it";


    /* =================================================
       ELEMENTI
    ================================================= */

    const menuButton =
        document.querySelector(".menu-button");

    const navigation =
        document.querySelector(".navigation");

    const languageSelector =
        document.querySelector(".language-selector");

    const languageButton =
        document.querySelector(".language-button");

    const languageMenu =
        document.querySelector(".language-menu");


    /* =================================================
       FUNZIONE: AGGIORNA ARIA MENU
    ================================================= */

    function updateMenuAccessibility() {

        if (!menuButton || !navigation) {
            return;
        }

        const languageTranslations =
            translations[currentLanguage] || {};

        const isOpen =
            navigation.classList.contains("is-open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen
                ? (
                    languageTranslations[
                        "accessibility.closeMenu"
                    ] || "Chiudi menu"
                )
                : (
                    languageTranslations[
                        "accessibility.openMenu"
                    ] || "Apri menu"
                )
        );
    }


    /* =================================================
       FUNZIONE: AGGIORNA SELETTORE LINGUA
    ================================================= */

    function updateLanguageSelector(language) {

        if (languageButton) {

            languageButton.textContent =
                language.toUpperCase();

        }


        document
            .querySelectorAll("[data-lang]")
            .forEach((button) => {

                const buttonLanguage =
                    button.getAttribute("data-lang");

                const isActive =
                    buttonLanguage === language;

                button.classList.toggle(
                    "active",
                    isActive
                );

                button.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );

            });

    }


    /* =================================================
       APPLICA TRADUZIONI
    ================================================= */

    function applyLanguage(language) {

        /* ---------------------------------------------
           CONTROLLO LINGUA
        --------------------------------------------- */

        if (
            !supportedLanguages.includes(language)
        ) {
            language = "it";
        }


        currentLanguage = language;


        /* ---------------------------------------------
           SALVA LINGUA
        --------------------------------------------- */

        localStorage.setItem(
            "salentoExecutiveLanguage",
            language
        );


        /* ---------------------------------------------
           HTML LANG
        --------------------------------------------- */

        document.documentElement.lang =
            language;


        /* ---------------------------------------------
           TRADUZIONI
        --------------------------------------------- */

        const languageTranslations =
            translations[language];

        if (!languageTranslations) {
            return;
        }


        /* ---------------------------------------------
           TESTI
        --------------------------------------------- */

        document
            .querySelectorAll("[data-i18n]")
            .forEach((element) => {

                const key =
                    element.getAttribute(
                        "data-i18n"
                    );

                if (
                    key &&
                    languageTranslations[key] !== undefined
                ) {

                    element.textContent =
                        languageTranslations[key];

                }

            });


        /* ---------------------------------------------
           ARIA LABEL
        --------------------------------------------- */

        document
            .querySelectorAll(
                "[data-i18n-aria-label]"
            )
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
            .querySelectorAll(
                "[data-i18n-placeholder]"
            )
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
           SELETTORE
        --------------------------------------------- */

        updateLanguageSelector(
            language
        );


        /* ---------------------------------------------
           ACCESSIBILITÀ MENU
        --------------------------------------------- */

        updateMenuAccessibility();

    }


    /* =================================================
       SELETTORE LINGUA
    ================================================= */

    if (
        languageSelector &&
        languageButton &&
        languageMenu
    ) {

        /* ---------------------------------------------
           APRI / CHIUDI
        --------------------------------------------- */

        languageButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();
                event.stopPropagation();

                languageSelector.classList.toggle(
                    "is-open"
                );

            }
        );


        /* ---------------------------------------------
           CAMBIO LINGUA
        --------------------------------------------- */

        languageMenu
            .querySelectorAll("[data-lang]")
            .forEach((button) => {

                button.addEventListener(
                    "click",
                    (event) => {

                        event.preventDefault();
                        event.stopPropagation();


                        const language =
                            button.getAttribute(
                                "data-lang"
                            );


                        if (
                            !supportedLanguages.includes(
                                language
                            )
                        ) {
                            return;
                        }


                        applyLanguage(
                            language
                        );


                        languageSelector.classList.remove(
                            "is-open"
                        );

                    }
                );

            });

    }


    /* =================================================
       MENU MOBILE
    ================================================= */

    if (
        menuButton &&
        navigation
    ) {

        /* ---------------------------------------------
           APRI / CHIUDI MENU
        --------------------------------------------- */

        menuButton.addEventListener(
            "click",
            (event) => {

                event.preventDefault();
                event.stopPropagation();


                navigation.classList.toggle(
                    "is-open"
                );


                updateMenuAccessibility();

            }
        );


        /* ---------------------------------------------
           CHIUDI QUANDO SI CLICCA UN LINK
        --------------------------------------------- */

        navigation
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navigation.classList.remove(
                            "is-open"
                        );

                        updateMenuAccessibility();

                    }
                );

            });

    }


    /* =================================================
       CLICK FUORI
    ================================================= */

    document.addEventListener(
        "click",
        (event) => {

            /* -----------------------------------------
               CHIUDI SELETTORE LINGUA
            ----------------------------------------- */

            if (
                languageSelector &&
                !languageSelector.contains(
                    event.target
                )
            ) {

                languageSelector.classList.remove(
                    "is-open"
                );

            }


            /* -----------------------------------------
               CHIUDI MENU MOBILE
            ----------------------------------------- */

            if (
                navigation &&
                menuButton &&
                !navigation.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                navigation.classList.remove(
                    "is-open"
                );

                updateMenuAccessibility();

            }

        }
    );


    /* =================================================
       ESC
    ================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }


            /* Chiudi selettore */

            if (languageSelector) {

                languageSelector.classList.remove(
                    "is-open"
                );

            }


            /* Chiudi menu */

            if (
                navigation &&
                menuButton
            ) {

                navigation.classList.remove(
                    "is-open"
                );

                updateMenuAccessibility();

            }

        }
    );


    /* =================================================
       ANNO AUTOMATICO
    ================================================= */

    const currentYear =
        document.querySelector(
            "#current-year"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =================================================
       TRANSIZIONE TRA LE PAGINE
    ================================================= */

    document
        .querySelectorAll("a")
        .forEach((link) => {

            /* Link esclusi */

            if (
                link.classList.contains(
                    "no-transition"
                )
            ) {
                return;
            }


            const url =
                link.getAttribute("href");


            /* -----------------------------------------
               IGNORA LINK NON COMPATIBILI
            ----------------------------------------- */

            if (
                !url ||
                url.startsWith("http") ||
                url.startsWith("#") ||
                url.startsWith("mailto:") ||
                url.startsWith("tel:")
            ) {
                return;
            }


            /* -----------------------------------------
               CLICK
            ----------------------------------------- */

            link.addEventListener(
                "click",
                function (event) {

                    /* Tasti modificatori */

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


                    setTimeout(
                        () => {

                            window.location.href =
                                url;

                        },
                        300
                    );

                }
            );

        });


    /* =================================================
       APPLICA LINGUA INIZIALE
    ================================================= */

    applyLanguage(
        currentLanguage
    );

});


/* =====================================================
   BACK / FORWARD BROWSER
===================================================== */

window.addEventListener(
    "pageshow",
    () => {

        document.body.classList.remove(
            "page-exit"
        );


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

    }
);
