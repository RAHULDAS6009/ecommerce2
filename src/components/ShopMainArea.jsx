// src/components/ShopMainArea.jsx
import React from "react";
import { productData } from "../data";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import Footer from "../pages/footer";

const ShopMainArea = () => {
  const dispatch = useDispatch();
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
                        {
                          p1: "02",
                          p2: "03",
                          label: "Sale",
                          stars: 4,
                          extra: true,
                        },
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
                                <a href="single-product.html">
                                  Quisque fringilla
                                </a>
                              </div>
                              <div className="prodcut-ratting-price">
                                {card.stars ? (
                                  <div className="prodcut-ratting">
                                    {[...Array(5)].map((_, i) => (
                                      <a href="#" key={i}>
                                        <i
                                          className={`fa ${
                                            i < card.stars
                                              ? "fa-star"
                                              : "fa-star-o"
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
                      {productData.slice(0, 4).map((product, index) => (
                        <div className="col-lg-12 item" key={index}>
                          <div className="single-product single-product-list full-widht-list">
                            <div className="product-img">
                              {product.label && (
                                <div className="product-label red">
                                  <div className="new">{product.label}</div>
                                </div>
                              )}
                              <div className="single-prodcut-img product-overlay pos-rltv">
                                <a href={"/productdetails/" + product.id}>
                                  <img
                                    alt={product.name}
                                    src={product.primaryImage}
                                    className="primary-image"
                                  />
                                  <img
                                    alt={product.name}
                                    src={product.secondaryImage}
                                    className="secondary-image"
                                  />
                                </a>
                              </div>
                            </div>

                            <div className="product-text prodcut-text-list fix">
                              <div className="prodcut-name list-name montserrat">
                                <a href="single-product.html">{product.name}</a>
                              </div>

                              <div className="prodcut-ratting-price">
                                <div className="prodcut-ratting list-ratting">
                                  {[...Array(5)].map((_, i) => (
                                    <a href="#" key={i}>
                                      <i
                                        className={
                                          i < Math.floor(product.rating)
                                            ? "fa fa-star" // filled star
                                            : i < product.rating
                                            ? "fa fa-star-half-o" // half star (for decimals)
                                            : "fa fa-star-o" // empty star
                                        }
                                      ></i>
                                    </a>
                                  ))}
                                </div>

                                <div className="prodcut-price list-price">
                                  <div className="new-price">
                                    ${product.price}
                                  </div>
                                  {product.oldPrice && (
                                    <div className="old-price">
                                      <del>{product.oldPrice}</del>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="list-product-content">
                                <p>{product.description}</p>
                              </div>

                              <div className="social-icon-wraper mt-25">
                                <div className="social-icon socile-icon-style-1">
                                  <ul>
                                    <li
                                      onClick={() => {
                                        dispatch(addToCart(product));
                                      }}
                                    >
                                      <a href="#">
                                        <i className="zmdi zmdi-shopping-cart"></i>
                                      </a>
                                    </li>
                                    {/* <li>
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
                                    </li> */}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

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
                          <a href="#" className="page-numbers">
                            2
                          </a>
                        </li>
                        <li>
                          <a href="#" className="page-numbers">
                            3
                          </a>
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
        <Footer />
    </>
  );
};

export default ShopMainArea;
