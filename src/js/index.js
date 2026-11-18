(() => {
    /** Follow the system's light or dark setting. */
    function followSystemTheme() {
        const dark = window.matchMedia("(prefers-color-scheme: dark)");
        const setTheme = () => document.documentElement.dataset.bsTheme = dark.matches ? "dark" : "light";
        setTheme();
        dark.addEventListener("change", setTheme);
    }

    /** Back to wherever the visitor came from; with nowhere to go back to, the link opens The Moodler on GitHub. */
    function setUpBackLink() {
        document.getElementById("back").addEventListener("click", (event) => {
            if (window.history.length > 1) {
                event.preventDefault();
                window.history.back();
            }
        });
    }

    function start() {
        followSystemTheme();
        setUpBackLink();
    }

    start();
})();
