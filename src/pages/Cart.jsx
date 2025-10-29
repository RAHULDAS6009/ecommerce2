import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/cartSlice";
import { updateQuantity } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.data);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("check");

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      const numericPrice = parseFloat(item.price);
      return sum + numericPrice * item.quantity;
    }, 0);

    setTotalAmount(total);
  }, [cart]);

  function renderTab() {
    switch (activeTab) {
      case "sc":
        return (
          <div role="tabpanel" className="tab-pane fade show active" id="cart">
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
                      {cart.length !== 0 ? (
                        cart.map((item, index) => (
                          <tr key={index} className="cart_item">
                            <td className="item-img">
                              <a href="#">
                                <img src={item.primaryImage} alt={item.name} />
                              </a>
                            </td>
                            <td className="item-title">
                              <a href="#">{item.name}</a>
                            </td>
                            <td className="item-price">${item.price}</td>
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
                                      <div
                                        className="dec qtybutton"
                                        style={{
                                          cursor: "pointer",
                                          userSelect: "none",
                                        }}
                                        onClick={() =>
                                          dispatch(
                                            updateQuantity({
                                              id: item.id,
                                              quantity: item.quantity - 1,
                                            })
                                          )
                                        }
                                      >
                                        -
                                      </div>

                                      <span
                                        style={{
                                          minWidth: "30px",
                                          fontWeight: "bold",
                                          textAlign: "center",
                                        }}
                                      >
                                        {item.quantity}
                                      </span>

                                      <div
                                        className="inc qtybutton"
                                        style={{
                                          cursor: "pointer",
                                          userSelect: "none",
                                        }}
                                        onClick={() =>
                                          dispatch(
                                            updateQuantity({
                                              id: item.id,
                                              quantity: item.quantity + 1,
                                            })
                                          )
                                        }
                                      >
                                        +
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="total-price">
                              <strong>${item.price * item.quantity}</strong>
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
                              placeholder="Coupn"
                              className="info"
                              name="subject"
                            />
                          </div>
                          <a href="#" className="btn-def btn2">
                            Apply Coupn
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
                            Subtotal <span>${totalAmount}</span>
                          </p>
                          <p>
                            Shipping <span>$3.00</span>
                          </p>
                        </div>
                        <div className="shipping-method text-end">
                          <div className="shipp">
                            <input type="radio" name="ship" id="pay-toggle1" />
                            <label for="pay-toggle1">Flat Rate</label>
                          </div>
                          <div className="shipp">
                            <input type="radio" name="ship" id="pay-toggle3" />
                            <label for="pay-toggle3">
                              Direct Bank Transfer
                            </label>
                          </div>
                          <p>
                            <a href="#">Calculate Shipping</a>
                          </p>
                        </div>
                        <div className="process-cart-total">
                          <p>
                            Total <span>${totalAmount + 3}</span>
                          </p>
                        </div>
                        <div className="process-checkout-btn text-end">
                          <a className="btn-def btn2" href="#">
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
        );

      case "check":
        return (
          <div className="tab-pane  fade in " id="checkout">
            <div className="checkout-area">
              <div className="">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="coupne-customer-area mb50">
                      <div
                        className="panel-group"
                        id="accordion"
                        aria-multiselectable="true"
                      >
                        <div className="panel panel-checkout">
                          <div className="panel-heading" id="headingTwo">
                            <h4 className="panel-title">
                              <img src="images/icons/acc.jpg" alt="" />
                              Returning customer?
                              <a
                                className="collapsed"
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
                            className="panel-collapse collapse"
                            aria-labelledby="headingTwo"
                          >
                            <div className="panel-body">
                              <div className="sm-des pb20">
                                If you have shopped with us before, please enter
                                your details in the boxes below. If you are a
                                new customer please proceed to the Billing &amp;
                                Shipping section.
                              </div>
                              <div className="first-last-area">
                                <div className="input-box mtb-20">
                                  <label>User Name Or Email</label>
                                  <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="info"
                                    name="email"
                                  />
                                </div>
                                <div className="input-box mb-20">
                                  <label>Password</label>
                                  <input
                                    type="password"
                                    placeholder="Password"
                                    className="info"
                                    name="padd"
                                  />
                                </div>
                                <div className="frm-action cc-area">
                                  <div className="input-box tci-box">
                                    <a href="#" className="btn-def btn2">
                                      Login
                                    </a>
                                  </div>
                                  <span>
                                    <input type="checkbox" className="remr" />
                                    {"{"}" "{"}"}
                                    Remember me
                                  </span>
                                  <a className="forgotten forg" href="#">
                                    Forgotten Password
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-checkout">
                          <div className="panel-heading" id="headingThree">
                            <h4 className="panel-title">
                              <img src="images/icons/acc.jpg" alt="" />
                              Have A Coupon?
                              <a
                                className="collapsed"
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
                            className="panel-collapse collapse"
                            aria-labelledby="headingThree"
                          >
                            <div className="panel-body coupon-body">
                              <div className="first-last-area">
                                <div className="input-box mtb-20">
                                  <input
                                    type="text"
                                    placeholder="Coupon Code"
                                    className="info"
                                    name="code"
                                  />
                                </div>
                                <div className="frm-action">
                                  <div className="input-box tci-box">
                                    <a href="#" className="btn-def btn2">
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
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="billing-details">
                          <div className="contact-text right-side">
                            <h2>Billing Details</h2>
                            <form action="#">
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="input-box mb-20">
                                    <label>
                                      First Name
                                      <em>*</em>
                                    </label>
                                    <input
                                      type="text"
                                      name="namm"
                                      className="info"
                                      placeholder="First Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="input-box mb-20">
                                    <label>
                                      Last Name<em>*</em>
                                    </label>
                                    <input
                                      type="text"
                                      name="namm"
                                      className="info"
                                      placeholder="Last Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-box mb-20">
                                    <label>Company Name</label>
                                    <input
                                      type="text"
                                      name="cpany"
                                      className="info"
                                      placeholder="Company Name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-box mb-20">
                                    <label>
                                      Email Address<em>*</em>
                                    </label>
                                    <input
                                      type="email"
                                      name="email"
                                      className="info"
                                      placeholder="Your Email"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-box mb-20">
                                    <label>
                                      Phone Number<em>*</em>
                                    </label>
                                    <input
                                      type="text"
                                      name="phone"
                                      className="info"
                                      placeholder="Phone Number"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-box mb-20">
                                    <label>
                                      Country
                                      <em>*</em>
                                    </label>
                                    <select className="selectpicker select-custom">
                                      <option data-tokens="Bangladesh">
                                        Bangladesh
                                      </option>
                                      <option data-tokens="India">India</option>
                                      <option data-tokens="Pakistan">
                                        Pakistan
                                      </option>
                                      <option data-tokens="Pakistan">
                                        Pakistan
                                      </option>
                                      <option data-tokens="Srilanka">
                                        Srilanka
                                      </option>
                                      <option data-tokens="Nepal">Nepal</option>
                                      <option data-tokens="Butan">Butan</option>
                                      <option data-tokens="USA">USA</option>
                                      <option data-tokens="England">
                                        England
                                      </option>
                                      <option data-tokens="Brazil">
                                        Brazil
                                      </option>
                                      <option data-tokens="Canada">
                                        Canada
                                      </option>
                                      <option data-tokens="China">China</option>
                                      <option data-tokens="Koeria">
                                        Koeria
                                      </option>
                                      <option data-tokens="Soudi">
                                        Soudi Arabia
                                      </option>
                                      <option data-tokens="Spain">Spain</option>
                                      <option data-tokens="France">
                                        France
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-box mb-20">
                                    <label>
                                      Address
                                      <em>*</em>
                                    </label>
                                    <input
                                      type="text"
                                      name="add1"
                                      className="info mb-10"
                                      placeholder="Street Address"
                                    />
                                    <input
                                      type="text"
                                      name="add2"
                                      className="info mt10"
                                      placeholder="Apartment, suite, unit etc. (optional)"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-box mb-20">
                                    <label>
                                      Town/City
                                      <em>*</em>
                                    </label>
                                    <input
                                      type="text"
                                      name="add1"
                                      className="info"
                                      placeholder="Town/City"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-box">
                                    <label>
                                      State/Divison
                                      <em>*</em>
                                    </label>
                                    <select
                                      className="selectpicker select-custom"
                                      data-live-search="true"
                                    >
                                      <option data-tokens="Barisal">
                                        Barisal
                                      </option>
                                      <option data-tokens="Dhaka">Dhaka</option>
                                      <option data-tokens="Kulna">Kulna</option>
                                      <option data-tokens="Rajshahi">
                                        Rajshahi
                                      </option>
                                      <option data-tokens="Sylet">Sylet</option>
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
                                      <option data-tokens="Sajeq">Sajeq</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-box">
                                    <label>
                                      Post Code/Zip Code<em>*</em>
                                    </label>
                                    <input
                                      type="text"
                                      name="zipcode"
                                      className="info"
                                      placeholder="Zip Code"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="create-acc clearfix mtb-20">
                                    <div className="acc-toggle">
                                      <input type="checkbox" id="acc-toggle" />
                                      <label>Create an Account ?</label>
                                    </div>
                                    <div className="create-acc-body">
                                      <div className="sm-des">
                                        Create an account by entering the
                                        information below. If you are a
                                        returning customer please login at the
                                        top of the page.
                                      </div>
                                      <div className="input-box">
                                        <label>
                                          Account password
                                          <em>*</em>
                                        </label>
                                        <input
                                          type="password"
                                          name="pass"
                                          className="info"
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
                      <div className="col-lg-6">
                        <div className="billing-details">
                          <div className="right-side">
                            <div className="ship-acc clearfix">
                              <div className="ship-toggle pb20">
                                <input type="checkbox" id="ship-toggle" />
                                <label htmlFor="ship-toggle">
                                  Ship to a different address?
                                </label>
                              </div>
                              <div className="ship-acc-body">
                                <form action="#">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="input-box mb-20">
                                        <label>
                                          First Name
                                          <em>*</em>
                                        </label>
                                        <input
                                          type="text"
                                          name="namm"
                                          className="info"
                                          placeholder="First Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="input-box mb-20">
                                        <label>
                                          Last Name<em>*</em>
                                        </label>
                                        <input
                                          type="text"
                                          name="namm"
                                          className="info"
                                          placeholder="Last Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="input-box mb-20">
                                        <label>Company Name</label>
                                        <input
                                          type="text"
                                          name="cpany"
                                          className="info"
                                          placeholder="Company Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="input-box mb-20">
                                        <label>
                                          Email Address<em>*</em>
                                        </label>
                                        <input
                                          type="email"
                                          name="email"
                                          className="info"
                                          placeholder="Your Email"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="input-box mb-20">
                                        <label>
                                          Phone Number<em>*</em>
                                        </label>
                                        <input
                                          type="text"
                                          name="phone"
                                          className="info"
                                          placeholder="Phone Number"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="input-box mb-20">
                                        <label>
                                          Country
                                          <em>*</em>
                                        </label>
                                        <select className="selectpicker select-custom">
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
                                          <option data-tokens="USA">USA</option>
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
                                    <div className="col-lg-12">
                                      <div className="input-box mb-20">
                                        <label>
                                          Address
                                          <em>*</em>
                                        </label>
                                        <input
                                          type="text"
                                          name="add1"
                                          className="info mb-10"
                                          placeholder="Street Address"
                                        />
                                        <input
                                          type="text"
                                          name="add2"
                                          className="info mt10"
                                          placeholder="Apartment, suite, unit etc. (optional)"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-12">
                                      <div className="input-box mb-20">
                                        <label>
                                          Town/City
                                          <em>*</em>
                                        </label>
                                        <input
                                          type="text"
                                          name="add1"
                                          className="info"
                                          placeholder="Town/City"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="input-box mb-20">
                                        <label>
                                          State/Divison
                                          <em>*</em>
                                        </label>
                                        <select
                                          className="selectpicker select-custom"
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
                                    <div className="col-md-6">
                                      <div className="input-box mb-20">
                                        <label>
                                          Post Code/Zip Code
                                          <em>*</em>
                                        </label>
                                        <input
                                          type="text"
                                          name="zipcode"
                                          className="info"
                                          placeholder="Zip Code"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div className="form">
                              <div className="input-box">
                                <label>Order Notes</label>
                                <textarea
                                  placeholder="Notes about your order, e.g. special notes for delivery."
                                  className="area-tex"
                                  defaultValue={""}
                                />
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
        );

      case "co":
        return (
          <div
            role="tabpanel"
            className="tab-pane  fade in"
            id="complete-order"
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
                              <td className="ctg-type"> Product</td>
                              <td className="cgt-des"> Total</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="cart_item check-item prd-name">
                              <td className="ctg-type">
                                {" "}
                                Aenean sagittis ×<span>1</span>
                              </td>
                              <td className="cgt-des"> $1,026.00</td>
                            </tr>
                            <tr className="cart_item check-item prd-name">
                              <td className="ctg-type">
                                {" "}
                                Aenean sagittis ×<span>1</span>
                              </td>
                              <td className="cgt-des"> $1,026.00</td>
                            </tr>
                            <tr className="cart_item">
                              <td className="ctg-type"> Subtotal</td>
                              <td className="cgt-des">$2,052.00</td>
                            </tr>
                            <tr className="cart_item">
                              <td className="ctg-type">Shipping</td>
                              <td className="cgt-des ship-opt">
                                <div className="shipp">
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
                                <div className="shipp">
                                  <input
                                    type="radio"
                                    id="pay-toggle2"
                                    name="ship"
                                  />
                                  <label for="pay-toggle2">Free Shipping</label>
                                </div>
                              </td>
                            </tr>
                            <tr className="cart_item">
                              <td className="ctg-type crt-total"> Total</td>
                              <td className="cgt-des prc-total"> $ 2,055.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </form>
                  </div>
                  <div className="payment-section mt-20 clearfix">
                    <div className="pay-toggle">
                      <form action="#">
                        <div className="pay-type-total">
                          <div className="pay-type">
                            <input type="radio" id="pay-toggle01" name="pay" />
                            <label for="pay-toggle01">
                              Direct Bank Transfer
                            </label>
                          </div>
                          <div className="pay-type">
                            <input type="radio" id="pay-toggle02" name="pay" />
                            <label for="pay-toggle02">Cheque Payment</label>
                          </div>
                          <div className="pay-type">
                            <input type="radio" id="pay-toggle03" name="pay" />
                            <label for="pay-toggle03">Cash on Delivery</label>
                          </div>
                          <div className="pay-type">
                            <input type="radio" id="pay-toggle04" name="pay" />
                            <label for="pay-toggle04">Paypal</label>
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
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>norhing</div>;
    }
  }

  return (
    <div>
      <Header />
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

      <div className="cart-checkout-area  pt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-area">
                <div className="title-tab-product-category row">
                  <div className="col-lg-12 text-center pb-60">
                    <ul className="nav heading-style-3" role="tablist">
                      <li
                        role="presentation"
                        onClick={() => setActiveTab("sc")}
                      >
                        <a
                          className="active shadow-box"
                          aria-controls="cart"
                          role="tab"
                          data-bs-toggle="tab"
                        >
                          <span>01</span>
                          Shopping cart
                        </a>
                      </li>
                      <li
                        role="presentation"
                        onClick={() => setActiveTab("check")}
                      >
                        <a
                          className="shadow-box"
                          aria-controls="checkout"
                          role="tab"
                          data-bs-toggle="tab"
                        >
                          <span>02</span>Checkout
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          onClick={() => setActiveTab("co")}
                          className="shadow-box"
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
                <div className="clearfix"></div>
                <div className="content-tab-product-category pb-70">
                  <div className="tab-content">
                    {/* Tab1-> products selected */}
                    {activeTab}
                    {renderTab()}

                    {/* Tab2-> checkout  */}

                    {/* Tab3 -> Complete Order */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}

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
                      {" "}
                      <i className="zmdi zmdi-pin-drop"></i>{" "}
                    </div>
                    <div className="contact-text">
                      <p>Address: Your address goes here</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon">
                      {" "}
                      <i className="zmdi zmdi-email-open"></i>{" "}
                    </div>
                    <div className="contact-text">
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
                    <div className="contact-icon">
                      {" "}
                      <i className="zmdi zmdi-phone-paused"></i>{" "}
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
            <div className="col-xl-3 col-lg-4 d-md-none d-block d-lg-block">
              <div className="single-footer instagrm-area">
                <div className="footer-title uppercase">
                  <h5>InstaGram</h5>
                </div>
                <div className="instagrm">
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
            <div className="col-xl-3 col-lg-3 col-md-4 offset-xl-1">
              <div className="single-footer newslatter-area">
                <div className="footer-title uppercase">
                  <h5>Get Newsletters</h5>
                </div>
                <div className="newslatter">
                  <form action="#" method="post">
                    <div className="input-box pos-rltv">
                      <input placeholder="Type Your Email hear" type="text" />
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
      <div className="footer-bottom global-table">
        <div className="global-row">
          <div className="global-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p className="copyrigth text-center">
                    © 2022 <span className="text-capitalize">clothing</span>.
                    Made with{" "}
                    <i style={{ color: "#f53400" }} className="fa fa-heart"></i>
                    by
                    <a href="https://themeforest.net/user/codecarnival/portfolio">
                      CodeCarnival
                    </a>
                  </p>
                </div>
                <div className="col-md-6">
                  <ul className="payment-support text-end">
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
