/* =====================================
   MAZA GAON JAVASCRIPT
   ===================================== */


/* LANGUAGE SYSTEM */

const languageSelect =
    document.getElementById("language");

if (languageSelect) {

    languageSelect.addEventListener(
        "change",
        function () {

            const language = this.value;

            if (language === "mr") {

                alert(
                    "मराठी भाषा पर्याय लवकरच उपलब्ध होईल."
                );

            }

            else if (language === "hi") {

                alert(
                    "हिंदी भाषा विकल्प जल्द उपलब्ध होगा."
                );

            }

            else {

                alert(
                    "English language selected."
                );

            }

        }
    );

}


/* COMPLAINT FORM */

const complaintForm =
    document.getElementById("complaintForm");

if (complaintForm) {

    complaintForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            const category =
                document.getElementById("category").value;

            const location =
                document.getElementById("location").value;


            if (
                name === "" ||
                category === "" ||
                location === ""
            ) {

                alert(
                    "Please fill all required fields."
                );

                return;

            }


            const success =
                document.getElementById(
                    "successMessage"
                );

            success.style.display = "block";


            complaintForm.reset();


            window.scrollTo({
                top: success.offsetTop - 150,
                behavior: "smooth"
            });

        }
    );

}


/* SIMPLE SCROLL ANIMATION */

const cards =
    document.querySelectorAll(
        ".service-card"
    );


const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(
                function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.1
        }
    );


cards.forEach(
    function(card) {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(20px)";

        card.style.transition =
            "all 0.6s ease";

        observer.observe(card);

    }
);
