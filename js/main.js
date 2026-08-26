/* =====================================================
   SALENTO EXECUTIVE NCC
   MAIN.JS
===================================================== */


/* =====================================================
   DOM READY
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
       ELEMENTI GLOBALI
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
       APPLICA TRADUZIONI
    ================================================= */

    function applyLanguage(language) {

        /* Lingua valida */

        if (!supportedLanguages.includes(language)) {
            language = "it";
        }


        currentLanguage = language;


        /* Salva la lingua */

        localStorage.setItem(
            "salentoExecutiveLanguage",
            language
        );


        /* Aggiorna attributo HTML */

        document.documentElement.lang =
            language;


        /* Recupera traduzioni */

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
           PULSANTE LINGUA
        --------------------------------------------- */

        if (languageButton) {

            languageButton.textContent =
                language.toUpperCase();

        }


        /* ---------------------------------------------
           LINGUA ATTIVA
        --------------------------------------------- */

        document
            .querySelectorAll("[data-lang]")
            .forEach((button) => {

                const buttonLanguage =
                    button.getAttribute(
                        "data-lang"
                    );

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


        /* ---------------------------------------------
           ARIA MENU MOBILE
        --------------------------------------------- */

        if (menuButton && navigation) {

            const isMenuOpen =
                navigation.classList.contains(
                    "is-open"
                );


            menuButton.setAttribute(
                "aria-label",
                isMenuOpen
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

    }


    /* =================================================
       SELETTORE LINGUA
    ================================================= */

    if (
        languageSelector &&
        languageButton &&
        languageMenu
    ) {

        /* Apertura / chiusura */

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


        /* Selezione lingua */

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

        /* Apertura menu */

        menuButton.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();


                const isOpen =
                    navigation.classList.toggle(
                        "is-open"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                const languageTranslations =
                    translations[currentLanguage] || {};


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
        );


        /* Chiudi menu cliccando un link */

        navigation
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    () => {

                        navigation.classList.remove(
                            "is-open"
                        );


                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );


                        const languageTranslations =
                            translations[currentLanguage] || {};


                        menuButton.setAttribute(
                            "aria-label",
                            languageTranslations[
                                "accessibility.openMenu"
                            ] || "Apri menu"
                        );

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

            /* Chiudi selettore lingua */

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


            /* Chiudi menu mobile */

            if (
                navigation &&
                menuButton &&
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


                const languageTranslations =
                    translations[currentLanguage] || {};


                menuButton.setAttribute(
                    "aria-label",
                    languageTranslations[
                        "accessibility.openMenu"
                    ] || "Apri menu"
                );

            }

        }
    );


    /* =================================================
       CHIUSURA CON ESC
    ================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }


            /* Chiudi lingua */

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


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const languageTranslations =
                    translations[currentLanguage] || {};


                menuButton.setAttribute(
                    "aria-label",
                    languageTranslations[
                        "accessibility.openMenu"
                    ] || "Apri menu"
                );

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


/* =====================================================
   TRANSIZIONE TRA LE PAGINE
===================================================== */

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


        /* Ignora link non compatibili */

        if (
            !url ||
            url.startsWith("http") ||
            url.startsWith("#") ||
            url.startsWith("mailto:") ||
            url.startsWith("tel:")
        ) {
            return;
        }


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
