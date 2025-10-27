import React from "react";
import Header from "../components/Header";
import ShopMainArea from "../components/ShopMainArea";

const ShopFullGridPage = () => {
  return (
    <div>
      <Header />

      {/* bread crumbs */}
      <div className="breadcumb-area overlay pos-rltv">
        <div className="bread-main">
          <div className="bred-hading text-center">
            <h5>Product Grid View</h5>
          </div>
          <ol className="breadcrumb">
            <li className="home">
              <a title="Go to Home Page" href="index.html">
                Home
              </a>
            </li>
            <li className="active">Shop Full Grid</li>
          </ol>
        </div>
      </div>
      <ShopMainArea />
    </div>
  );
};

export default ShopFullGridPage;
