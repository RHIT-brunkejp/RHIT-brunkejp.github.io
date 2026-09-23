/*
JavaScript references:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

The navigation, footer, and project interaction were independently
written for this website.
*/

document.getElementById("top").innerHTML = `
    <nav>
        <a href="index.html">Home</a>
        <a href="resume.html">Resume</a>
        <a href="portfolio.html">Portfolio</a>
    </nav>
`;

document.getElementById("bottom").innerHTML = `
    <p>
        <a href="https://github.com/RHIT-brunkejp">GitHub</a>
        <a href="https://www.linkedin.com/in/jjbrunke">LinkedIn</a>
    </p>
`;

let projects = document.querySelectorAll(".project");

for (let i = 0; i < projects.length; i++) {
    projects[i].addEventListener("click", function() {
        projects[i].classList.toggle("selected");
    });
}