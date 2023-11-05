import React from "react";
import { Link } from "react-router-dom";
import fb from "../assets/img/fb.png";
import whats from "../assets/img/whats.png";
import insta from "../assets/img/insta.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <i className="fas fa-home"></i>
            <span className="footer-other-text d-block mt-3 mb-3">
              وسائل التواصل الاجتماعي
            </span>
            <div className="footer-social">
              <div className="footer-social-item">
                <i className="">
                  <Link to={"/"}>
                    <img src={whats} alt="social media icon" />
                  </Link>
                </i>
              </div>
              <div className="footer-social-item">
                <i className="">
                  <Link to={"/"}>
                    <img src={insta} alt="social media icon" />
                  </Link>
                </i>
              </div>
              <div className="footer-social-item">
                <i className="">
                  <Link to={"/"}>
                    <img src={fb} alt="social media icon" />
                  </Link>
                </i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <p className="footer-title">القائمه</p>
            <ul className="footer-ul">
              <li className="footer_link">
                <Link to={"/"}>الصفحه الرئيسيه</Link>
              </li>
              <li className="footer_link">
                <Link to={"about"}>من نحن</Link>
              </li>
              <li className="footer_link">
                <Link to={"contact"}>اتصل بنا</Link>
              </li>
              {/* <Link>Blog</Link> */}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <div>
              <p className="footer-title">التصنيفات</p>
              <ul className="footer-ul">
                <li>شقه</li>
                <li>محل</li>
                <li>مكتب</li>
                <li>ارض فضاء</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <p className="footer-title">اتصل بنا</p>
            <ul className="footer-ul">
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-clock"></i>
                </div>{" "}
                <span>مساء 08:0 حتي - 8:00 صباح</span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-envelope"></i>
                </div>{" "}
                <span>info@house.com</span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-map-marker-alt"></i>
                </div>{" "}
                <span>Lorem Ipsum </span>
              </li>
              <li className="d-flex">
                <div className="footer-info-item">
                  <i className="fas fa-phone-alt"></i>
                </div>{" "}
                <span>+20 122 994 0375</span>
              </li>
            </ul>
          </div>
          {/*<div className="col-lg-3 col-md-6">
                        <p className="footer-title">Subscribe</p>
                        <span className="footer-other-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                        </span>
                        <div className="subscribe-area mb-2 mt-2">
                            <input type="text" placeholder="Email" className="inp-footer w-100" />
                        </div>
                        <button className="btn-subscribe">Subscribe</button>
                    </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Footer;
