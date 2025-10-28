import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.data);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const numericPrice = parseFloat(item.price);
      return sum + numericPrice * item.quantity;
    }, 0);

    setTotalAmount(total);
  }, [cart]);

  return (
    <div>
      <Header />
      <div class="breadcumb-area overlay pos-rltv">
        <div class="bread-main">
          <div class="bred-hading text-center">
            <h5>Cart Details</h5>
          </div>
          <ol class="breadcrumb">
            <li class="home">
              <a title="Go to Home Page" href="index.html">
                Home
              </a>
            </li>
            <li class="active">Cart</li>
          </ol>
        </div>
      </div>

      <div class="cart-checkout-area  pt-30">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="product-area">
                <div class="title-tab-product-category row">
                  <div class="col-lg-12 text-center pb-60">
                    <ul class="nav heading-style-3" role="tablist">
                      <li role="presentation">
                        <a
                          class="active shadow-box"
                          href="#cart"
                          aria-controls="cart"
                          role="tab"
                          data-bs-toggle="tab"
                        >
                          <span>01</span>
                          Shopping cart
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          class="shadow-box"
                          href="#checkout"
                          aria-controls="checkout"
                          role="tab"
                          data-bs-toggle="tab"
                        >
                          <span>02</span>Checkout
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          class="shadow-box"
                          href="#complete-order"
                          aria-controls="complete-order"
                          role="tab"
                          data-bs-toggle="tab"
                        >
                          <span>03</span>
                          complete-order
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="content-tab-product-category pb-70">
                  <div class="tab-content">
                    {/* Tab1-> products selected */}
                    <div
                      role="tabpanel"
                      class="tab-pane fade show active"
                      id="cart"
                    >
                      <div class="cart-page-area">
                        <form method="post" action="#">
                          <div class="table-responsive mb-20">
                            <table class="shop_table-2 cart table">
                              <thead>
                                <tr>
                                  <th class="product-thumbnail ">Image</th>
                                  <th class="product-name ">Product Name</th>
                                  <th class="product-price ">Unit Price</th>
                                  <th class="product-quantity">Quantity</th>
                                  <th class="product-subtotal ">Total</th>
                                  <th class="product-remove">Remove</th>
                                </tr>
                              </thead>
                              <tbody>
                                {cart.length !== 0 ? (
                                  cart.map((item, index) => (
                                    <tr key={index} className="cart_item">
                                      <td className="item-img">
                                        <a href="#">
                                          <img
                                            src={item.primaryImage}
                                            alt={item.name}
                                          />
                                        </a>
                                      </td>
                                      <td className="item-title">
                                        <a href="#">{item.name}</a>
                                      </td>
                                      <td className="item-price">
                                        ${item.price}
                                      </td>
                                      <td className="item-qty">
                                        <div className="cart-quantity">
                                          <div className="product-qty">
                                            <div className="cart-quantity">
                                              <div
                                                className="cart-plus-minus"
                                                style={{
                                                  display: "flex",
                                                  alignItems: "center",
                                                }}
                                              >
                                                <div className="dec qtybutton">
                                                  -
                                                </div>
                                                <span
                                                  style={{
                                                    minWidth: "30px",
                                                    fontWeight: "bold",
                                                  }}
                                                >
                                                  {item.quantity}
                                                </span>
                                                <div className="inc qtybutton">
                                                  +
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="total-price">
                                        <strong>
                                          ${item.price * item.quantity}
                                        </strong>
                                      </td>
                                      <td
                                        className="remove-item"
                                        onClick={() => {
                                          dispatch(removeItem(item));
                                        }}
                                      >
                                        <a href="#">
                                          <i className="fa fa-trash-o"></i>
                                        </a>
                                      </td>
                                    </tr>
                                  ))
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
                                      No items in the card
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>

                          <div class="cart-bottom-area">
                            <div class="row">
                              <div class="col-lg-8 col-md-7">
                                <div class="update-coupne-area">
                                  <div class="update-continue-btn text-end pb-20">
                                    <a href="#" class="btn-def btn2">
                                      Update Cart
                                    </a>
                                    <a href="#" class="btn-def btn2">
                                      Continue Shopping
                                    </a>
                                  </div>
                                  <div class="coupn-area">
                                    <div class="catagory-title cat-tit-5 mb-20">
                                      <h3>Coupon</h3>
                                      <p>
                                        Enter your coupon code if you have one.
                                      </p>
                                    </div>
                                    <div class="input-box input-box-2 mb-20">
                                      <input
                                        type="text"
                                        placeholder="Coupn"
                                        class="info"
                                        name="subject"
                                      />
                                    </div>
                                    <a href="#" class="btn-def btn2">
                                      Apply Coupn
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col-md-5">
                                <div class="cart-total-area">
                                  <div class="catagory-title cat-tit-5 mb-20 text-end">
                                    <h3>Cart Totals</h3>
                                  </div>
                                  <div class="sub-shipping">
                                    <p>
                                      Subtotal <span>${totalAmount}</span>
                                    </p>
                                    <p>
                                      Shipping <span>$3.00</span>
                                    </p>
                                  </div>
                                  <div class="shipping-method text-end">
                                    <div class="shipp">
                                      <input
                                        type="radio"
                                        name="ship"
                                        id="pay-toggle1"
                                      />
                                      <label for="pay-toggle1">Flat Rate</label>
                                    </div>
                                    <div class="shipp">
                                      <input
                                        type="radio"
                                        name="ship"
                                        id="pay-toggle3"
                                      />
                                      <label for="pay-toggle3">
                                        Direct Bank Transfer
                                      </label>
                                    </div>
                                    <p>
                                      <a href="#">Calculate Shipping</a>
                                    </p>
                                  </div>
                                  <div class="process-cart-total">
                                    <p>
                                      Total <span>${totalAmount + 3}</span>
                                    </p>
                                  </div>
                                  <div class="process-checkout-btn text-end">
                                    <a class="btn-def btn2" href="#">
                                      Process To Checkout
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Tab2-> checkout  */}
                    <div
                      role="tabpanel"
                      class="tab-pane  fade in "
                      id="checkout"
                    >
                      <div class="checkout-area">
                        <div class="">
                          <div class="row">
                            <div class="col-lg-12">
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
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Tab3 -> Complete Order */}
                    <div
                      role="tabpanel"
                      class="tab-pane  fade in"
                      id="complete-order"
                    >
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="checkout-payment-area">
                            <div class="checkout-total mt20">
                              <h3>Your order</h3>
                              <form action="#" method="post">
                                <div class="table-responsive">
                                  <table class="checkout-area table">
                                    <thead>
                                      <tr class="cart_item check-heading">
                                        <td class="ctg-type"> Product</td>
                                        <td class="cgt-des"> Total</td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr class="cart_item check-item prd-name">
                                        <td class="ctg-type">
                                          {" "}
                                          Aenean sagittis ×<span>1</span>
                                        </td>
                                        <td class="cgt-des"> $1,026.00</td>
                                      </tr>
                                      <tr class="cart_item check-item prd-name">
                                        <td class="ctg-type">
                                          {" "}
                                          Aenean sagittis ×<span>1</span>
                                        </td>
                                        <td class="cgt-des"> $1,026.00</td>
                                      </tr>
                                      <tr class="cart_item">
                                        <td class="ctg-type"> Subtotal</td>
                                        <td class="cgt-des">$2,052.00</td>
                                      </tr>
                                      <tr class="cart_item">
                                        <td class="ctg-type">Shipping</td>
                                        <td class="cgt-des ship-opt">
                                          <div class="shipp">
                                            <input
                                              type="radio"
                                              id="pay-toggle"
                                              name="ship"
                                            />
                                            <label for="pay-toggle">
                                              Flat Rate:
                                              <span>$03</span>
                                            </label>
                                          </div>
                                          <div class="shipp">
                                            <input
                                              type="radio"
                                              id="pay-toggle2"
                                              name="ship"
                                            />
                                            <label for="pay-toggle2">
                                              Free Shipping
                                            </label>
                                          </div>
                                        </td>
                                      </tr>
                                      <tr class="cart_item">
                                        <td class="ctg-type crt-total">
                                          {" "}
                                          Total
                                        </td>
                                        <td class="cgt-des prc-total">
                                          {" "}
                                          $ 2,055.00
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </form>
                            </div>
                            <div class="payment-section mt-20 clearfix">
                              <div class="pay-toggle">
                                <form action="#">
                                  <div class="pay-type-total">
                                    <div class="pay-type">
                                      <input
                                        type="radio"
                                        id="pay-toggle01"
                                        name="pay"
                                      />
                                      <label for="pay-toggle01">
                                        Direct Bank Transfer
                                      </label>
                                    </div>
                                    <div class="pay-type">
                                      <input
                                        type="radio"
                                        id="pay-toggle02"
                                        name="pay"
                                      />
                                      <label for="pay-toggle02">
                                        Cheque Payment
                                      </label>
                                    </div>
                                    <div class="pay-type">
                                      <input
                                        type="radio"
                                        id="pay-toggle03"
                                        name="pay"
                                      />
                                      <label for="pay-toggle03">
                                        Cash on Delivery
                                      </label>
                                    </div>
                                    <div class="pay-type">
                                      <input
                                        type="radio"
                                        id="pay-toggle04"
                                        name="pay"
                                      />
                                      <label for="pay-toggle04">Paypal</label>
                                    </div>
                                  </div>
                                  <div class="input-box mt-20">
                                    <a class="btn-def btn2" href="#">
                                      Place order
                                    </a>
                                  </div>
                                </form>
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
          </div>
        </div>
      </div>

      {/* footer */}

      <div class="footer-area ptb-50">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-4">
              <div class="single-footer contact-us">
                <div class="footer-title uppercase">
                  <h5>Contact US</h5>
                </div>
                <ul>
                  <li>
                    <div class="contact-icon">
                      {" "}
                      <i class="zmdi zmdi-pin-drop"></i>{" "}
                    </div>
                    <div class="contact-text">
                      <p>Address: Your address goes here</p>
                    </div>
                  </li>
                  <li>
                    <div class="contact-icon">
                      {" "}
                      <i class="zmdi zmdi-email-open"></i>{" "}
                    </div>
                    <div class="contact-text">
                      <p>
                        <span>
                          <a href="mailto://demo@example.com">
                            demo@example.com
                          </a>
                        </span>
                        <span>
                          <a href="mailto://info@example.com">
                            info@example.com
                          </a>
                        </span>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="contact-icon">
                      {" "}
                      <i class="zmdi zmdi-phone-paused"></i>{" "}
                    </div>
                    <div class="contact-text">
                      <p>
                        <a href="tel://01234567890">01234567890</a>{" "}
                        <a href="tel://01234567890">01234567890</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-4">
              <div class="single-footer informaton-area">
                <div class="footer-title uppercase">
                  <h5>Information</h5>
                </div>
                <div class="informatoin">
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
                      <a href="#">Returnes</a>
                    </li>
                    <li>
                      <a href="#">Private Policy</a>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 d-md-none d-block d-lg-block">
              <div class="single-footer instagrm-area">
                <div class="footer-title uppercase">
                  <h5>InstaGram</h5>
                </div>
                <div class="instagrm">
                  <ul>
                    <li>
                      <a href="#">
                        <img src="images/gallery/01.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/02.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/03.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/04.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/05.jpg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/gallery/06.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
              <div class="single-footer newslatter-area">
                <div class="footer-title uppercase">
                  <h5>Get Newsletters</h5>
                </div>
                <div class="newslatter">
                  <form action="#" method="post">
                    <div class="input-box pos-rltv">
                      <input placeholder="Type Your Email hear" type="text" />
                      <a href="#">
                        <i class="zmdi zmdi-arrow-right"></i>
                      </a>
                    </div>
                  </form>
                  <div class="social-icon socile-icon-style-3 mt-40">
                    <div class="footer-title uppercase">
                      <h5>Social Network</h5>
                    </div>
                    <ul>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="zmdi zmdi-twitter"></i>
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

      <div class="footer-bottom global-table">
        <div class="global-row">
          <div class="global-cell">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <p class="copyrigth text-center">
                    © 2022 <span class="text-capitalize">clothing</span>. Made
                    with{" "}
                    <i style={{ color: "#f53400" }} class="fa fa-heart"></i>
                    by
                    <a href="https://themeforest.net/user/codecarnival/portfolio">
                      CodeCarnival
                    </a>
                  </p>
                </div>
                <div class="col-md-6">
                  <ul class="payment-support text-end">
                    <li>
                      <a href="#">
                        <img src="images/icons/pay1.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icons/pay2.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icons/pay3.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icons/pay4.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/icons/pay5.png" alt="" />
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

export default Cart;
