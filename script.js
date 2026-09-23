/*
JavaScript references:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
*/

let projects = document.querySelectorAll(".project");

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", function() {
        projects[i].classList.toggle("selected");
    });
}