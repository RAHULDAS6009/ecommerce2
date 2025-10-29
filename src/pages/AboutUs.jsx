import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

/**
 * AboutUs – Clothing brand version
 * - Keeps your original class names so existing CSS applies
 * - Uses <Link> for breadcrumbs
 * - Content updated for an apparel/cloth­ing website
 * - Team & Skills are data-driven for easy edits
 */
const AboutUs = () => {
  const skills = [
    { label: "Design & Pattern Making", pct: 92, barClass: "pr-green" },
    { label: "Cutting & Stitching", pct: 88, barClass: "pr-blue" },
    { label: "Quality Control", pct: 96, barClass: "pr-violate" },
    { label: "Sustainable Sourcing", pct: 85, barClass: "pr-ornage" },
  ];

  const team = [
    {
      name: "Aanya Kapoor",
      role: "Creative Director",
      img: "/images/team/01.jpg",
    },
    {
      name: "Rohan Mehta",
      role: "Production Lead",
      img: "/images/team/02.jpg",
    },
    {
      name: "Sara Thomas",
      role: "Brand & Styling",
      img: "/images/team/03.jpg",
    },
    {
      name: "Arjun Rao",
      role: "E-commerce Head",
      img: "/images/team/04.jpg",
    },
    {
      name: "Nikita Verma",
      role: "Fabric Specialist",
      img: "/images/team/03.jpg",
    },
  ];

  return (
    <>
    <Header />
      {/* breadcumb area start */}
      <div className="breadcumb-area breadcumb-3 overlay pos-rltv">
        <div className="bread-main">
          <div className="bred-hading text-center">
            <h5>About Details</h5>
          </div>
          <ol className="breadcrumb">
            <li className="home">
              <Link title="Go to Home Page" to="/">
                Home
              </Link>
            </li>
            <li className="active">About Us</li>
          </ol>
        </div>
      </div>
      {/* breadcumb area end */}

      {/* about-us-area start */}
      <div className="about-us-area ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="heading-title heading-style pos-rltv mb-50 text-center">
                <h5 className="uppercase">About Us</h5>
              </div>
            </div>

            <div className="about-us-wrap row">
              <div className="col-lg-6">
                <div className="about-img">
                  {/* replace with your brand image */}
                  <img src="/images/blog/about.jpg" alt="Our story" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-des">
                  <p>
                    We’re a modern Indian clothing brand crafting everyday
                    essentials and statement pieces—thoughtfully designed,
                    responsibly made. From breathable cotton basics to premium
                    occasion wear, every silhouette is tailored for comfort,
                    longevity, and effortless style.
                  </p>
                  <p>
                    Our fabrics are curated from trusted mills, our fits are
                    tested on real bodies, and our drops are produced in small,
                    quality-first batches to minimize waste. When you wear us,
                    you wear better—season after season.
                  </p>
                  <Link to="/shop" className="btn-def small" tabIndex={0}>
                    Shop the Collection
                  </Link>
                </div>
              </div>
            </div>
            {/* /about-us-wrap */}
          </div>
        </div>
      </div>
      {/* about-us-area end */}

      {/* choose-us area start */}
      <div className="choose-us-area pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="heading-title heading-style pos-rltv mb-50 text-center">
                <h5 className="uppercase">Why choose us</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-choose text-center">
                <div className="choose-icon pos-rltv">
                  <i className="zmdi zmdi-shopping-cart-plus"></i>
                </div>
                <div className="choose-title">
                  <h5>Curated Quality</h5>
                </div>
                <div className="choose-des">
                  <p>
                    Limited drops with premium stitching, better fits, and
                    fabrics that hold shape wash after wash.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-choose text-center">
                <div className="choose-icon pos-rltv">
                  <i className="zmdi zmdi-headset-mic"></i>
                </div>
                <div className="choose-title">
                  <h5>24/7 Support</h5>
                </div>
                <div className="choose-des">
                  <p>
                    Need sizing help or order updates? Our team is here round
                    the clock on chat, mail, and WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="single-choose text-center">
                <div className="choose-icon pos-rltv">
                  <i className="zmdi zmdi-format-strikethrough-s"></i>
                </div>
                <div className="choose-title">
                  <h5>Secure Checkout</h5>
                </div>
                <div className="choose-des">
                  <p>
                    Encrypted payments, cash on delivery, and no-surprise fees.
                    Easy returns if it’s not love.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 d-md-none d-block d-lg-block">
              <div className="single-choose text-center">
                <div className="choose-icon pos-rltv">
                  <i className="zmdi zmdi-trending-up"></i>
                </div>
                <div className="choose-title">
                  <h5>Sustainable Picks</h5>
                </div>
                <div className="choose-des">
                  <p>
                    We prioritize natural fibers, responsible dyeing, and
                    minimal packaging to reduce our footprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
      </div>
      {/* choose-us area end */}

      {/* better/skills area start */}
      <div className="better-area pb-70">
        <div className="container">
          <div className="row">
            {/* Skills / Copy */}
            <div className="col-md-6">
              <div className="skill-content">
                <p>
                  From sketchbook to your closet—every step is intentional. We
                  obsess over drape, seams, and trims so you don’t have to think
                  twice. Here’s what we’re best at:
                </p>

                <div className="powerfull-skills">
                  {skills.map((s) => (
                    <div className="single-prograss" key={s.label}>
                      <div className="progess-heading">
                        {s.label} <span>({s.pct}%)</span>
                      </div>
                      <div className="progress">
                        <div
                          className={`progress-bar ${s.barClass} wow fadeInLeft`}
                          style={{ width: `${s.pct}%` }}
                          data-wow-duration="2s"
                          data-wow-delay="1s"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <p>
                  We produce responsibly with partners who share our values, and
                  we never compromise on comfort or construction—ever.
                </p>
              </div>
            </div>

            {/* Skills image */}
            <div className="col-md-6">
              <div className="skill-img">
                {/* replace with a clothing/factory/atelier image */}
                <img src="/images/blog/skill.jpg" alt="Our process" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* better/skills area end */}

     
    </>
  );
};

export default AboutUs;
