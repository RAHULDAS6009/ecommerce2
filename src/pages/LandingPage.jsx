import React from "react";
import Header from "../components/Header";
import SliderArea from "../components/SliderArea";
import DeliveryService from "../components/DeliveryService";
import { BrandingSection } from "../components/BrandingSection";
import NewArrivalArea from "../components/NewArrivalArea";
import Banner from "../components/Banner";
import DiscuntedArea from "../components/DiscuntedArea";
import { productData } from "../data";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

// const products = [
//   {
//     img: "/images/product/s01.jpg",
//     name: "Primo Court Mid Suede",
//     price: "$236.99",
//   },
//   {
//     img: "/images/product/s02.jpg",
//     name: "Primo Court Mid Suede",
//     price: "$236.99",
//   },
// ];

const categories = [
  { title: "New Arrival", className: "new-arrival-ctg" },
  { title: "On Sale", className: "on-sale-ctg" },
  { title: "Top Rated", className: "top-rated-ctg" },
];

export const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <div className="wrapper home-one">
        {/* Start of header area */}
        <Header />
        {/* End of header area */}
        {/*slider area start*/}
        <SliderArea />
        {/*slider area start*/}
        {/*delivery service start*/}
        <DeliveryService />
        {/*delivery service start*/}
        {/*branding-section-area start*/}
        {/*branding-section-area end*/}
        {/*new arrival area start*/}
        <NewArrivalArea />
        {/*new arrival area end*/}
        {/*banner area start*/}
        <Banner />
        {/*banner area end*/}
        {/*discunt-featured-onsale-area start */}
        <DiscuntedArea />
        {/*discunt-featured-onsale-area end*/}
        {/*testimonial-area-start*/}
        {/* <div className="testimonial-area overlay ptb-70 mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="heading-title color-lightgrey mb-40 text-center">
                  <h5 className="uppercase">Testimonial</h5>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="total-testimonial active-slider carosule-pagi pagi-03">
                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img src="/images/team/testi-03.jpg" alt="" />
                    </div>
                    <div className="testimonial-content color-lightgrey">
                      <div className="name-degi pos-rltv">
                        <h5>Alexandra</h5>
                        <p>Developer</p>
                      </div>
                      <div className="testi-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img src="/images/team/testi-02.jpg" alt="" />
                    </div>
                    <div className="testimonial-content color-lightgrey">
                      <div className="name-degi pos-rltv">
                        <h5>Bernadette</h5>
                        <p>Facebook Liker</p>
                      </div>
                      <div className="testi-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="single-testimonial">
                    <div className="testimonial-img">
                      <img src="/images/team/testi-01.jpg" alt="" />
                    </div>
                    <div className="testimonial-content color-lightgrey">
                      <div className="name-degi pos-rltv">
                        <h5>Amanda</h5>
                        <p>Designer</p>
                      </div>
                      <div className="testi-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/*testimonial-area-end*/}
       
          <Footer />
      </div>
    </div>
  );
};
