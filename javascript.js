

document.addEventListener("DOMContentLoaded", () => {
    // Fade in on load
    document.body.classList.add("fade-in");

    // Fade out before leaving page
    document.querySelectorAll("a").forEach(link => {
        if (link.hostname === window.location.hostname) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const url = this.href;
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location.href = url;
                }, 0); // match transition time
            });
        }
    });
});
 