import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Navigation, Pagination, EffectCreative } from "swiper/modules";
import products from "../api/products.json";
import ProductItem from "../component/productItem/ProductItem";


const HomePage = () => {

  const [listLayout, setListLayout] = useState(4);
  const [activeButton, setActiveButton] = useState(4);
  const handleChangeLayout = (layout) => {
    setListLayout(layout);
    setActiveButton(layout);
  };

  return (
    <>
      <div className="bn">
        <div className="bn-wrap">
          <div className="bn-slide bnSwiper">
            <Swiper
              modules={[Navigation, Pagination, EffectCreative]}
              effect="creative"
              //   spaceBetween={50}
              //   slidesPerView={3}
              //   onSlideChange={() => console.log("slide change")}
              //   onSwiper={(swiper) => console.log(swiper)}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              grabCursor={true}
              creativeEffect={{
                prev: {
                  translate: ["-20%", 0, -1],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
            >
              <SwiperSlide>
                <div className="bnh-parallax">
                  <div className="bn-img inner">
                    <img src="/bn1.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bnh-parallax">
                  <div className="bn-img inner">
                    <img src="/bn2.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bnh-parallax">
                  <div className="bn-img inner">
                    <img src="/bn3.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-control posi plus">
              <div className="swiper-control-btn swiper-prev">
                <i className="fa-light fa-chevron-left"></i>
              </div>
              <div className="swiper-control-btn swiper-next">
                <i className="fa-light fa-chevron-right"></i>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <section className="pcate">
        <div className="pcate-wrap">
          <div className="out-container">
            <div className="pcate-inner">
              <div className="pcate-top">
                <p className="txt"></p>
                <div className="pcate-top-title">
                  <div className="pcate-top-list">
                    <a className="pcate-top-link" href="/">
                      RECHIC
                    </a>
                    <a className="pcate-top-link active" href="/">
                      CARACLUB
                    </a>
                    <a className="pcate-top-link" href="/">
                      DYDY
                    </a>
                  </div>
                </div>
                <div className="sfilter">
                  <div className="sfilter-list">
                    <button
                      className={`sfilter-item ${
                        activeButton === 2 ? "active" : ""
                      }`}
                      onClick={() => handleChangeLayout(2)}
                    >
                      <img src="/filter1.svg" alt="" />
                    </button>
                    <button
                      className={`sfilter-item ${
                        activeButton === 4 ? "active" : ""
                      }`}
                      onClick={() => handleChangeLayout(4)}
                    >
                      <img src="/filter2.svg" alt="" />
                    </button>
                    <button
                      className={`sfilter-item ${
                        activeButton === 6 ? "active" : ""
                      }`}
                      onClick={() => handleChangeLayout(6)}
                    >
                      <img src="/filter3.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="pcate-main">
                <div
                  className="pcate-list sfilter-list-js"
                  data-list={listLayout}
                >
                  {products.map((item, index) => (
                    <Fragment key={item?.id}>
                      <ProductItem dataItem={item}/>
                    </Fragment>
                  ))}
                  {/* <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pro-item">
                    <div className="pro-box">
                      <div className="pro-img">
                        {" "}
                        <a className="box" href="/">
                          <img src="/pro1.jpg" alt="" />
                        </a>
                        <a className="box box-hover" href="/">
                          <img src="/pro2.jpg" alt="" />
                        </a>
                        <div className="pro-hover">
                          <a className="btn btn-trans full" href="/">
                            <span className="text">ADD TO CART</span>
                          </a>
                          <div className="cmini-option-row option-size">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">XS</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">S</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">M</span>
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <span className="txt">L</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pro-desc">
                        <div className="pro-desc-left">
                          {" "}
                          <a className="pro-name" href="/">
                            Vallas Dress - Pink
                          </a>
                          <div className="pro-price">
                            <div className="pro-price-inner">
                              <p className="price-odd">809 100Đ</p>
                              <p className="price-new">809 100Đ</p>
                            </div>
                          </div>
                        </div>
                        <div className="pro-desc-right">
                          <p className="txt">CARA CLUB</p>
                          <div className="cmini-option-row option-color">
                            <div className="recheck">
                              <div className="recheck-block">
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau1.jpg" alt="" />
                                  </div>
                                </div>
                                <div className="recheck-item">
                                  <input
                                    onChange={handleChange}
                                    className="recheck-input"
                                    type="radio"
                                    name=""
                                    
                                  />
                                  <div className="recheck-checkbox">
                                    <img src="/mau2.jpg" alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hjoin">
        <div className="hjoin-wrap">
          <div className="hjoin-top">
            <h1 className="title t-center fw-5">JOIN WITH US</h1>
          </div>
          <div className="hjoin-main">
            <div className="hjoin-list">
              <div className="ab-item">
                <div className="ab-box">
                  <div className="ab-img">
                    {" "}
                    <img src="/join1.jpg" alt="" />
                  </div>
                  <a className="ab-hover" href="/">
                    {" "}
                    <span className="ab-hover-inner">
                      <span className="ab-item-title">CARACLUB</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="ab-item">
                <div className="ab-box">
                  <div className="ab-img">
                    {" "}
                    <img src="/join2.jpg" alt="" />
                  </div>
                  <a className="ab-hover" href="/">
                    {" "}
                    <span className="ab-hover-inner">
                      <span className="ab-item-title">RECHIC</span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="ab-item">
                <div className="ab-box">
                  <div className="ab-img">
                    {" "}
                    <img src="/join3.jpg" alt="" />
                  </div>
                  <a className="ab-hover" href="/">
                    {" "}
                    <span className="ab-hover-inner">
                      <span className="ab-item-title">DYDY</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
