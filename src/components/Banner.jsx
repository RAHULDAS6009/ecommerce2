import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";

const Banner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="banner-area pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="single-banner gray-bg">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sb-img text-center">
                      <img
                        src="/images/banner/02.png"
                        alt=""
                        onClick={() => {
                          navigate("/productdetails/" + 11);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sb-content mt-60">
                      <div className="banner-text">
                        <h5 className="lato">New Arrival</h5>
                        <h2 className="montserrat">Grag T- Shirt</h2>
                        <h3 className="montserrat">$99.99</h3>
                        <div className="banner-list">
                          <ul>
                            <li>Best quality</li>
                            <li>Best quality</li>
                            <li>Best quality</li>
                          </ul>
                        </div>
                        <div className="social-icon-wraper mt-25">
                          <div className="social-icon socile-icon-style-1">
                            <ul>
                              <li
                                onClick={() => {
                                  dispatch(
                                    addToCart({
                                      id: 11,
                                      name: "Grag T- Shirt",
                                      primaryImage: "/images/banner/02.png",
                                      secondaryImage: "/images/product/s01.jpg",
                                      price: 99.99,
                                      oldPrice: null,
                                      quantity: 1,
                                      isNew: false,
                                      isSale: false,
                                      rating: 4,
                                      images: [
                                        "images/product/s01.jpg",
                                        "images/product/s02.jpg",
                                        "images/product/s03.jpg",
                                        "images/product/s04.jpg",
                                      ],
                                      description:
                                        "Sleek, mid-top suede sneakers designed with attention to detail. A blend of minimalism and comfort, ideal for any fashion-forward individual.",
                                      colors: [
                                        "Navy",
                                        "Black",
                                        "Beige",
                                        "White",
                                      ],
                                      sizes: ["6", "7", "8", "9", "10", "11"],
                                    })
                                  );
                                }}
                              >
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
                                  tabIndex="0"
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
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-banner gray-bg">
                <div className="row">
                  <div className="col-md-6">
                    <div className="sb-img text-center">
                      <img src="/images/banner/01.png" alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="sb-content mt-60">
                      <div className="banner-text">
                        <h5 className="lato">New Arrival</h5>
                        <h2 className="montserrat">Grag T- Shirt</h2>
                        <h3 className="montserrat">$99.99</h3>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                        <a className="btn-def btn2" href="/fullgrid">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
