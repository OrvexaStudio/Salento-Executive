document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       RESET PAGINA
    ===================================================== */

    document.body.classList.remove("page-exit");


    /* =====================================================
       SISTEMA MULTILINGUA
    ===================================================== */

    const supportedLanguages = [
        "it",
        "en",
        "fr",
        "es",
        "de"
    ];

    const defaultLanguage = "it";
    const languageStorageKey = "salentoExecutiveLanguage";


    /* -----------------------------------------------------
       TRADUZIONI
       Per ora inseriamo il sistema.
       I testi verranno collegati tramite data-i18n
    ----------------------------------------------------- */

    const translations = {

        it: {
            "nav.services": "Servizi",
            "nav.transfers": "Trasferimenti",
            "nav.airports": "Aeroporti",
            "nav.brindisi": "Aeroporto di Brindisi",
            "nav.bari": "Aeroporto di Bari",
            "nav.about": "Chi siamo",
            "nav.contact": "Contatti",
            "nav.book": "Prenota",

            "hero.eyebrow": "SALENTO EXECUTIVE NCC",
            "hero.title": "Il tuo viaggio,",
            "hero.titleEm": "al tuo ritmo.",
            "hero.description":
                "Trasferimenti privati e servizi con conducente pensati per offrirti comfort, puntualità e discrezione in ogni spostamento.",
            "hero.book": "Prenota il tuo viaggio",
            "hero.services": "Scopri i servizi",

            "intro.eyebrow": "UN SERVIZIO PENSATO PER TE",
            "intro.title": "Non è solo un trasferimento.",
            "intro.text":
                "È un'esperienza di viaggio curata nei dettagli, dal momento della partenza fino alla destinazione.",

            "services.eyebrow": "I NOSTRI SERVIZI",
            "services.title": "Soluzioni per ogni spostamento.",
            "services.link": "Vedi tutti i servizi",

            "service.airport.title": "Transfer aeroportuali",
            "service.airport.text":
                "Collegamenti privati da e verso gli aeroporti di Brindisi e Bari.",

            "service.private.title": "Transfer privati",
            "service.private.text":
                "Spostamenti comodi e riservati verso qualsiasi destinazione.",

            "experience.eyebrow": "L'ESPERIENZA",
            "experience.title": "Eleganza senza ostentazione.",

            "experience.punctuality": "Puntualità",
            "experience.punctualityText":
                "Il tuo tempo viene prima di tutto.",

            "experience.comfort": "Comfort",
            "experience.comfortText":
                "Un viaggio rilassato dall'inizio alla fine.",

            "experience.professionalism": "Professionalità",
            "experience.professionalismText":
                "Un servizio attento e discreto.",

            "experience.flexibility": "Flessibilità",
            "experience.flexibilityText":
                "Soluzioni costruite sulle tue esigenze.",

            "territory.eyebrow": "NEL CUORE DEL SALENTO",
            "territory.title": "Da dove vuoi. Verso dove vuoi.",
            "territory.text":
                "Operiamo nel territorio del Salento e offriamo collegamenti verso Lecce, Brindisi, Bari e le principali località turistiche e destinazioni della Puglia.",

            "cta.eyebrow": "SALENTO EXECUTIVE NCC",
            "cta.title": "Pronto a partire?",
            "cta.text":
                "Organizza il tuo prossimo viaggio in modo semplice e senza pensieri.",
            "cta.button": "Richiedi una prenotazione",

            "footer.description":
                "Servizio di noleggio con conducente nel Salento.",
            "footer.navigation": "Navigazione",
            "footer.information": "Informazioni",
            "footer.booking": "Prenotazioni",
            "footer.privacy": "Privacy",
            "footer.terms": "Termini e condizioni",
            "footer.rates": "Tariffe",
            "footer.request": "Richiedi una prenotazione",
            "footer.location": "Salento · Puglia"
        },


        en: {
            "nav.services": "Services",
            "nav.transfers": "Transfers",
            "nav.airports": "Airports",
            "nav.brindisi": "Brindisi Airport",
            "nav.bari": "Bari Airport",
            "nav.about": "About us",
            "nav.contact": "Contact",
            "nav.book": "Book",

            "hero.eyebrow": "SALENTO EXECUTIVE NCC",
            "hero.title": "Your journey,",
            "hero.titleEm": "at your own pace.",
            "hero.description":
                "Private transfers and chauffeur services designed to offer comfort, punctuality and discretion on every journey.",
            "hero.book": "Book your journey",
            "hero.services": "Discover our services",

            "intro.eyebrow": "A SERVICE DESIGNED FOR YOU",
            "intro.title": "It's more than just a transfer.",
            "intro.text":
                "A carefully curated travel experience, from departure to destination.",

            "services.eyebrow": "OUR SERVICES",
            "services.title": "Solutions for every journey.",
            "services.link": "View all services",

            "service.airport.title": "Airport transfers",
            "service.airport.text":
                "Private connections to and from Brindisi and Bari airports.",

            "service.private.title": "Private transfers",
            "service.private.text":
                "Comfortable and private journeys to any destination.",

            "experience.eyebrow": "THE EXPERIENCE",
            "experience.title": "Elegance without excess.",

            "experience.punctuality": "Punctuality",
            "experience.punctualityText":
                "Your time comes first.",

            "experience.comfort": "Comfort",
            "experience.comfortText":
                "A relaxed journey from start to finish.",

            "experience.professionalism": "Professionalism",
            "experience.professionalismText":
                "An attentive and discreet service.",

            "experience.flexibility": "Flexibility",
            "experience.flexibilityText":
                "Solutions tailored to your needs.",

            "territory.eyebrow": "IN THE HEART OF SALENTO",
            "territory.title": "From wherever you are. To wherever you want.",
            "territory.text":
                "We operate throughout Salento, offering connections to Lecce, Brindisi, Bari and the main tourist destinations throughout Puglia.",

            "cta.eyebrow": "SALENTO EXECUTIVE NCC",
            "cta.title": "Ready to leave?",
            "cta.text":
                "Organise your next journey simply and effortlessly.",
            "cta.button": "Request a booking",

            "footer.description":
                "Chauffeur-driven transport service in Salento.",
            "footer.navigation": "Navigation",
            "footer.information": "Information",
            "footer.booking": "Bookings",
            "footer.privacy": "Privacy",
            "footer.terms": "Terms and conditions",
            "footer.rates": "Rates",
            "footer.request": "Request a booking",
            "footer.location": "Salento · Puglia"
        },


        fr: {
            "nav.services": "Services",
            "nav.transfers": "Transferts",
            "nav.airports": "Aéroports",
            "nav.brindisi": "Aéroport de Brindisi",
            "nav.bari": "Aéroport de Bari",
            "nav.about": "Qui sommes-nous",
            "nav.contact": "Contact",
            "nav.book": "Réserver",

            "hero.eyebrow": "SALENTO EXECUTIVE NCC",
            "hero.title": "Votre voyage,",
            "hero.titleEm": "à votre rythme.",
            "hero.description":
                "Transferts privés et services avec chauffeur conçus pour vous offrir confort, ponctualité et discrétion à chaque déplacement.",
            "hero.book": "Réserver votre voyage",
            "hero.services": "Découvrir nos services",

            "intro.eyebrow": "UN SERVICE PENSÉ POUR VOUS",
            "intro.title": "Ce n'est pas qu'un transfert.",
            "intro.text":
                "Une expérience de voyage soigneusement pensée, du départ jusqu'à la destination.",

            "services.eyebrow": "NOS SERVICES",
            "services.title": "Des solutions pour chaque déplacement.",
            "services.link": "Voir tous les services",

            "service.airport.title": "Transferts aéroport",
            "service.airport.text":
                "Liaisons privées depuis et vers les aéroports de Brindisi et Bari.",

            "service.private.title": "Transferts privés",
            "service.private.text":
                "Des déplacements confortables et privés vers toutes les destinations.",

            "experience.eyebrow": "L'EXPÉRIENCE",
            "experience.title": "L'élégance sans ostentation.",

            "experience.punctuality": "Ponctualité",
            "experience.punctualityText":
                "Votre temps passe avant tout.",

            "experience.comfort": "Confort",
            "experience.comfortText":
                "Un voyage détendu du début à la fin.",

            "experience.professionalism": "Professionnalisme",
            "experience.professionalismText":
                "Un service attentif et discret.",

            "experience.flexibility": "Flexibilité",
            "experience.flexibilityText":
                "Des solutions adaptées à vos besoins.",

            "territory.eyebrow": "AU CŒUR DU SALENTO",
            "territory.title": "D'où vous voulez. Vers où vous voulez.",
            "territory.text":
                "Nous opérons dans tout le Salento et proposons des liaisons vers Lecce, Brindisi, Bari ainsi que les principales destinations touristiques des Pouilles.",

            "cta.eyebrow": "SALENTO EXECUTIVE NCC",
            "cta.title": "Prêt à partir ?",
            "cta.text":
                "Organisez votre prochain voyage simplement et sans souci.",
            "cta.button": "Demander une réservation",

            "footer.description":
                "Service de location avec chauffeur dans le Salento.",
            "footer.navigation": "Navigation",
            "footer.information": "Informations",
            "footer.booking": "Réservations",
            "footer.privacy": "Confidentialité",
            "footer.terms": "Conditions générales",
            "footer.rates": "Tarifs",
            "footer.request": "Demander une réservation",
            "footer.location": "Salento · Pouilles"
        },


        es: {
            "nav.services": "Servicios",
            "nav.transfers": "Traslados",
            "nav.airports": "Aeropuertos",
            "nav.brindisi": "Aeropuerto de Brindisi",
            "nav.bari": "Aeropuerto de Bari",
            "nav.about": "Quiénes somos",
            "nav.contact": "Contacto",
            "nav.book": "Reservar",

            "hero.eyebrow": "SALENTO EXECUTIVE NCC",
            "hero.title": "Tu viaje,",
            "hero.titleEm": "a tu ritmo.",
            "hero.description":
                "Traslados privados y servicios con conductor diseñados para ofrecerte comodidad, puntualidad y discreción en cada desplazamiento.",
            "hero.book": "Reserva tu viaje",
            "hero.services": "Descubre nuestros servicios",

            "intro.eyebrow": "UN SERVICIO PENSADO PARA TI",
            "intro.title": "No es solo un traslado.",
            "intro.text":
                "Una experiencia de viaje cuidada hasta el último detalle, desde la salida hasta el destino.",

            "services.eyebrow": "NUESTROS SERVICIOS",
            "services.title": "Soluciones para cada desplazamiento.",
            "services.link": "Ver todos los servicios",

            "service.airport.title": "Traslados al aeropuerto",
            "service.airport.text":
                "Conexiones privadas desde y hacia los aeropuertos de Brindisi y Bari.",

            "service.private.title": "Traslados privados",
            "service.private.text":
                "Desplazamientos cómodos y privados hacia cualquier destino.",

            "experience.eyebrow": "LA EXPERIENCIA",
            "experience.title": "Elegancia sin ostentación.",

            "experience.punctuality": "Puntualidad",
            "experience.punctualityText":
                "Tu tiempo es lo primero.",

            "experience.comfort": "Comodidad",
            "experience.comfortText":
                "Un viaje relajado de principio a fin.",

            "experience.professionalism": "Profesionalidad",
            "experience.professionalismText":
                "Un servicio atento y discreto.",

            "experience.flexibility": "Flexibilidad",
            "experience.flexibilityText":
                "Soluciones adaptadas a tus necesidades.",

            "territory.eyebrow": "EN EL CORAZÓN DEL SALENTO",
            "territory.title": "Desde donde quieras. Hacia donde quieras.",
            "territory.text":
                "Operamos en el territorio del Salento y ofrecemos conexiones con Lecce, Brindisi, Bari y los principales destinos turísticos de Apulia.",

            "cta.eyebrow": "SALENTO EXECUTIVE NCC",
            "cta.title": "¿Listo para partir?",
            "cta.text":
                "Organiza tu próximo viaje de forma sencilla y sin preocupaciones.",
            "cta.button": "Solicitar una reserva",

            "footer.description":
                "Servicio de transporte con conductor en el Salento.",
            "footer.navigation": "Navegación",
            "footer.information": "Información",
            "footer.booking": "Reservas",
            "footer.privacy": "Privacidad",
            "footer.terms": "Términos y condiciones",
            "footer.rates": "Tarifas",
            "footer.request": "Solicitar una reserva",
            "footer.location": "Salento · Apulia"
        },


        de: {
            "nav.services": "Dienstleistungen",
            "nav.transfers": "Transfers",
            "nav.airports": "Flughäfen",
            "nav.brindisi": "Flughafen Brindisi",
            "nav.bari": "Flughafen Bari",
            "nav.about": "Über uns",
            "nav.contact": "Kontakt",
            "nav.book": "Buchen",

            "hero.eyebrow": "SALENTO EXECUTIVE NCC",
            "hero.title": "Ihre Reise,",
            "hero.titleEm": "in Ihrem Rhythmus.",
            "hero.description":
                "Private Transfers und Chauffeurdienste, die Komfort, Pünktlichkeit und Diskretion bei jeder Fahrt bieten.",
            "hero.book": "Ihre Reise buchen",
            "hero.services": "Unsere Dienstleistungen",

            "intro.eyebrow": "EIN SERVICE FÜR SIE",
            "intro.title": "Mehr als nur ein Transfer.",
            "intro.text":
                "Ein sorgfältig geplantes Reiseerlebnis – von der Abfahrt bis zum Ziel.",

            "services.eyebrow": "UNSERE DIENSTLEISTUNGEN",
            "services.title": "Lösungen für jede Fahrt.",
            "services.link": "Alle Dienstleistungen",

            "service.airport.title": "Flughafentransfers",
            "service.airport.text":
                "Private Verbindungen von und zu den Flughäfen Brindisi und Bari.",

            "service.private.title": "Private Transfers",
            "service.private.text":
                "Komfortable und private Fahrten zu jedem Ziel.",

            "experience.eyebrow": "DAS ERLEBNIS",
            "experience.title": "Eleganz ohne Übertreibung.",

            "experience.punctuality": "Pünktlichkeit",
            "experience.punctualityText":
                "Ihre Zeit steht an erster Stelle.",

            "experience.comfort": "Komfort",
            "experience.comfortText":
                "Eine entspannte Fahrt von Anfang bis Ende.",

            "experience.professionalism": "Professionalität",
            "experience.professionalismText":
                "Ein aufmerksamer und diskreter Service.",

            "experience.flexibility": "Flexibilität",
            "experience.flexibilityText":
                "Lösungen, die auf Ihre Bedürfnisse zugeschnitten sind.",

            "territory.eyebrow": "IM HERZEN DES SALENTO",
            "territory.title": "Von wo Sie möchten. Wohin Sie möchten.",
            "territory.text":
                "Wir sind im gesamten Salento tätig und bieten Verbindungen nach Lecce, Brindisi, Bari sowie zu den wichtigsten touristischen Zielen Apuliens.",

            "cta.eyebrow": "SALENTO EXECUTIVE NCC",
            "cta.title": "Bereit zur Abfahrt?",
            "cta.text":
                "Organisieren Sie Ihre nächste Reise einfach und stressfrei.",
            "cta.button": "Buchung anfragen",

            "footer.description":
                "Chauffeurservice im Salento.",
            "footer.navigation": "Navigation",
            "footer.information": "Informationen",
            "footer.booking": "Buchungen",
            "footer.privacy": "Datenschutz",
            "footer.terms": "Allgemeine Geschäftsbedingungen",
            "footer.rates": "Tarife",
            "footer.request": "Buchung anfragen",
            "footer.location": "Salento · Apulien"
        }

    };


    /* -----------------------------------------------------
       APPLICA LINGUA
    ----------------------------------------------------- */

    function applyLanguage(language) {

        if (!supportedLanguages.includes(language)) {
            language = defaultLanguage;
        }

        document.documentElement.lang = language;

        localStorage.setItem(
            languageStorageKey,
            language
        );

        const elements =
            document.querySelectorAll("[data-i18n]");

        elements.forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            const translation =
                translations[language]?.[key];

            if (!translation) {
                return;
            }

            if (element.hasAttribute("data-i18n-html")) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }

        });

        document
            .querySelectorAll("[data-i18n-placeholder]")
            .forEach(element => {

                const key =
                    element.getAttribute(
                        "data-i18n-placeholder"
                    );

                const translation =
                    translations[language]?.[key];

                if (translation) {
                    element.placeholder = translation;
                }

            });


        /* Aggiorna il selettore */

        document
            .querySelectorAll("[data-language-current]")
            .forEach(element => {

                element.textContent =
                    language.toUpperCase();

            });


        /* Aggiorna aria-label */

        document
            .querySelectorAll("[data-language-label]")
            .forEach(element => {

                element.setAttribute(
                    "aria-label",
                    `Lingua: ${language.toUpperCase()}`
                );

            });

    }


    /* -----------------------------------------------------
       LINGUA SALVATA
    ----------------------------------------------------- */

    const savedLanguage =
        localStorage.getItem(
            languageStorageKey
        ) || defaultLanguage;

    applyLanguage(savedLanguage);


    /* =====================================================
       GESTIONE SELETTORE LINGUA
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

    /* Il selettore lingua non deve attivare la transizione */

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
