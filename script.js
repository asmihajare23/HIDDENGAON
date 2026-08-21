/* =====================================
   HIDDEN GAON
   JAVASCRIPT
===================================== */


/* =====================================
   CATEGORY INFORMATION
===================================== */

const categoryInfo = {

    Food: {

        icon: "🍚",

        title: "Food & Nutrition",

        text:
            "Explore issues related to food access, nutrition, storage, wastage and availability of healthy food."

    },


    Waste: {

        icon: "🗑️",

        title: "Garbage & Waste",

        text:
            "Explore problems related to waste collection, segregation, plastic waste, open dumping and disposal."

    },


    Farmers: {

        icon: "🌾",

        title: "Farmers & Livelihood",

        text:
            "Explore challenges related to markets, storage, transportation, agricultural information and livelihood."

    },


    Water: {

        icon: "💧",

        title: "Water",

        text:
            "Explore availability, access, quality and reliability of water services."

    },


    Healthcare: {

        icon: "🏥",

        title: "Healthcare",

        text:
            "Explore healthcare access, transportation, distance, awareness and accessibility."

    },


    Education: {

        icon: "🎓",

        title: "Education",

        text:
            "Explore educational resources, scholarships, digital learning and career opportunities."

    },


    Women: {

        icon: "👩",

        title: "Women's Needs",

        text:
            "Explore healthcare, sanitation, privacy, mobility, employment and access to information."

    },


    Elderly: {

        icon: "🧓",

        title: "Elderly & Accessibility",

        text:
            "Explore mobility, digital exclusion, accessibility and independent access to essential services."

    }

};


/* =====================================
   CATEGORY MODAL
===================================== */

const cards =
    document.querySelectorAll(".category-card");

const modal =
    document.getElementById("categoryModal");

const modalContent =
    document.getElementById("modalContent");

const closeModal =
    document.getElementById("closeModal");


cards.forEach(card => {

    card.addEventListener("click", () => {

        const category =
            card.dataset.category;

        const info =
            categoryInfo[category];

        if (!info) return;


        modalContent.innerHTML = `

            <div class="eyebrow">
                EXPLORE CATEGORY
            </div>

            <div
                style="
                    font-size:50px;
                    margin:20px 0;
                "
            >
                ${info.icon}
            </div>

            <h2>
                ${info.title}
            </h2>

            <p
                style="
                    color:#68736c;
                    margin:20px 0;
                "
            >
                ${info.text}
            </p>

            <a
                href="#report"
                class="primary-button"
                onclick="closeCategoryModal()"
            >
                Report a ${info.title} problem →
            </a>

        `;


        modal.style.display =
            "flex";

    });

});


function closeCategoryModal() {

    modal.style.display =
        "none";

}


closeModal.addEventListener(
    "click",
    closeCategoryModal
);


modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {

            closeCategoryModal();

        }

    }
);


/* =====================================
   REPORT FORM
===================================== */

const form =
    document.getElementById("problemForm");

const toast =
    document.getElementById("toast");


form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        /*
            This is currently a FRONT-END demo.

            Later you can connect this form
            to Firebase, Supabase or your own
            backend/database.
        */


        showToast(
            "✓ Thank you! Your problem has been recorded."
        );


        form.reset();

    }
);


/* =====================================
   TOAST
===================================== */

function showToast(message) {

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },

        3500
    );

}


/* =====================================
   SCROLL ANIMATION
===================================== */

const sections =
    document.querySelectorAll("section");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: .12

        }

    );


sections.forEach(section => {

    observer.observe(section);

});


/* =====================================
   NAVBAR ACTIVE LINK
===================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            if (
                window.scrollY >= sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href")
                ===
                `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);
