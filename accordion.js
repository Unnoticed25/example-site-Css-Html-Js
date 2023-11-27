const plateElm = document.getElementsByClassName('clickable-gray-plate');

for (let i = 0; i < plateElm.length; i++) {
    plateElm[i].addEventListener("click", function() {
        this.classList.toggle("active");

        const descText = this.nextElementSibling;
        if (descText.style.display === "block") {
            descText.style.display = "none";
        } else {
            descText.style.display = "block";
        }
    });
}
