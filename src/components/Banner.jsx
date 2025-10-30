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

                        <a className="btn-def btn2" href="/fullgrid">
                          Shop Now
                        </a>
                        
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
