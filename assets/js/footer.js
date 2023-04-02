function generateFooter() {
  var footer = document.getElementById("footer");
  if (footer) {
    footer.innerHTML = `
    <div class="bg-dark text-white pt-4 pb-3">
        <div class="container">
            <!-- Section: Links -->
            <section class="mt-5">
                <!-- Grid row-->
                <div class="row text-center d-flex justify-content-center pt-5">
                    <!-- Grid column -->
                    <div class="col-md-2">
                        <h6 class="text-uppercase font-weight-bold">
                            <a href="#!" class="text-white">About us</a>
                        </h6>
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-2">
                        <h6 class="text-uppercase font-weight-bold">
                            <a href="#!" class="text-white">Products</a>
                        </h6>
                    </div>
                    <!-- Grid column -->


                    <!-- Grid column -->
                    <div class="col-md-2">
                        <h6 class="text-uppercase font-weight-bold">
                            <a href="#!" class="text-white">Help</a>
                        </h6>
                    </div>
                    <!-- Grid column -->

                </div>
                <!-- Grid row-->
            </section>
            <!-- Section: Links -->

            <hr class="my-5" />

            <!-- Section: Text -->
            <section class="mb-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
                        <p>
                            Welcome to RumiDanny's site, This is project open source from Rumi The Axolotl and Danny The Raccoon.
                            We are from SaiGon University
                        </p>
                    </div>
                </div>
            </section>
            <!-- Section: Text -->


        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
            © 2023 Copyright:
            <a class="text-white" href="http://rumidanny.github.io">http://rumidanny.github.io</a>
        </div>
    </div>
`;
  }
}
