import React, { useState } from "react";
import { ProductCard } from "./NewArrivalArea";
import { bestSellers, productData } from "../data";

const DiscuntedArea = () => {
  // which tab is active? we'll handle it in React instead of relying on BS data attributes
  const [activeTab, setActiveTab] = useState("newarrival");

  // for now I'm just reusing the same productData for all tabs.
  // if you have different arrays later (bestSellerData, specialOfferData),
  // you can swap them here
  const getProductsForTab = () => {
    switch (activeTab) {
      case "newarrival":
        return productData;
      case "bestseller":
        return bestSellers;
      case "specialoffer":
        return bestSellers;
      default:
        return bestSellers;
    }
  };

  const productsToShow = getProductsForTab();

  return (
    <div className="discunt-featured-onsale-area pt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-area tab-cars-style">
              {/* ---------- TAB HEADERS ---------- */}
              <div className="title-tab-product-category">
                <div className="col-lg-12 text-center">
                  <ul className="nav mb-40 heading-style-2" role="tablist">
                    <li role="presentation">
                      <a
                        className={activeTab === "newarrival" ? "active" : ""}
                        onClick={() => setActiveTab("newarrival")}
                        style={{ cursor: "pointer" }}
                      >
                        New Arrival
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        className={activeTab === "bestsellr" ? "active" : ""}
                        onClick={() => setActiveTab("bestsellr")}
                        style={{ cursor: "pointer" }}
                      >
                        Best Seller
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        className={
                          activeTab === "specialoffer" ? "active" : ""
                        }
                        onClick={() => setActiveTab("specialoffer")}
                        style={{ cursor: "pointer" }}
                      >
                        Special Offer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ---------- TAB PANES ---------- */}
              <div className="content-tab-product-category">
                <div className="tab-content">
                  {/* instead of 3 separate panes with duplicated markup,
                     we’ll just render the active one */}
                  <div
                    role="tabpanel"
                    className="tab-pane fade in active"
                  >
                    {/* 🔥 our responsive product grid */}
                    <div className="new-arrival-grid">
                      {productsToShow.map((item, index) => (
                        <div className="new-arrival-col" key={index}>
                          <ProductCard product={item} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* .tab-content */}
              </div>
              {/* .content-tab-product-category */}
            </div>
            {/* .product-area */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscuntedArea;
