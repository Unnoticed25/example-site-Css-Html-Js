const foo_acc = document.getElementsByClassName("footer_accordion");
let j;

for (j = 0; j < foo_acc.length; j++) {
    foo_acc[j].addEventListener("click", function() {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}