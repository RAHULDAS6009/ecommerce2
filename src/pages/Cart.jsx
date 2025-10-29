import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";

const SHIPPING_FLAT = 3; // tweak if needed

const formatCurrency = (n) =>
  (isNaN(n) ? 0 : n).toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

const safeNumber = (val) => {
  if (typeof val === "number") return val;
  // strip any non-number except dot
  const cleaned = String(val ?? "").replace(/[^\d.]/g, "");
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
};

const Cart = () => {
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  // --- Tabs (cart | checkout | complete-order) managed in React ---
  const [activeTab, setActiveTab] = useState("cart");

  // --- Totals computed from cart ---
  const { subtotal, shipping, grandTotal } = useMemo(() => {
    const subtotalCalc = cart.reduce(
      (sum, item) => sum + safeNumber(item.price) * (item.quantity || 0),
      0
    );
    const shippingCalc = cart.length > 0 ? SHIPPING_FLAT : 0;
    return {
      subtotal: subtotalCalc,
      shipping: shippingCalc,
      grandTotal: subtotalCalc + shippingCalc,
    };
  }, [cart]);

  // Keep old totalAmount for any legacy places still reading it
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => setTotalAmount(subtotal), [subtotal]);

  // Go to next tab helpers
  const goToCheckout = (e) => {
    e?.preventDefault?.();
    setActiveTab("checkout");
  };
  const goToComplete = (e) => {
    e?.preventDefault?.();
    setActiveTab("complete-order");
  };

  return (
    <div>
      <Header />

      {/* BREADCRUMB */}
      <div className="breadcumb-area overlay pos-rltv">
        <div className="bread-main">
          <div className="bred-hading text-center">
            <h5>Cart Details</h5>
          </div>
          <ol className="breadcrumb">
            <li className="home">
              <a title="Go to Home Page" href="index.html">
                Home
              </a>
            </li>
            <li className="active">Cart</li>
          </ol>
        </div>
      </div>

      {/* CART / CHECKOUT / COMPLETE */}
      <div className="cart-checkout-area pt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-area">
                {/* Tabs header */}
                <div className="title-tab-product-category row">
                  <div className="col-lg-12 text-center pb-60">
                    <ul className="nav heading-style-3" role="tablist">
                      <li role="presentation">
                        <a
                          href="#cart"
                          role="tab"
                          className={`shadow-box ${activeTab === "cart" ? "active" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("cart");
                          }}
                        >
                          <span>01</span> Shopping cart
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#checkout"
                          role="tab"
                          className={`shadow-box ${activeTab === "checkout" ? "active" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("checkout");
                          }}
                        >
                          <span>02</span> Checkout
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          href="#complete-order"
                          role="tab"
                          className={`shadow-box ${
                            activeTab === "complete-order" ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveTab("complete-order");
                          }}
                        >
                          <span>03</span> Complete Order
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="clearfix"></div>

                <div className="content-tab-product-category pb-70">
                  <div className="tab-content">
                    {/* TAB 1: CART */}
                    <div
                      role="tabpanel"
                      id="cart"
                      className={`tab-pane fade ${activeTab === "cart" ? "show active" : ""}`}
                    >
                      <div className="cart-page-area">
                        <form method="post" action="#">
                          <div className="table-responsive mb-20">
                            <table className="shop_table-2 cart table">
                              <thead>
                                <tr>
                                  <th className="product-thumbnail ">Image</th>
                                  <th className="product-name ">Product Name</th>
                                  <th className="product-price ">Unit Price</th>
                                  <th className="product-quantity">Quantity</th>
                                  <th className="product-subtotal ">Total</th>
                                  <th className="product-remove">Remove</th>
                                </tr>
                              </thead>
                              <tbody>
                                {cart.length > 0 ? (
                                  cart.map((item, index) => {
                                    const price = safeNumber(item.price);
                                    const qty = item.quantity || 0;
                                    return (
                                      <tr key={item.id ?? index} className="cart_item">
                                        <td className="item-img">
                                          <a href="#">
                                            <img
                                              src={item.primaryImage}
                                              alt={item.name}
                                              style={{ maxWidth: 70, borderRadius: 6 }}
                                            />
                                          </a>
                                        </td>
                                        <td className="item-title">
                                          <a href="#">{item.name}</a>
                                        </td>
                                        <td className="item-price">
                                          {formatCurrency(price)}
                                        </td>
                                        <td className="item-qty">
                                          <div className="cart-quantity">
                                            <div className="product-qty">
                                              <div
                                                className="cart-plus-minus"
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                  gap: 12,
                                                }}
                                              >
                                                <button
                                                  type="button"
                                                  className="dec qtybutton"
                                                  style={{
                                                    cursor: "pointer",
                                                    userSelect: "none",
                                                    border: "1px solid #ddd",
                                                    width: 28,
                                                    height: 28,
                                                    lineHeight: "26px",
                                                    textAlign: "center",
                                                    borderRadius: 4,
                                                    background: "transparent",
                                                  }}
                                                  onClick={() =>
                                                    dispatch(
                                                      updateQuantity({
                                                        id: item.id,
                                                        quantity: Math.max(1, qty - 1),
                                                      })
                                                    )
                                                  }
                                                >
                                                  −
                                                </button>
                                                <span
                                                  style={{
                                                    minWidth: 30,
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                  }}
                                                >
                                                  {qty}
                                                </span>
                                                <button
                                                  type="button"
                                                  className="inc qtybutton"
                                                  style={{
                                                    cursor: "pointer",
                                                    userSelect: "none",
                                                    border: "1px solid #ddd",
                                                    width: 28,
                                                    height: 28,
                                                    lineHeight: "26px",
                                                    textAlign: "center",
                                                    borderRadius: 4,
                                                    background: "transparent",
                                                  }}
                                                  onClick={() =>
                                                    dispatch(
                                                      updateQuantity({
                                                        id: item.id,
                                                        quantity: qty + 1,
                                                      })
                                                    )
                                                  }
                                                >
                                                  +
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td className="total-price">
                                          <strong>
                                            {formatCurrency(price * qty)}
                                          </strong>
                                        </td>
                                        <td
                                          className="remove-item"
                                          onClick={() => dispatch(removeItem(item))}
                                        >
                                          <a href="#">
                                            <i className="fa fa-trash-o"></i>
                                          </a>
                                        </td>
                                      </tr>
                                    );
                                  })
                                ) : (
                                  <tr>
                                    <td
                                      colSpan="6"
                                      style={{
                                        textAlign: "center",
                                        color: "black",
                                        borderRadius: "6px",
                                        fontWeight: "bold",
                                        textTransform: "capitalize",
                                      }}
                                    >
                                      No items in the cart
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>

                          <div className="cart-bottom-area">
                            <div className="row">
                              <div className="col-lg-8 col-md-7">
                                <div className="update-coupne-area">
                                  <div className="update-continue-btn text-end pb-20">
                                    <a href="#" className="btn-def btn2">
                                      Update Cart
                                    </a>
                                    <a href="#" className="btn-def btn2">
                                      Continue Shopping
                                    </a>
                                  </div>
                                  <div className="coupn-area">
                                    <div className="catagory-title cat-tit-5 mb-20">
                                      <h3>Coupon</h3>
                                      <p>Enter your coupon code if you have one.</p>
                                    </div>
                                    <div className="input-box input-box-2 mb-20">
                                      <input
                                        type="text"
                                        placeholder="Coupon"
                                        className="info"
                                        name="subject"
                                      />
                                    </div>
                                    <a href="#" className="btn-def btn2">
                                      Apply Coupon
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-5">
                                <div className="cart-total-area">
                                  <div className="catagory-title cat-tit-5 mb-20 text-end">
                                    <h3>Cart Totals</h3>
                                  </div>
                                  <div className="sub-shipping">
                                    <p>
                                      Subtotal <span>{formatCurrency(subtotal)}</span>
                                    </p>
                                    <p>
                                      Shipping <span>{formatCurrency(shipping)}</span>
                                    </p>
                                  </div>
                                  <div className="shipping-method text-end">
                                    <div className="shipp">
                                      <input type="radio" name="ship" id="pay-toggle1" defaultChecked />
                                      <label htmlFor="pay-toggle1">Flat Rate</label>
                                    </div>
                                    <div className="shipp">
                                      <input type="radio" name="ship" id="pay-toggle3" />
                                      <label htmlFor="pay-toggle3">Direct Bank Transfer</label>
                                    </div>
                                    <p>
                                      <a href="#">Calculate Shipping</a>
                                    </p>
                                  </div>
                                  <div className="process-cart-total">
                                    <p>
                                      Total <span>{formatCurrency(grandTotal)}</span>
                                    </p>
                                  </div>
                                  <div className="process-checkout-btn text-end">
                                    <a className="btn-def btn2" href="#checkout" onClick={goToCheckout}>
                                      Proceed To Checkout
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* TAB 2: CHECKOUT (kept as your original form) */}
                    <div
                      role="tabpanel"
                      id="checkout"
                      className={`tab-pane fade ${activeTab === "checkout" ? "show active" : ""}`}
                    >
                      {/* ... your full checkout markup remains unchanged ... */}
                      {/* keep all your panels + forms here */}
                      <div className="checkout-area">
                        <div className="">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="coupne-customer-area mb50">
                              <div class="coupne-customer-area mb50">
                                <div
                                  class="panel-group"
                                  id="accordion"
                                  role="tablist"
                                  aria-multiselectable="true"
                                >
                                  <div class="panel panel-checkout">
                                    <div
                                      class="panel-heading"
                                      role="tab"
                                      id="headingTwo"
                                    >
                                      <h4 class="panel-title">
                                        <img
                                          src="images/icons/acc.jpg"
                                          alt=""
                                        />
                                        Returning customer?
                                        <a
                                          class="collapsed"
                                          role="button"
                                          data-bs-toggle="collapse"
                                          data-bs-parent="#accordion"
                                          href="#collapseTwo"
                                          aria-expanded="false"
                                          aria-controls="collapseTwo"
                                        >
                                          Click here to login
                                        </a>
                                      </h4>
                                    </div>
                                    <div
                                      id="collapseTwo"
                                      class="panel-collapse collapse"
                                      role="tabpanel"
                                      aria-labelledby="headingTwo"
                                    >
                                      <div class="panel-body">
                                        <div class="sm-des pb20">
                                          If you have shopped with us before,
                                          please enter your details in the boxes
                                          below. If you are a new customer
                                          please proceed to the Billing &
                                          Shipping section.
                                        </div>
                                        <div class="first-last-area">
                                          <div class="input-box mtb-20">
                                            <label>User Name Or Email</label>
                                            <input
                                              type="email"
                                              placeholder="Your Email"
                                              class="info"
                                              name="email"
                                            />
                                          </div>
                                          <div class="input-box mb-20">
                                            <label>Password</label>
                                            <input
                                              type="password"
                                              placeholder="Password"
                                              class="info"
                                              name="padd"
                                            />
                                          </div>
                                          <div class="frm-action cc-area">
                                            <div class="input-box tci-box">
                                              <a href="#" class="btn-def btn2">
                                                Login
                                              </a>
                                            </div>
                                            <span>
                                              <input
                                                type="checkbox"
                                                class="remr"
                                              />{" "}
                                              Remember me
                                            </span>
                                            <a class="forgotten forg" href="#">
                                              Forgotten Password
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="panel panel-checkout">
                                    <div
                                      class="panel-heading"
                                      role="tab"
                                      id="headingThree"
                                    >
                                      <h4 class="panel-title">
                                        <img
                                          src="images/icons/acc.jpg"
                                          alt=""
                                        />
                                        Have A Coupon?
                                        <a
                                          class="collapsed"
                                          role="button"
                                          data-bs-toggle="collapse"
                                          data-bs-parent="#accordion"
                                          href="#collapseThree"
                                          aria-expanded="false"
                                          aria-controls="collapseThree"
                                        >
                                          Click here to enter your code
                                        </a>
                                      </h4>
                                    </div>
                                    <div
                                      id="collapseThree"
                                      class="panel-collapse collapse"
                                      role="tabpanel"
                                      aria-labelledby="headingThree"
                                    >
                                      <div class="panel-body coupon-body">
                                        <div class="first-last-area">
                                          <div class="input-box mtb-20">
                                            <input
                                              type="text"
                                              placeholder="Coupon Code"
                                              class="info"
                                              name="code"
                                            />
                                          </div>
                                          <div class="frm-action">
                                            <div class="input-box tci-box">
                                              <a href="#" class="btn-def btn2">
                                                Apply Coupon
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-lg-6">
                                  <div class="billing-details">
                                    <div class="contact-text right-side">
                                      <h2>Billing Details</h2>
                                      <form action="#">
                                        <div class="row">
                                          <div class="col-lg-6 col-md-6">
                                            <div class="input-box mb-20">
                                              <label>
                                                First Name
                                                <em>*</em>
                                              </label>
                                              <input
                                                type="text"
                                                name="namm"
                                                class="info"
                                                placeholder="First Name"
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-6 col-md-6">
                                            <div class="input-box mb-20">
                                              <label>
                                                Last Name<em>*</em>
                                              </label>
                                              <input
                                                type="text"
                                                name="namm"
                                                class="info"
                                                placeholder="Last Name"
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-12">
                                            <div class="input-box mb-20">
                                              <label>Company Name</label>
                                              <input
                                                type="text"
                                                name="cpany"
                                                class="info"
                                                placeholder="Company Name"
                                              />
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <div class="input-box mb-20">
                                              <label>
                                                Email Address<em>*</em>
                                              </label>
                                              <input
                                                type="email"
                                                name="email"
                                                class="info"
                                                placeholder="Your Email"
                                              />
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <div class="input-box mb-20">
                                              <label>
                                                Phone Number<em>*</em>
                                              </label>
                                              <input
                                                type="text"
                                                name="phone"
                                                class="info"
                                                placeholder="Phone Number"
                                              />
                                            </div>
                                          </div>

                                          <div class="col-lg-12">
                                            <div class="input-box mb-20">
                                              <label>
                                                Country
                                                <em>*</em>
                                              </label>
                                              <select
                                                class="selectpicker select-custom"
                                                data-live-search="true"
                                              >
                                                <option data-tokens="Bangladesh">
                                                  Bangladesh
                                                </option>
                                                <option data-tokens="India">
                                                  India
                                                </option>
                                                <option data-tokens="Pakistan">
                                                  Pakistan
                                                </option>
                                                <option data-tokens="Pakistan">
                                                  Pakistan
                                                </option>
                                                <option data-tokens="Srilanka">
                                                  Srilanka
                                                </option>
                                                <option data-tokens="Nepal">
                                                  Nepal
                                                </option>
                                                <option data-tokens="Butan">
                                                  Butan
                                                </option>
                                                <option data-tokens="USA">
                                                  USA
                                                </option>
                                                <option data-tokens="England">
                                                  England
                                                </option>
                                                <option data-tokens="Brazil">
                                                  Brazil
                                                </option>
                                                <option data-tokens="Canada">
                                                  Canada
                                                </option>
                                                <option data-tokens="China">
                                                  China
                                                </option>
                                                <option data-tokens="Koeria">
                                                  Koeria
                                                </option>
                                                <option data-tokens="Soudi">
                                                  Soudi Arabia
                                                </option>
                                                <option data-tokens="Spain">
                                                  Spain
                                                </option>
                                                <option data-tokens="France">
                                                  France
                                                </option>
                                              </select>
                                            </div>
                                          </div>

                                          <div class="col-lg-12">
                                            <div class="input-box mb-20">
                                              <label>
                                                Address
                                                <em>*</em>
                                              </label>
                                              <input
                                                type="text"
                                                name="add1"
                                                class="info mb-10"
                                                placeholder="Street Address"
                                              />
                                              <input
                                                type="text"
                                                name="add2"
                                                class="info mt10"
                                                placeholder="Apartment, suite, unit etc. (optional)"
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-12">
                                            <div class="input-box mb-20">
                                              <label>
                                                Town/City
                                                <em>*</em>
                                              </label>
                                              <input
                                                type="text"
                                                name="add1"
                                                class="info"
                                                placeholder="Town/City"
                                              />
                                            </div>
                                          </div>

                                          <div class="col-md-6">
                                            <div class="input-box">
                                              <label>
                                                State/Divison
                                                <em>*</em>
                                              </label>
                                              <select
                                                class="selectpicker select-custom"
                                                data-live-search="true"
                                              >
                                                <option data-tokens="Barisal">
                                                  Barisal
                                                </option>
                                                <option data-tokens="Dhaka">
                                                  Dhaka
                                                </option>
                                                <option data-tokens="Kulna">
                                                  Kulna
                                                </option>
                                                <option data-tokens="Rajshahi">
                                                  Rajshahi
                                                </option>
                                                <option data-tokens="Sylet">
                                                  Sylet
                                                </option>
                                                <option data-tokens="Chittagong">
                                                  Chittagong
                                                </option>
                                                <option data-tokens="Rangpur">
                                                  Rangpur
                                                </option>
                                                <option data-tokens="Maymanshing">
                                                  Maymanshing
                                                </option>
                                                <option data-tokens="Cox">
                                                  Cox's Bazar
                                                </option>
                                                <option data-tokens="Saint">
                                                  Saint Martin
                                                </option>
                                                <option data-tokens="Kuakata">
                                                  Kuakata
                                                </option>
                                                <option data-tokens="Sajeq">
                                                  Sajeq
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                          <div class="col-md-6">
                                            <div class="input-box">
                                              <label>
                                                Post Code/Zip Code<em>*</em>
                                              </label>
                                              <input
                                                type="text"
                                                name="zipcode"
                                                class="info"
                                                placeholder="Zip Code"
                                              />
                                            </div>
                                          </div>
                                          <div class="col-lg-12">
                                            <div class="create-acc clearfix mtb-20">
                                              <div class="acc-toggle">
                                                <input
                                                  type="checkbox"
                                                  id="acc-toggle"
                                                />
                                                <label for="acc-toggle">
                                                  Create an Account ?
                                                </label>
                                              </div>
                                              <div class="create-acc-body">
                                                <div class="sm-des">
                                                  Create an account by entering
                                                  the information below. If you
                                                  are a returning customer
                                                  please login at the top of the
                                                  page.
                                                </div>
                                                <div class="input-box">
                                                  <label>
                                                    Account password
                                                    <em>*</em>
                                                  </label>
                                                  <input
                                                    type="password"
                                                    name="pass"
                                                    class="info"
                                                    placeholder="Password"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="billing-details">
                                    <div class="right-side">
                                      <div class="ship-acc clearfix">
                                        <div class="ship-toggle pb20">
                                          <input
                                            type="checkbox"
                                            id="ship-toggle"
                                          />
                                          <label for="ship-toggle">
                                            Ship to a different address?
                                          </label>
                                        </div>
                                        <div class="ship-acc-body">
                                          <form action="#">
                                            <div class="row">
                                              <div class="col-md-6">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    First Name
                                                    <em>*</em>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="namm"
                                                    class="info"
                                                    placeholder="First Name"
                                                  />
                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    Last Name<em>*</em>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="namm"
                                                    class="info"
                                                    placeholder="Last Name"
                                                  />
                                                </div>
                                              </div>
                                              <div class="col-lg-12">
                                                <div class="input-box mb-20">
                                                  <label>Company Name</label>
                                                  <input
                                                    type="text"
                                                    name="cpany"
                                                    class="info"
                                                    placeholder="Company Name"
                                                  />
                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    Email Address<em>*</em>
                                                  </label>
                                                  <input
                                                    type="email"
                                                    name="email"
                                                    class="info"
                                                    placeholder="Your Email"
                                                  />
                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    Phone Number<em>*</em>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="phone"
                                                    class="info"
                                                    placeholder="Phone Number"
                                                  />
                                                </div>
                                              </div>
                                              <div class="col-lg-12">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    Country
                                                    <em>*</em>
                                                  </label>
                                                  <select
                                                    class="selectpicker select-custom"
                                                    data-live-search="true"
                                                  >
                                                    <option data-tokens="Bangladesh">
                                                      Bangladesh
                                                    </option>
                                                    <option data-tokens="India">
                                                      India
                                                    </option>
                                                    <option data-tokens="Pakistan">
                                                      Pakistan
                                                    </option>
                                                    <option data-tokens="Pakistan">
                                                      Pakistan
                                                    </option>
                                                    <option data-tokens="Srilanka">
                                                      Srilanka
                                                    </option>
                                                    <option data-tokens="Nepal">
                                                      Nepal
                                                    </option>
                                                    <option data-tokens="Butan">
                                                      Butan
                                                    </option>
                                                    <option data-tokens="USA">
                                                      USA
                                                    </option>
                                                    <option data-tokens="England">
                                                      England
                                                    </option>
                                                    <option data-tokens="Brazil">
                                                      Brazil
                                                    </option>
                                                    <option data-tokens="Canada">
                                                      Canada
                                                    </option>
                                                    <option data-tokens="China">
                                                      China
                                                    </option>
                                                    <option data-tokens="Koeria">
                                                      Koeria
                                                    </option>
                                                    <option data-tokens="Soudi">
                                                      Soudi Arabia
                                                    </option>
                                                    <option data-tokens="Spain">
                                                      Spain
                                                    </option>
                                                    <option data-tokens="France">
                                                      France
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>
                                              <div class="col-lg-12">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    Address
                                                    <em>*</em>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="add1"
                                                    class="info mb-10"
                                                    placeholder="Street Address"
                                                  />
                                                  <input
                                                    type="text"
                                                    name="add2"
                                                    class="info mt10"
                                                    placeholder="Apartment, suite, unit etc. (optional)"
                                                  />
                                                </div>
                                              </div>
                                              <div class="col-lg-12">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    Town/City
                                                    <em>*</em>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="add1"
                                                    class="info"
                                                    placeholder="Town/City"
                                                  />
                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    State/Divison
                                                    <em>*</em>
                                                  </label>
                                                  <select
                                                    class="selectpicker select-custom"
                                                    data-live-search="true"
                                                  >
                                                    <option data-tokens="Barisal">
                                                      Barisal
                                                    </option>
                                                    <option data-tokens="Dhaka">
                                                      Dhaka
                                                    </option>
                                                    <option data-tokens="Kulna">
                                                      Kulna
                                                    </option>
                                                    <option data-tokens="Rajshahi">
                                                      Rajshahi
                                                    </option>
                                                    <option data-tokens="Sylet">
                                                      Sylet
                                                    </option>
                                                    <option data-tokens="Chittagong">
                                                      Chittagong
                                                    </option>
                                                    <option data-tokens="Rangpur">
                                                      Rangpur
                                                    </option>
                                                    <option data-tokens="Maymanshing">
                                                      Maymanshing
                                                    </option>
                                                    <option data-tokens="Cox">
                                                      Cox's Bazar
                                                    </option>
                                                    <option data-tokens="Saint">
                                                      Saint Martin
                                                    </option>
                                                    <option data-tokens="Kuakata">
                                                      Kuakata
                                                    </option>
                                                    <option data-tokens="Sajeq">
                                                      Sajeq
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>
                                              <div class="col-md-6">
                                                <div class="input-box mb-20">
                                                  <label>
                                                    Post Code/Zip Code<em>*</em>
                                                  </label>
                                                  <input
                                                    type="text"
                                                    name="zipcode"
                                                    class="info"
                                                    placeholder="Zip Code"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                      <div class="form">
                                        <div class="input-box">
                                          <label>Order Notes</label>
                                          <textarea
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                            class="area-tex"
                                          ></textarea>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                              <div className="text-end mt-3">
                                <a className="btn-def btn2" href="#complete-order" onClick={goToComplete}>
                                  Review & Complete Order
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* END checkout */}
                    </div>

                    {/* TAB 3: COMPLETE ORDER — now fully dynamic */}
                    <div
                      role="tabpanel"
                      id="complete-order"
                      className={`tab-pane fade ${activeTab === "complete-order" ? "show active" : ""}`}
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="checkout-payment-area">
                            <div className="checkout-total mt20">
                              <h3>Your order</h3>
                              <form action="#" method="post">
                                <div className="table-responsive">
                                  <table className="checkout-area table">
                                    <thead>
                                      <tr className="cart_item check-heading">
                                        <td className="ctg-type">Product</td>
                                        <td className="cgt-des">Total</td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {cart.length === 0 ? (
                                        <tr className="cart_item">
                                          <td className="ctg-type" colSpan={2}>
                                            Your cart is empty.
                                          </td>
                                        </tr>
                                      ) : (
                                        <>
                                          {/* Line items */}
                                          {cart.map((item, idx) => {
                                            const price = safeNumber(item.price);
                                            const qty = item.quantity || 0;
                                            const lineTotal = price * qty;
                                            return (
                                              <tr
                                                key={item.id ?? idx}
                                                className="cart_item check-item prd-name"
                                              >
                                                <td className="ctg-type">
                                                  {item.name} × <span>{qty}</span>
                                                </td>
                                                <td className="cgt-des">
                                                  {formatCurrency(lineTotal)}
                                                </td>
                                              </tr>
                                            );
                                          })}

                                          {/* Subtotal */}
                                          <tr className="cart_item">
                                            <td className="ctg-type">Subtotal</td>
                                            <td className="cgt-des">
                                              {formatCurrency(subtotal)}
                                            </td>
                                          </tr>

                                          {/* Shipping */}
                                          <tr className="cart_item">
                                            <td className="ctg-type">Shipping</td>
                                            <td className="cgt-des ship-opt">
                                              <div className="shipp">
                                                <input
                                                  type="radio"
                                                  id="pay-toggle"
                                                  name="ship"
                                                  defaultChecked
                                                />
                                                <label htmlFor="pay-toggle">
                                                  Flat Rate: <span>{formatCurrency(SHIPPING_FLAT)}</span>
                                                </label>
                                              </div>
                                              <div className="shipp">
                                                <input type="radio" id="pay-toggle2" name="ship" disabled />
                                                <label htmlFor="pay-toggle2">Free Shipping</label>
                                              </div>
                                            </td>
                                          </tr>

                                          {/* Grand total */}
                                          <tr className="cart_item">
                                            <td className="ctg-type crt-total">Total</td>
                                            <td className="cgt-des prc-total">
                                              {formatCurrency(grandTotal)}
                                            </td>
                                          </tr>
                                        </>
                                      )}
                                    </tbody>
                                  </table>
                                </div>
                              </form>
                            </div>

                            {/* Payment section */}
                            <div className="payment-section mt-20 clearfix">
                              <div className="pay-toggle">
                                <form action="#">
                                  <div className="pay-type-total">
                                    <div className="pay-type">
                                      <input type="radio" id="pay-toggle01" name="pay" defaultChecked />
                                      <label htmlFor="pay-toggle01">Direct Bank Transfer</label>
                                    </div>
                                    <div className="pay-type">
                                      <input type="radio" id="pay-toggle02" name="pay" />
                                      <label htmlFor="pay-toggle02">Cheque Payment</label>
                                    </div>
                                    <div className="pay-type">
                                      <input type="radio" id="pay-toggle03" name="pay" />
                                      <label htmlFor="pay-toggle03">Cash on Delivery</label>
                                    </div>
                                    <div className="pay-type">
                                      <input type="radio" id="pay-toggle04" name="pay" />
                                      <label htmlFor="pay-toggle04">Paypal</label>
                                    </div>
                                  </div>
                                  <div className="input-box mt-20">
                                    <a className="btn-def btn2" href="#">
                                      Place order
                                    </a>
                                  </div>
                                </form>
                              </div>
                            </div>
                            {/* /payment */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /tab 3 */}
                  </div>
                </div>
                {/* /content tabs */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER (left as-is from your code) */}
      <div className="footer-area ptb-50">
        <div className="container">
          <div className="row">
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
                          <a href="mailto://demo@example.com">demo@example.com</a>
                        </span>
                        <span>
                          <a href="mailto://info@example.com">info@example.com</a>
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
                        <a href="tel://01234567890">01234567890</a>{" "}
                        <a href="tel://01234567890">01234567890</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4">
              <div className="single-footer informaton-area">
                <div className="footer-title uppercase">
                  <h5>Information</h5>
                </div>
                <div className="informatoin">
                  <ul>
                    <li><a href="#">My Account</a></li>
                    <li><a href="#">Order History</a></li>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Returnes</a></li>
                    <li><a href="#">Private Policy</a></li>
                    <li><a href="#">Site Map</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 d-md-none d-block d-lg-block">
              <div className="single-footer instagrm-area">
                <div className="footer-title uppercase">
                  <h5>InstaGram</h5>
                </div>
                <div className="instagrm">
                  <ul>
                    <li><a href="#"><img src="images/gallery/01.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/gallery/02.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/gallery/03.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/gallery/04.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/gallery/05.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="images/gallery/06.jpg" alt="" /></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
              <div className="single-footer newslatter-area">
                <div className="footer-title uppercase">
                  <h5>Get Newsletters</h5>
                </div>
                <div className="newslatter">
                  <form action="#" method="post">
                    <div className="input-box pos-rltv">
                      <input placeholder="Type Your Email hear" type="text" />
                      <a href="#"><i className="zmdi zmdi-arrow-right"></i></a>
                    </div>
                  </form>
                  <div className="social-icon socile-icon-style-3 mt-40">
                    <div className="footer-title uppercase">
                      <h5>Social Network</h5>
                    </div>
                    <ul>
                      <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                      <li><a href="#"><i className="zmdi zmdi-linkedin"></i></a></li>
                      <li><a href="#"><i className="zmdi zmdi-pinterest"></i></a></li>
                      <li><a href="#"><i className="zmdi zmdi-google"></i></a></li>
                      <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>{/* row */}
        </div>
      </div>

      <div className="footer-bottom global-table">
        <div className="global-row">
          <div className="global-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="copyrigth text-center">
                    © 2022 <span className="text-capitalize">clothing</span>. Made with{" "}
                    <i style={{ color: "#f53400" }} className="fa fa-heart"></i> by{" "}
                    <a href="https://themeforest.net/user/codecarnival/portfolio">CodeCarnival</a>
                  </p>
                </div>
                <div className="col-md-6">
                  <ul className="payment-support text-end">
                    <li><a href="#"><img src="images/icons/pay1.png" alt="" /></a></li>
                    <li><a href="#"><img src="images/icons/pay2.png" alt="" /></a></li>
                    <li><a href="#"><img src="images/icons/pay3.png" alt="" /></a></li>
                    <li><a href="#"><img src="images/icons/pay4.png" alt="" /></a></li>
                    <li><a href="#"><img src="images/icons/pay5.png" alt="" /></a></li>
                  </ul>
                </div>
              </div>{/* row */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
