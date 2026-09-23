document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.querySelectorAll(".filter-button");
    let projects = document.querySelectorAll(".project-card");

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function() {

            let selectedCategory = buttons[i].getAttribute("data-filter");

            for (let j = 0; j < buttons.length; j++) {
                buttons[j].classList.remove("active-filter");
            }

            buttons[i].classList.add("active-filter");

            for (let j = 0; j < projects.length; j++) {

                let projectCategory =
                    projects[j].getAttribute("data-category");

                if (selectedCategory == "all" ||
                    selectedCategory == projectCategory) {

                    projects[j].style.display = "block";

                } else {

                    projects[j].style.display = "none";

                }
            }
        });
    }
});