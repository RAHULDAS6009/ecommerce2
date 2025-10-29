// src/components/ShopMainArea.jsx
import React from "react";

const ShopMainArea = () => {
  return (
    <>
      {/* shop main area start */}
      <div className="shop-main-area ptb-70">
        <div className="container">
          <div className="row">
            {/* top bar */}
            <div className="col-lg-12">
              <div className="shop-area-top">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="sort product-show">
                      <label>View</label>
                      <select id="input-amount" defaultValue="25">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                      </select>
                    </div>
                    <div className="sort product-type">
                      <label>Sort By</label>
                      <select id="input-sort" defaultValue="#">
                        <option value="#">Default</option>
                        <option value="#">Name (A - Z)</option>
                        <option value="#">Name (Z - A)</option>
                        <option value="#">Price (Low &gt; High)</option>
                        <option value="#">Price (High &gt; Low)</option>
                        <option value="#">Rating (Highest)</option>
                        <option value="#">Rating (Lowest)</option>
                        <option value="#">Model (A - Z)</option>
                        <option value="#">Model (Z - A)</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-3 col-md-2">
                    <div className="list-grid-view text-center">
                      <ul className="nav" role="tablist">
                        <li role="presentation">
                          <a
                            href="#grid"
                            aria-controls="grid"
                            role="tab"
                            data-bs-toggle="tab"
                          >
                            <i className="zmdi zmdi-widgets"></i>
                          </a>
                        </li>
                        <li role="presentation">
                          <a
                            className="active"
                            href="#list"
                            aria-controls="list"
                            role="tab"
                            data-bs-toggle="tab"
                          >
                            <i className="zmdi zmdi-view-list-alt"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4 d-sm-none d-md-block d-block">
                    <div className="total-showing text-end">
                      Showing - <span>10</span> to <span>18</span> Of Total{" "}
                      <span>36</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix"></div>

            {/* tabbed content */}
            <div className="col-lg-12">
              <div className="shop-total-product-area clearfix mt-35">
                <div className="tab-content">
                  {/* GRID (hidden by default) */}
                  <div role="tabpanel" className="tab-pane fade" id="grid">
                    <div className="total-shop-product-grid row">
                      {/* repeat of your grid cards */}
                      {[
                        { p1: "01", p2: "02", label: "New" },
                        { p1: "03", p2: "04" },
                        { p1: "02", p2: "03", label: "Sale", stars: 4 },
                        { p1: "04", p2: "03" },
                        { p1: "03", p2: "04" },
                        { p1: "02", p2: "03", label: "Sale", stars: 4 },
                        { p1: "04", p2: "03" },
                        { p1: "01", p2: "02", label: "New" },
                        { p1: "03", p2: "04" },
                        { p1: "04", p2: "03" },
                        { p1: "03", p2: "04" },
                        { p1: "02", p2: "03", label: "Sale", stars: 4, extra: true },
                      ].map((card, idx) => (
                        <div
                          className={`${
                            card.extra
                              ? "col-lg-3 d-md-none d-block d-lg-block"
                              : "col-lg-3 col-md-4"
                          } item`}
                          key={`g-${idx}`}
                        >
                          <div className="single-product">
                            <div className="product-img">
                              {card.label && (
                                <div className="product-label red">
                                  <div className="new">{card.label}</div>
                                </div>
                              )}
                              <div className="single-prodcut-img  product-overlay pos-rltv">
                                <a href="single-product.html">
                                  <img
                                    alt=""
                                    src={`images/product/${card.p1}.jpg`}
                                    className="primary-image"
                                  />
                                  <img
                                    alt=""
                                    src={`images/product/${card.p2}.jpg`}
                                    className="secondary-image"
                                  />
                                </a>
                              </div>
                              <div className="product-icon socile-icon-tooltip text-center">
                                <ul>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Add To Cart"
                                      className="add-cart"
                                      data-placement="left"
                                    >
                                      <i className="fa fa-cart-plus"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Wishlist"
                                      className="w-list"
                                    >
                                      <i className="fa fa-heart-o"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Compare"
                                      className="cpare"
                                    >
                                      <i className="fa fa-refresh"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Quick View"
                                      className="q-view"
                                      data-bs-toggle="modal"
                                      data-bs-target=".modal"
                                    >
                                      <i className="fa fa-eye"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-text">
                              <div className="prodcut-name">
                                <a href="single-product.html">Quisque fringilla</a>
                              </div>
                              <div className="prodcut-ratting-price">
                                {card.stars ? (
                                  <div className="prodcut-ratting">
                                    {[...Array(5)].map((_, i) => (
                                      <a href="#" key={i}>
                                        <i
                                          className={`fa ${
                                            i < card.stars ? "fa-star" : "fa-star-o"
                                          }`}
                                        ></i>
                                      </a>
                                    ))}
                                  </div>
                                ) : null}
                                <div className="prodcut-price">
                                  <div className="new-price"> $220 </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LIST (active by default as per your markup) */}
                  <div
                    role="tabpanel"
                    className="tab-pane fade show active"
                    id="list"
                  >
                    <div className="total-shop-product-list row">
                      {/* item 1 */}
                      <div className="col-lg-12 item">
                        <div className="single-product single-product-list full-widht-list">
                          <div className="product-img">
                            <div className="product-label red">
                              <div className="new">Sale</div>
                            </div>
                            <div className="single-prodcut-img  product-overlay pos-rltv">
                              <a href="single-product.html">
                                <img
                                  alt=""
                                  src="images/product/02.jpg"
                                  className="primary-image"
                                />
                                <img
                                  alt=""
                                  src="images/product/03.jpg"
                                  className="secondary-image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-text prodcut-text-list fix">
                            <div className="prodcut-name list-name montserrat">
                              <a href="single-product.html">
                                Magnetic Force Bralette
                              </a>
                            </div>
                            <div className="prodcut-ratting-price">
                              <div className="prodcut-ratting list-ratting">
                                {[...Array(5)].map((_, i) => (
                                  <a href="#" key={i}>
                                    <i className="fa fa-star-o"></i>
                                  </a>
                                ))}
                              </div>
                              <div className="prodcut-price list-price">
                                <div className="new-price"> $220 </div>
                                <div className="old-price">
                                  <del>$250</del>
                                </div>
                              </div>
                            </div>
                            <div className="list-product-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce dolor tellus, bibendum eu lacus ids suscipit blandit
                                tortor. Aenean eget posuere augue, vel molestie turpis. Ut
                                tempor mauris ut justo luctus aliquam. Nullam id quam vitae
                                odio scelerisque ultrices.
                              </p>
                            </div>
                            <div className="social-icon-wraper mt-25">
                              <div className="social-icon socile-icon-style-1">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Quick View"
                                      className="q-view"
                                      data-bs-toggle="modal"
                                      data-bs-target=".modal"
                                      tabIndex={0}
                                    >
                                      <i className="zmdi zmdi-eye"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-repeat"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* item 2 */}
                      <div className="col-lg-12 item">
                        <div className="single-product single-product-list full-widht-list">
                          <div className="product-img">
                            <div className="single-prodcut-img  product-overlay pos-rltv">
                              <a href="single-product.html">
                                <img
                                  alt=""
                                  src="images/product/03.jpg"
                                  className="primary-image"
                                />
                                <img
                                  alt=""
                                  src="images/product/04.jpg"
                                  className="secondary-image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-text prodcut-text-list fix">
                            <div className="prodcut-name list-name montserrat">
                              <a href="single-product.html">
                                Magnetic Force Bralette
                              </a>
                            </div>
                            <div className="prodcut-ratting-price">
                              <div className="prodcut-ratting list-ratting">
                                {[...Array(5)].map((_, i) => (
                                  <a href="#" key={i}>
                                    <i className="fa fa-star-o"></i>
                                  </a>
                                ))}
                              </div>
                              <div className="prodcut-price list-price">
                                <div className="new-price"> $220 </div>
                              </div>
                            </div>
                            <div className="list-product-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce dolor tellus, bibendum eu lacus ids suscipit blandit
                                tortor. Aenean eget posuere augue, vel molestie turpis. Ut
                                tempor mauris ut justo luctus aliquam. Nullam id quam vitae
                                odio scelerisque ultrices.
                              </p>
                            </div>
                            <div className="social-icon-wraper mt-25">
                              <div className="social-icon socile-icon-style-1">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Quick View"
                                      className="q-view"
                                      data-bs-toggle="modal"
                                      data-bs-target=".modal"
                                      tabIndex={0}
                                    >
                                      <i className="zmdi zmdi-eye"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-repeat"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* item 3 */}
                      <div className="col-lg-12 item">
                        <div className="single-product single-product-list full-widht-list">
                          <div className="product-img">
                            <div className="single-prodcut-img  product-overlay pos-rltv">
                              <a href="single-product.html">
                                <img
                                  alt=""
                                  src="images/product/05.jpg"
                                  className="primary-image"
                                />
                                <img
                                  alt=""
                                  src="images/product/06.jpg"
                                  className="secondary-image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-text prodcut-text-list fix">
                            <div className="prodcut-name list-name montserrat">
                              <a href="single-product.html">
                                Magnetic Force Bralette
                              </a>
                            </div>
                            <div className="prodcut-ratting-price">
                              <div className="prodcut-ratting list-ratting">
                                {[...Array(5)].map((_, i) => (
                                  <a href="#" key={i}>
                                    <i className="fa fa-star-o"></i>
                                  </a>
                                ))}
                              </div>
                              <div className="prodcut-price list-price">
                                <div className="new-price"> $200 </div>
                                <div className="old-price">
                                  <del>$300</del>
                                </div>
                              </div>
                            </div>
                            <div className="list-product-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce dolor tellus, bibendum eu lacus ids suscipit blandit
                                tortor. Aenean eget posuere augue, vel molestie turpis. Ut
                                tempor mauris ut justo luctus aliquam. Nullam id quam vitae
                                odio scelerisque ultrices.
                              </p>
                            </div>
                            <div className="social-icon-wraper mt-25">
                              <div className="social-icon socile-icon-style-1">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Quick View"
                                      className="q-view"
                                      data-bs-toggle="modal"
                                      data-bs-target=".modal"
                                      tabIndex={0}
                                    >
                                      <i className="zmdi zmdi-eye"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-repeat"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* item 4 */}
                      <div className="col-lg-12 item">
                        <div className="single-product single-product-list full-widht-list">
                          <div className="product-img">
                            <div className="single-prodcut-img  product-overlay pos-rltv">
                              <a href="single-product.html">
                                <img
                                  alt=""
                                  src="images/product/04.jpg"
                                  className="primary-image"
                                />
                                <img
                                  alt=""
                                  src="images/product/05.jpg"
                                  className="secondary-image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-text prodcut-text-list fix">
                            <div className="prodcut-name list-name montserrat">
                              <a href="single-product.html">
                                Magnetic Force Bralette
                              </a>
                            </div>
                            <div className="prodcut-ratting-price">
                              <div className="prodcut-ratting list-ratting">
                                {[...Array(5)].map((_, i) => (
                                  <a href="#" key={i}>
                                    <i className="fa fa-star-o"></i>
                                  </a>
                                ))}
                              </div>
                              <div className="prodcut-price list-price">
                                <div className="new-price"> $220 </div>
                              </div>
                            </div>
                            <div className="list-product-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce dolor tellus, bibendum eu lacus ids suscipit blandit
                                tortor. Aenean eget posuere augue, vel molestie turpis. Ut
                                tempor mauris ut justo luctus aliquam. Nullam id quam vitae
                                odio scelerisque ultrices.
                              </p>
                            </div>
                            <div className="social-icon-wraper mt-25">
                              <div className="social-icon socile-icon-style-1">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Quick View"
                                      className="q-view"
                                      data-bs-toggle="modal"
                                      data-bs-target=".modal"
                                      tabIndex={0}
                                    >
                                      <i className="zmdi zmdi-eye"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-repeat"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* item 5 */}
                      <div className="col-lg-12 item">
                        <div className="single-product single-product-list full-widht-list">
                          <div className="product-img">
                            <div className="single-prodcut-img  product-overlay pos-rltv">
                              <a href="single-product.html">
                                <img
                                  alt=""
                                  src="images/product/06.jpg"
                                  className="primary-image"
                                />
                                <img
                                  alt=""
                                  src="images/product/07.jpg"
                                  className="secondary-image"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-text prodcut-text-list fix">
                            <div className="prodcut-name list-name montserrat">
                              <a href="single-product.html">
                                Magnetic Force Bralette
                              </a>
                            </div>
                            <div className="prodcut-ratting-price">
                              <div className="prodcut-ratting list-ratting">
                                {[...Array(5)].map((_, i) => (
                                  <a href="#" key={i}>
                                    <i className="fa fa-star-o"></i>
                                  </a>
                                ))}
                              </div>
                              <div className="prodcut-price list-price">
                                <div className="new-price"> $200 </div>
                                <div className="old-price">
                                  <del>$300</del>
                                </div>
                              </div>
                            </div>
                            <div className="list-product-content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce dolor tellus, bibendum eu lacus ids suscipit blandit
                                tortor. Aenean eget posuere augue, vel molestie turpis. Ut
                                tempor mauris ut justo luctus aliquam. Nullam id quam vitae
                                odio scelerisque ultrices.
                              </p>
                            </div>
                            <div className="social-icon-wraper mt-25">
                              <div className="social-icon socile-icon-style-1">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-shopping-cart"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-favorite-outline"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#"
                                      data-tooltip="Quick View"
                                      className="q-view"
                                      data-bs-toggle="modal"
                                      data-bs-target=".modal"
                                      tabIndex={0}
                                    >
                                      <i className="zmdi zmdi-eye"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="zmdi zmdi-repeat"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /items */}
                    </div>
                  </div>

                  {/* pagination */}
                  <div className="col-lg-12">
                    <div className="pagination-btn text-center">
                      <ul className="page-numbers">
                        <li>
                          <a href="#" className="next page-numbers">
                            <i className="zmdi zmdi-long-arrow-left"></i>
                          </a>
                        </li>
                        <li>
                          <span className="page-numbers current">1</span>
                        </li>
                        <li>
                          <a href="#" className="page-numbers">2</a>
                        </li>
                        <li>
                          <a href="#" className="page-numbers">3</a>
                        </li>
                        <li>
                          <a href="#" className="next page-numbers">
                            <i className="zmdi zmdi-long-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* pagination end */}
                </div>
              </div>
            </div>
            {/* /tabbed content */}
          </div>
        </div>
      </div>
      {/* shop main area end */}
    </>
  );
};

export default ShopMainArea;
