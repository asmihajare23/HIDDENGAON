// ===============================
// MAZA GAON - LANGUAGE SWITCHER
// ===============================

const translations = {
    en: {
        home: "Home",
        about: "About",
        agriculture: "Agriculture",
        healthcare: "Healthcare",
        education: "Education",
        hygiene: "Hygiene",
        water: "Water",
        report: "Report Problem",
        schemes: "Schemes",

        welcome: "Welcome to Maza Gaon",
        subtitle: "One digital platform for a better, healthier and connected village.",
        explore: "Explore Village Services",

        agricultureTitle: "Agriculture",
        agricultureText: "Get useful information about farming, crops, soil health and government support.",

        healthcareTitle: "Healthcare",
        healthcareText: "Find health information, emergency contacts and nearby healthcare services.",

        educationTitle: "Education",
        educationText: "Access information about schools, scholarships, digital learning and career guidance.",

        hygieneTitle: "Hygiene & Sanitation",
        hygieneText: "Learn about cleanliness, waste management, recycling and disease prevention.",

        waterTitle: "Water & Electricity",
        waterText: "Report water and electricity problems and find useful information.",

        complaintTitle: "Report a Village Problem",
        complaintText: "Help improve your village by reporting local problems.",

        schemesTitle: "Government Schemes",
        schemesText: "Find useful government schemes and official resources."
    },

    mr: {
        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        agriculture: "शेती",
        healthcare: "आरोग्य",
        education: "शिक्षण",
        hygiene: "स्वच्छता",
        water: "पाणी",
        report: "समस्या नोंदवा",
        schemes: "सरकारी योजना",

        welcome: "माझा गाव मध्ये आपले स्वागत आहे",
        subtitle: "चांगल्या, निरोगी आणि जोडलेल्या गावासाठी एक डिजिटल व्यासपीठ.",
        explore: "गावातील सेवा पहा",

        agricultureTitle: "शेती",
        agricultureText: "शेती, पिके, मातीचे आरोग्य आणि सरकारी मदतीबद्दल उपयुक्त माहिती मिळवा.",

        healthcareTitle: "आरोग्य",
        healthcareText: "आरोग्यविषयक माहिती, आपत्कालीन संपर्क आणि आरोग्य सेवा शोधा.",

        educationTitle: "शिक्षण",
        educationText: "शाळा, शिष्यवृत्ती, डिजिटल शिक्षण आणि करिअर मार्गदर्शनाची माहिती मिळवा.",

        hygieneTitle: "स्वच्छता आणि स्वच्छतागृह",
        hygieneText: "स्वच्छता, कचरा व्यवस्थापन, पुनर्वापर आणि रोग प्रतिबंधाबद्दल जाणून घ्या.",

        waterTitle: "पाणी आणि वीज",
        waterText: "पाणी आणि विजेच्या समस्या नोंदवा आणि उपयुक्त माहिती मिळवा.",

        complaintTitle: "गावातील समस्या नोंदवा",
        complaintText: "स्थानिक समस्या नोंदवून आपले गाव सुधारण्यास मदत करा.",

        schemesTitle: "सरकारी योजना",
        schemesText: "उपयुक्त सरकारी योजना आणि अधिकृत माहिती मिळवा."
    },

    hi: {
        home: "होम",
        about: "हमारे बारे में",
        agriculture: "कृषि",
        healthcare: "स्वास्थ्य",
        education: "शिक्षा",
        hygiene: "स्वच्छता",
        water: "पानी",
        report: "समस्या दर्ज करें",
        schemes: "सरकारी योजनाएं",

        welcome: "मेरा गांव में आपका स्वागत है",
        subtitle: "एक बेहतर, स्वस्थ और जुड़े हुए गांव के लिए एक डिजिटल प्लेटफॉर्म।",
        explore: "गांव की सेवाएं देखें",

        agricultureTitle: "कृषि",
        agricultureText: "खेती, फसलों, मिट्टी के स्वास्थ्य और सरकारी सहायता की उपयोगी जानकारी प्राप्त करें।",

        healthcareTitle: "स्वास्थ्य",
        healthcareText: "स्वास्थ्य जानकारी, आपातकालीन संपर्क और स्वास्थ्य सेवाओं की जानकारी प्राप्त करें।",

        educationTitle: "शिक्षा",
        educationText: "स्कूल, छात्रवृत्ति, डिजिटल शिक्षा और करियर मार्गदर्शन की जानकारी प्राप्त करें।",

        hygieneTitle: "स्वच्छता",
        hygieneText: "स्वच्छता, कचरा प्रबंधन, पुनर्चक्रण और बीमारी से बचाव के बारे में जानें।",

        waterTitle: "पानी और बिजली",
        waterText: "पानी और बिजली की समस्याओं की रिपोर्ट करें और उपयोगी जानकारी प्राप्त करें।",

        complaintTitle: "गांव की समस्या दर्ज करें",
        complaintText: "स्थानीय समस्याओं की रिपोर्ट करके अपने गांव को बेहतर बनाने में मदद करें।",

        schemesTitle: "सरकारी योजनाएं",
        schemesText: "उपयोगी सरकारी योजनाओं और आधिकारिक जानकारी प्राप्त करें।"
    }
};


// ===============================
// CHANGE LANGUAGE
// ===============================

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {

        const key = element.getAttribute("data-i18n");

        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    // Save selected language
    localStorage.setItem("mazaGaonLanguage", language);
}


// ===============================
// LANGUAGE DROPDOWN
// ===============================

const languageSelect = document.getElementById("language");

if (languageSelect) {

    // Load previously selected language
    const savedLanguage =
        localStorage.getItem("mazaGaonLanguage") || "en";

    languageSelect.value = savedLanguage;

    changeLanguage(savedLanguage);

    languageSelect.addEventListener("change", function () {

        changeLanguage(this.value);

    });
}


// ===============================
// COMPLAINT FORM
// ===============================

const complaintForm = document.getElementById("complaintForm");

if (complaintForm) {

    complaintForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const category = document.getElementById("category").value;
        const location = document.getElementById("location").value;

        if (name === "" || category === "" || location === "") {

            alert("Please fill all required fields.");
            return;

        }

        const success = document.getElementById("successMessage");

        success.style.display = "block";

        complaintForm.reset();

        window.scrollTo({
            top: success.offsetTop - 150,
            behavior: "smooth"
        });

    });

}
