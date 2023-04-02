function generateHeader() {
    header = document.getElementById("header")
    if (header) {
        header.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark pb-5">
            <a class="navbar-brand" href="#">Rumi Danny</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end text-uppercase" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                </ul>
            </div>
        </nav>`;
    }
}
