import React from "react";

const DeliveryService = () => {
  return (
    <div>
      <div className="delivery-service-area ptb-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-service shadow-box text-center">
                <img src="/images/icons/garantee.png" alt="" />
                <h5>Money Back Guarantee</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service shadow-box text-center">
                <img src="/images/icons/coupon.png" alt="" />
                <h5>Gift Coupon</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service shadow-box text-center">
                <img src="/images/icons/delivery.png" alt="" />
                <h5>Free Shipping</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-service shadow-box text-center">
                <img src="/images/icons/support.png" alt="" />
                <h5>24x7 Support</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryService;
