document.addEventListener("DOMContentLoaded", function() {
    const folders = document.querySelectorAll('[data-toggle="folder"]');

    folders.forEach(folder => {
        folder.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const isVisible = content.style.display === "block";
            content.style.display = isVisible ? "none" : "block";
        });
    });
});
