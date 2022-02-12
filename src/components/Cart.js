import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Cart = () => {
  return (
    <div>
      <div class="mobile-sticky-body-overlay"></div>

      <div class="wrapper">
        <Sidebar />

        <div class="page-wrapper">
          <Header />

          <div class="content-wrapper">
            <div class="content">
              <div class="row">
                <div class="col-xl-12">
                  {/* <!-- Top Products --> */}
                  <div class="card card-default" data-scroll-height="650">
                    <div class="card-header justify-content-between mb-4">
                      <h2>Cart</h2>
                      <div>
                        <button class="text-black-50 mr-2 font-size-20">
                          <i class="mdi mdi-cached"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body py-0">
                      <div class="media d-flex mb-5">
                        <div class="media-image align-self-center mr-3 rounded">
                          <a href="/#">
                            <img
                              src="assets/img/products/p1.jpg"
                              alt="customer item"
                            />
                          </a>
                        </div>
                        <div class="media-body align-self-center">
                          <a href="/#">
                            <h6 class="mb-3 text-dark font-weight-medium">
                              {" "}
                              Coach Swagger
                            </h6>
                          </a>
                          <p class="float-md-right">
                            Quantity <span class="text-dark mr-2">2</span>
                          </p>
                          {/* <p class="d-none d-md-block">Statement belting with double-turnlock hardware adds “swagger” to a simple.</p> */}
                          <p class="mb-0">
                            <span class="text-dark ml-3">$250</span>
                          </p>
                        </div>
                      </div>

                      <div class="media d-flex mb-5">
                        <div class="media-image align-self-center mr-3 rounded">
                          <a href="/#">
                            <img
                              src="assets/img/products/p2.jpg"
                              alt="customer item"
                            />
                          </a>
                        </div>
                        <div class="media-body align-self-center">
                          <a href="/#">
                            <h6 class="mb-3 text-dark font-weight-medium">
                              {" "}
                              Coach Swagger
                            </h6>
                          </a>
                          <p class="float-md-right">
                            Quantity <span class="text-dark mr-2">20</span>
                          </p>
                          {/* <p class="d-none d-md-block">Statement belting with double-turnlock hardware adds “swagger” to a simple.</p> */}
                          <p class="mb-0">
                            <span class="text-dark ml-3">$250</span>
                          </p>
                        </div>
                      </div>

                      <div class="media d-flex mb-5">
                        <div class="media-image align-self-center mr-3 rounded">
                          <a href="/#">
                            <img
                              src="assets/img/products/p3.jpg"
                              alt="customer item"
                            />
                          </a>
                        </div>
                        <div class="media-body align-self-center">
                          <a href="/#">
                            <h6 class="mb-3 text-dark font-weight-medium">
                              {" "}
                              Gucci Watch
                            </h6>
                          </a>
                          <p class="float-md-right">
                            Quantity <span class="text-dark mr-2">10</span>
                          </p>
                          {/* <p class="d-none d-md-block">Statement belting with double-turnlock hardware adds “swagger” to a simple.</p> */}
                          <p class="mb-0">
                            <span class="text-dark ml-3">$50</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="button" class="mb-1 btn btn-primary">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Cart;