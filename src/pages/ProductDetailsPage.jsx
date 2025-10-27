import { useState } from "react";
import Header from "../components/Header";
import "./ProductDetails.css";
const product = {
  name: "GLOB T-SHIRT",
  brand: "Brand",
  price: 220,
  oldPrice: 250,
  rating: 4,
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page...",
  images: [
    "images/product/01.jpg",
    "images/product/02.jpg",
    "images/product/03.jpg",
    "images/product/04.jpg",
  ],
  colors: ["Red", "Blue", "Green", "Purple", "Black", "White"],
  sizes: ["S", "M", "L", "XL", "XXL"],
};
const productTag = {
  tags: [
    "Fashion",
    "Women",
    "Winter",
    "Street Style",
    "Style",
    "Shop",
    "Collection",
  ],
};

const ProductDetailsPage = () => {
  return (
    <div className="wrapper shop-full-grid">
      <Header />
      <div className="breadcumb-area overlay pos-rltv">
        <div className="bread-main">
          <div className="bred-hading text-center">
            <h5>Prodcut Details</h5>
          </div>
          <ol className="breadcrumb">
            <li className="home">
              <a title="Go to Home Page" href="index.html">
                Home
              </a>
            </li>
            <li className="active">product-details</li>
          </ol>
        </div>
      </div>
      {/* single peoduct */}
      <SinglePortfolio product={product} />
      <ProductDescriptionTabs product={productTag} />
      <RelatedProducts />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;

const SinglePortfolio = ({ product }) => {
  const [quantity, setQuantity] = useState(2);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <div className="single-protfolio-area ptb-70">
      <div className="container">
        <div className="row">
          {/* Left Side - Product Thumbnails */}
          <div className="col-lg-7">
            <div className="portfolio-thumbnil-area">
              <div className="product-more-views">
                <div className="tab_thumbnail" data-tabs="tabs">
                  <div className="thumbnail-carousel">
                    <ul className="nav">
                      {product?.images?.map((img, index) => (
                        <li key={index}>
                          <a
                            className={`shadow-box ${
                              index === 0 ? "active" : ""
                            }`}
                            href={`#view${index + 1}`}
                            aria-controls={`view${index + 1}`}
                            data-bs-toggle="tab"
                          >
                            <img src={img} alt={`Thumbnail ${index + 1}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tab-content active-portfolio-area pos-rltv">
                <div className="social-tag">
                  <a href="#">
                    <i className="zmdi zmdi-share"></i>
                  </a>
                </div>

                {product?.images?.map((img, index) => (
                  <div
                    key={index}
                    role="tabpanel"
                    className={`tab-pane ${index === 0 ? "active" : ""}`}
                    id={`view${index + 1}`}
                  >
                    <div className="product-img">
                      <a
                        className="fancybox"
                        data-fancybox-group="group"
                        href={img}
                      >
                        <img src={img} alt="Single portfolio" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="col-lg-5">
            <div className="single-product-description">
              <div className="sp-top-des">
                <h3>
                  {product?.name} <span>({product?.brand})</span>
                </h3>
                <div className="prodcut-ratting-price">
                  <div className="prodcut-ratting">
                    {[...Array(5)].map((_, i) => (
                      <a href="#" key={i} tabIndex="0">
                        <i
                          className={
                            i < product?.rating ? "fa fa-star" : "fa fa-star-o"
                          }
                        ></i>
                      </a>
                    ))}
                  </div>
                  <div className="prodcut-price">
                    <div className="new-price">${product?.price}</div>
                    {product?.oldPrice && (
                      <div className="old-price">
                        <del>${product.oldPrice}</del>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="sp-des">
                <p>{product?.description}</p>
              </div>

              <div className="sp-bottom-des">
                {/* Product Options */}
                <div className="single-product-option">
                  <div className="sort product-type">
                    <label>Color: </label>
                    <select
                      id="input-sort-color"
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                    >
                      <option value="">Choose Your Color</option>
                      {product?.colors?.map((color) => (
                        <option key={color} value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sort product-type">
                    <label>Size: </label>
                    <select
                      id="input-sort-size"
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      <option value="">Choose Your Size</option>
                      {product?.sizes?.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Quantity */}
                <div className="quantity-area">
                  <label>Qty :</label>
                  <div className="cart-quantity">
                    <div className="product-qty">
                      <div className="cart-plus-minus">
                        <div
                          className="dec qtybutton"
                          onClick={() => handleQuantityChange("dec")}
                        >
                          -
                        </div>
                        <input
                          type="text"
                          value={quantity.toString().padStart(2, "0")}
                          readOnly
                          className="cart-plus-minus-box"
                        />
                        <div
                          className="inc qtybutton"
                          onClick={() => handleQuantityChange("inc")}
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="social-icon socile-icon-style-1">
                  <ul>
                    <li>
                      <a
                        href="#"
                        data-tooltip="Add To Cart"
                        className="add-cart add-cart-text"
                        data-placement="left"
                      >
                        Add To Cart <i className="fa fa-cart-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-tooltip="Wishlist"
                        className="w-list"
                        tabIndex="0"
                      >
                        <i className="fa fa-heart-o"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-tooltip="Compare"
                        className="cpare"
                        tabIndex="0"
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
                        tabIndex="0"
                      >
                        <i className="fa fa-eye"></i>
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
  );
};

const ProductDescriptionTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("review");

  return (
    <div className="descripton-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-area tab-cars-style">
              {/* ---------- Tab Headers ---------- */}
              <div className="title-tab-product-category row">
                <div className="col-lg-12 text-center">
                  <ul className="nav mb-40 heading-style-2" role="tablist">
                    <li role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "description" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("description")}
                      >
                        Description
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "review" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("review")}
                      >
                        Review
                      </button>
                    </li>
                    <li role="presentation">
                      <button
                        className={`nav-link ${
                          activeTab === "tags" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("tags")}
                      >
                        Tags
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ---------- Tab Content ---------- */}
              <div className="col-lg-12">
                <div className="content-tab-product-category">
                  <div className="tab-content">
                    {/* Description Tab */}
                    {activeTab === "description" && (
                      <div
                        role="tabpanel"
                        className="tab-pane fix fade show active"
                        id="description"
                      >
                        <div className="review-wraper">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                          <h5>ABOUT ME</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            "Content here, content here", making it look like
                            readable English.
                          </p>
                          <h5>SIZE &amp; FIT</h5>
                          <ul>
                            <li>Model wears: Style Photoliya U2980</li>
                            <li>Model's height: 185”66</li>
                          </ul>
                          <h5>Overview</h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Review Tab */}
                    {activeTab === "review" && (
                      <div
                        role="tabpanel"
                        className="tab-pane fix fade show active"
                        id="review"
                      >
                        <div className="review-wraper">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                          </p>
                          <h5>SIZE &amp; FIT</h5>
                          <ul>
                            <li>Model wears: Style Photoliya U2980</li>
                            <li>Model's height: 185”66</li>
                          </ul>
                          <h5>ABOUT ME</h5>
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters.
                          </p>
                          <h5>Overview</h5>
                          <p>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tags Tab */}
                    {activeTab === "tags" && (
                      <div
                        role="tabpanel"
                        className="tab-pane fix fade show active"
                        id="tags"
                      >
                        <ul className="tag-filter">
                          {product?.tags?.length ? (
                            product.tags.map((tag) => (
                              <li key={tag}>
                                <a href="#">{tag}</a>
                              </li>
                            ))
                          ) : (
                            <>
                              <li>
                                <a href="#">Fashion</a>
                              </li>
                              <li>
                                <a href="#">Women</a>
                              </li>
                              <li>
                                <a href="#">Winter</a>
                              </li>
                              <li>
                                <a href="#">Street Style</a>
                              </li>
                              <li>
                                <a href="#">Style</a>
                              </li>
                              <li>
                                <a href="#">Shop</a>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* End Tabs */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: "Quisque fringilla",
    price: 220,
    oldPrice: null,
    isNew: true,
    primaryImage: "images/product/01.jpg",
    secondaryImage: "images/product/02.jpg",
    rating: 0,
  },
  {
    id: 2,
    name: "Quisque fringilla",
    price: 220,
    oldPrice: null,
    isNew: false,
    primaryImage: "images/product/03.jpg",
    secondaryImage: "images/product/04.jpg",
    rating: 0,
  },
  {
    id: 3,
    name: "Quisque fringilla",
    price: 220,
    oldPrice: null,
    isNew: false,
    label: "Sale",
    primaryImage: "images/product/02.jpg",
    secondaryImage: "images/product/03.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "Quisque fringilla",
    price: 220,
    oldPrice: null,
    isNew: false,
    primaryImage: "images/product/04.jpg",
    secondaryImage: "images/product/03.jpg",
    rating: 0,
  },
  {
    id: 5,
    name: "Quisque fringilla",
    price: 220,
    oldPrice: 250,
    isNew: false,
    primaryImage: "images/product/05.jpg",
    secondaryImage: "images/product/06.jpg",
    rating: 4,
  },
];

const RelatedProducts = () => {
  return (
    <div className="new-arrival-area ptb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="heading-title heading-style pos-rltv mb-50 text-center">
              <h5 className="uppercase">Related Product</h5>
            </div>

            <div className="total-new-arrival new-arrival-slider-active carsoule-btn">
              {products.map((product) => (
                <div className="product-item" key={product.id}>
                  <div className="single-product">
                    <div className="product-img">
                      {/* Product Label */}
                      {product.isNew && (
                        <div className="product-label">
                          <div className="new">New</div>
                        </div>
                      )}
                      {product.label && (
                        <div className="product-label">
                          <div className="new">{product.label}</div>
                        </div>
                      )}

                      {/* Images */}
                      <div className="single-prodcut-img product-overlay pos-rltv">
                        <a href="single-product.html">
                          <img
                            src={product.primaryImage}
                            alt={product.name}
                            className="primary-image"
                          />
                          <img
                            src={product.secondaryImage}
                            alt={`${product.name} alternate`}
                            className="secondary-image"
                          />
                        </a>
                      </div>

                      {/* Product Icons */}
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

                    {/* Product Details */}
                    <div className="product-text">
                      <div className="prodcut-name">
                        <a href="single-product.html">{product.name}</a>
                      </div>

                      <div className="prodcut-ratting-price">
                        {product.rating > 0 && (
                          <div className="prodcut-ratting">
                            {[...Array(5)].map((_, i) => (
                              <a href="#" key={i}>
                                <i
                                  className={
                                    i < product.rating
                                      ? "fa fa-star"
                                      : "fa fa-star-o"
                                  }
                                ></i>
                              </a>
                            ))}
                          </div>
                        )}

                        <div className="prodcut-price">
                          <div className="new-price">${product.price}</div>
                          {product.oldPrice && (
                            <div className="old-price">
                              <del>${product.oldPrice}</del>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* end of map */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      {/* Footer Area */}
      <div className="footer-area ptb-50">
        <div className="container">
          <div className="row">
            {/* Contact Us */}
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="single-footer contact-us">
                <div className="footer-title uppercase">
                  <h5>Contact US</h5>
                </div>
                <ul>
                  <li>
                    <div className="contact-icon">
                      <i className="zmdi zmdi-pin-drop"></i>
                    </div>
                    <div className="contact-text">
                      <p>Address: Your address goes here</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="zmdi zmdi-email-open"></i>
                    </div>
                    <div className="contact-text">
                      <p>
                        <span>
                          <a href="mailto:demo@example.com">demo@example.com</a>
                        </span>
                        <span>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      <i className="zmdi zmdi-phone-paused"></i>
                    </div>
                    <div className="contact-text">
                      <p>
                        <a href="tel:01234567890">01234567890</a>
                        <a href="tel:01234567890">01234567890</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Information */}
            <div className="col-xl-2 col-lg-2 col-md-4">
              <div className="single-footer informaton-area">
                <div className="footer-title uppercase">
                  <h5>Information</h5>
                </div>
                <div className="informatoin">
                  <ul>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Order History</a>
                    </li>
                    <li>
                      <a href="#">Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Returns</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="col-xl-3 col-lg-4 d-md-none d-block d-lg-block">
              <div className="single-footer instagrm-area">
                <div className="footer-title uppercase">
                  <h5>Instagram</h5>
                </div>
                <div className="instagrm">
                  <ul>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <li key={num}>
                        <a href="#">
                          <img src={`images/gallery/0${num}.jpg`} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
              <div className="single-footer newslatter-area">
                <div className="footer-title uppercase">
                  <h5>Get Newsletters</h5>
                </div>
                <div className="newslatter">
                  <form action="#" method="post">
                    <div className="input-box pos-rltv">
                      <input placeholder="Type Your Email here" type="text" />
                      <a href="#">
                        <i className="zmdi zmdi-arrow-right"></i>
                      </a>
                    </div>
                  </form>

                  <div className="social-icon socile-icon-style-3 mt-40">
                    <div className="footer-title uppercase">
                      <h5>Social Network</h5>
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="zmdi zmdi-twitter"></i>
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

      {/* Footer Bottom */}
      <div className="footer-bottom global-table">
        <div className="global-row">
          <div className="global-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="copyrigth text-center">
                    © 2022 <span className="text-capitalize">clothing</span>.
                    Made with{" "}
                    <i style={{ color: "#f53400" }} className="fa fa-heart"></i>{" "}
                    by{" "}
                    <a
                      href="https://themeforest.net/user/codecarnival/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CodeCarnival
                    </a>
                  </p>
                </div>
                <div className="col-md-6">
                  <ul className="payment-support text-end">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li key={num}>
                        <a href="#">
                          <img src={`images/icons/pay${num}.png`} alt="" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
