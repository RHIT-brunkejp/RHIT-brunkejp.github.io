let buttons = document.querySelectorAll(".filter");
let projects = document.querySelectorAll(".project");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {

        let type = buttons[i].getAttribute("data-type");

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("current-filter");
        }

        buttons[i].classList.add("current-filter");

        for (let j = 0; j < projects.length; j++) {

            let projectType =
                projects[j].getAttribute("data-type");

            if (type == "all" || type == projectType) {
                projects[j].style.display = "block";
            }
            else {
                projects[j].style.display = "none";
            }
        }
    });
}