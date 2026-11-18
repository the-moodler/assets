(() => {
    const LABELS = {
        "file-icons": "File icons",
        "site-icons": "Site icons",
        "link-icons": "Link icons",
        "ui-icons": "Interface icons",
        "symbols": "Symbols",
        "branding": "Branding",
    };
    const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

    let catalogue = null;
    let category = "all";

    /** Follow the system's light or dark setting. */
    function followSystemTheme() {
        const dark = window.matchMedia("(prefers-color-scheme: dark)");
        const setTheme = () => document.documentElement.dataset.bsTheme = dark.matches ? "dark" : "light";
        setTheme();
        dark.addEventListener("change", setTheme);
    }

    function escapeHtml(text) {
        return text.replace(/[&<>"']/g, (c) => ESCAPES[c]);
    }

    function showCopied() {
        const toast = document.getElementById("copied");
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 1200);
    }

    /** Copy some text and say so. The promise chain ends here, so nothing that calls this has to wait for it. */
    function copy(text) {
        navigator.clipboard.writeText(text)
            .then(showCopied)
            .catch((error) => console.error("Clipboard copy failed:", error));
    }

    /** One icon's card: its picture, its address, the copy buttons and its other files. */
    function card(icon) {
        const main = icon.files.find((f) => f.size === 16 && f.type === "png") ?? icon.files[0];
        const big = icon.files.find((f) => f.size === 256 && f.type === "png") ?? main;
        const url = catalogue.base + main.path;
        const markdown = `![${icon.name}](${url})`;
        const html = `<img src="${url}" alt="${icon.name}">`;
        const variants = icon.files
            .map((f) => `<a class="link-secondary" href="${escapeHtml(f.path)}">${f.size} ${f.type.toUpperCase()}</a>`)
            .join(" · ");
        return `
            <div class="col-12 col-sm-6 col-lg-4 col-xxl-3">
                <div class="card h-100 shadow-sm icon-card">
                    <div class="card-body">
                        <div class="d-flex align-items-center gap-3 mb-2">
                            <img class="thumb" src="${escapeHtml(big.path)}" alt="" loading="lazy">
                            <img class="actual" src="${escapeHtml(main.path)}" alt="${escapeHtml(icon.name)} at its real size" loading="lazy">
                            <div class="ms-auto text-end">
                                <div class="fw-semibold">${escapeHtml(icon.name)}</div>
                                <span class="badge text-bg-secondary">${escapeHtml(LABELS[icon.category] ?? icon.category)}</span>
                            </div>
                        </div>
                        <code class="d-block mb-2">${escapeHtml(url)}</code>
                        <div class="btn-group btn-group-sm w-100 mb-2" role="group">
                            <button class="btn btn-outline-primary" data-copy="${escapeHtml(url)}">URL</button>
                            <button class="btn btn-outline-primary" data-copy="${escapeHtml(markdown)}">Markdown</button>
                            <button class="btn btn-outline-primary" data-copy="${escapeHtml(html)}">HTML</button>
                        </div>
                        <div class="small variants">${variants}</div>
                        <div class="small text-body-secondary mt-2">${escapeHtml(icon.credit)}</div>
                    </div>
                </div>
            </div>`;
    }

    /** Show the icons that match the search and the chosen category. */
    function showIcons() {
        const query = document.getElementById("search").value.trim().toLowerCase();
        const shown = catalogue.icons.filter((icon) =>
            (category === "all" || icon.category === category)
            && (!query || icon.name.includes(query) || icon.category.includes(query)));
        document.getElementById("grid").innerHTML = shown.map(card).join("");
        document.getElementById("count").textContent = `${shown.length} of ${catalogue.icons.length} icons`;
    }

    function showCategories() {
        const all = [["all", "All"], ...catalogue.categories.map((c) => [c, LABELS[c] ?? c])];
        document.getElementById("categories").innerHTML = all
            .map(([value, label]) => `<button type="button" class="btn ${value === category ? "btn-primary" : "btn-outline-primary"}" data-category="${value}">${label}</button>`)
            .join("");
    }

    function showError(error) {
        const box = document.getElementById("error");
        box.textContent = `Couldn't load the catalogue: ${error}`;
        box.classList.remove("d-none");
    }

    /** The copy buttons, the category buttons and the search box. */
    function setUpControls() {
        document.addEventListener("click", (event) => {
            const target = event.target.closest("[data-copy], [data-category]");
            if (!target) return;
            if (target.dataset.copy !== undefined) copy(target.dataset.copy);
            if (target.dataset.category) {
                category = target.dataset.category;
                showCategories();
                showIcons();
            }
        });
        document.getElementById("search").addEventListener("input", () => {
            if (catalogue) showIcons();
        });
    }

    /** The catalogue.json beside the page, so each version shows its own icons. */
    function loadCatalogue() {
        fetch("catalogue.json")
            .then((response) => response.json())
            .then((data) => {
                catalogue = data;
                showCategories();
                showIcons();
            })
            .catch(showError);
    }

    function start() {
        followSystemTheme();
        setUpControls();
        loadCatalogue();
    }

    start();
})();
