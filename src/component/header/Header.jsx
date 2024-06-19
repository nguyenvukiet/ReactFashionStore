import React, { useEffect, useRef, useState } from "react";
import PopupCart from "../popupTemplate/popupCart";
import PopupLogin from "../popupTemplate/popupLogin";
import { Link } from "react-router-dom";
import useCart from "../../hook/useCart";





const Header = () => {
  const handleChange = () => {
    console.log("value input")
  };

  const { cartItems } = useCart();

  //show mobile nav
  const [openMobile, setOpenMobile] = useState(false);
  const handleClickMobile = () => {
    setOpenMobile(prevState => !prevState);
  }
  const handleCloseMobile = () => {
    setOpenMobile(false);
  };

  // show form search---------------------------------------------------------
  const[openSrch, setOpenSrch] = useState(false);
  const searchRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickSrch = () => {
    // setOpenSrch(prevState => !prevState);
    setOpenSrch(true);

  }
  const handleCloseSrch = () => {
    setOpenSrch(false);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current && !buttonRef.current.contains(event.target) &&
        searchRef.current && !searchRef.current.contains(event.target)
      ) {
        handleCloseSrch();
      }
    };

    // Thêm event listener khi component mount
    document.addEventListener('mousedown', handleClickOutside);

    // Dọn dẹp event listener khi component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  //show popup cart--------------------------------------------------------
  const [openCart, setOpenCart] = useState(false);
  const handleClickCart = () => {
    // setOpenCart(prevState => !prevState);
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };
  useEffect(() => {
    if (openCart===true) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [openCart]);

  // show popup Login--------------------------------------------------------
  const [openLogin, setOpenLogin] = useState(false);
  const handleClickLogin = () => {
    setOpenLogin(true);
  }
  const handleCloseLogin = () => {
    setOpenLogin(false);
  }
  useEffect(() => {
    if (openLogin===true) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [openLogin]);

  return (
    <header className={`header ${openSrch ? 'show-form' : ''}`}>
      <div className="header-wrapper">
        <div className="container">
          <div className="header-wrap">
            <div className="header-burger">
              <button className={`hamburger ${openMobile ? 'active' : ''}`} id="hamburger" onClick={handleClickMobile} ref={buttonRef} >
                <img src='/hamburger.svg' alt="" />
                <span className="icon-close">
                  <img src="/close.png" alt="" />
                </span>
              </button>
            </div>
            <div className="header-logo">
              <Link className="custom-logo-link" to="/">
                <img src="/logo.svg" alt="" decoding="async" loading="lazy" />
              </Link>
            </div>
            <div className="header-logo-mobile">
              <a className="custom-logo-link" href="/" rel="home">
                <img
                  src="/logo-mo.svg"
                  alt=""
                  decoding="async"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="header-gr">
              <nav className="header-nav">
                <div className="menu">
                  <div className="menu-nav">
                    <ul className="menu-list" id="menu-primary">
                      <li className="menu-item current-menu-item page_item current_page_item">
                        <Link className="menu-link" to="/">
                          HOME
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="menu-link"  to="/about">
                          ABOUT
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link className="menu-link" to="/">PRODUCTS</Link>
                      </li>
                      <li className="menu-item">
                        <Link className="menu-link" to="/blog">BLOG</Link>
                      </li>
                      <li className="menu-item">
                        <Link className="menu-link" to="/">CONTACT</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="header-control">
                <button className="header-btn-search header-action" onClick={handleClickSrch}>
                  <div className="header-action-icon">
                    <span className="icon">
                      <img src="/search.svg" alt="" />
                    </span>
                  </div>
                </button>

                <div className="header-action">
                  <button
                    className="header-action-icon popup-open"
                    onClick={handleClickLogin}
                  >
                    <span className="icon">
                      <img src="/user.svg" alt="" />
                    </span>
                  </button>
                </div>
                <div className="header-action">
                  <button
                    className="header-action-icon"
                    onClick={handleClickCart}
                  >
                    <span className="icon">
                      <img src="/cart.svg" alt="" />
                    </span>
                    <span className="text">{cartItems.length}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-overlay ${openMobile ? 'open' : ''}`} onClick={handleCloseMobile}></div>
        <div className={`mobile ${openMobile ? 'open' : ''}`}>
          <div className="mobile-con">
            <button className="mobile-close" onClick={handleCloseMobile}>
              <img src="/close.png" alt="" />
            </button>
            <div className="mobile-wr">
              <div className="mobile-nav">
                <ul className="menu-list">
                  <li className="menu-item">
                    
                    <a className="menu-link" href="/">
                      HOME
                    </a>
                    <span className="show-sub-menu-js icon">
                      
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li className="menu-item">
              
                    <a className="menu-link" href="/">
                      ABOUT
                    </a>
                    <span className="show-sub-menu-js icon">
                      
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li className="menu-item">
                 
                    <a className="menu-link" href="/">
                      PRODUCTS
                    </a>
                    <span className="show-sub-menu-js icon">
                   
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li className="menu-item">
                   
                    <a className="menu-link" href="/">
                      BLOG
                    </a>
                    <span className="show-sub-menu-js icon">
                     
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li className="menu-item">
                
                    <a className="menu-link" href="/">
                      CONTACT
                    </a>
                    <span className="show-sub-menu-js icon">
                   
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                </ul>
                <div className="mobile-nav-btn">
         
                  <a className="link" href="/">
                    SHOP ALL PRODUCTS
                  </a>
                </div>
              </div>
            </div>
        
            <div className="mobile-contact">
              <ul className="menu-list">
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    Về chúng tôi
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    Chính sách vận chuyển
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    Chính sách bảo hành
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    kietngyn.it@gmail.com
                  </a>
                </li>
                <li className="menu-item">
                  <a className="menu-link" href="/">
                    0868077087
                  </a>
                </li>
              </ul>
              <div className="footer-social">
                
                <a className="footer-social-link" href="/">
                  <img src="/fb.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openSrch && (
        <div className="header-sform" ref={searchRef} >
          <button className="header-sform-close" onClick={handleCloseSrch}>
            <span className="text">Đóng</span>
          </button>
          <div className="container">
            <div className="header-sform-inner">
              <form action="">
                <div className="header-sform-input">
                  <input onChange={handleChange} type="text" placeholder="Nhập từ khóa..." />
                  <button className="btn btn-pri" type="submit">
                    <span className="text">Tìm kiếm</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <PopupCart openCart={openCart} handleCloseCart={handleCloseCart} />

      <div className="popup popup-cart popup-cart-update" data-popup-id="updateCart-popup">
        <div className="popup-overlay"></div>
        <div className="popup-main">
          <div className="popup-close"><i className="fas fa-times icon"></i></div>
          <div className="popup-over">
            <div className="popup-wrapper">
              <div className="popup-cart-inner"> 
                <p className="title fw-6">SHOPPING CART</p>
                <div className="popup-cart-list"> 
                  <div className="cmini-list">
                    <div className="cmini-item">   
                      <div className="cmini-box"> 
                        <div className="cmini-img"><a className="box" href="/"> <img src="/cmini.jpg" alt=""/></a></div>
                        <div className="cmini-desc"> 
                          <div className="cmini-desc-top"> <a className="cmini-name" href="/">VALLAS DRESS</a></div>
                          <div className="cmini-price"> 
                            <div className="price"> <span className="price-odd">$230.0</span><span className="price-new">$23.80</span></div>
                            <p className="cmini-price-tag">(60% off Final Sale)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popup-cart-option"> 
                  <div className="popup-cart-ubox">
                    <p className="fw-6 txt">Choose Color</p>
                    <div className="cmini-option-row option-color">
                      <div className="recheck">
                        <div className="recheck-block">
                          <div className="recheck-item">
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" hidden=""/>
                            <div className="recheck-checkbox"><img src="/mau1.jpg" alt=""/>
                            </div>
                          </div>
                          <div className="recheck-item">
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" hidden/>
                            <div className="recheck-checkbox"><img src="/mau2.jpg" alt=""/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="popup-cart-ubox">
                    <p className="fw-6 txt">Choose Size</p>
                    <div className="cmini-option-row option-size">
                      <div className="recheck">
                        <div className="recheck-block">
                          <div className="recheck-item">
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" hidden=""/>
                            <div className="recheck-checkbox"><span className="txt">XS</span></div>
                          </div>
                          <div className="recheck-item">
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" hidden=""/>
                            <div className="recheck-checkbox"><span className="txt">S</span></div>
                          </div>
                          <div className="recheck-item">
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" hidden=""/>
                            <div className="recheck-checkbox"><span className="txt">M</span></div>
                          </div>
                          <div className="recheck-item">
                            <input onChange={handleChange} className="recheck-input" type="radio" name="" hidden=""/>
                            <div className="recheck-checkbox"><span className="txt">L</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="popup-cart-ubox">
                    <p className="fw-6 txt">Choose Quantity</p>
                    <div className="quantity">
                      <div className="quantity-count">
                        <div className="count">
                          <div className="count-btn count-minus"><i className="fas fa-minus icon"></i></div>
                          <input onChange={handleChange} className="count-input" type="text" value="1" max="99" min="0" hidden/>
                          <p className="count-number">1</p>
                          <div className="count-btn count-plus"><i className="fas fa-plus icon"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="popup-cart-ctn"> 
                  <div className="popup-cart-control">    
                    <div className="popup-cart-price"> 
                      <div className="popup-cart-left"> 
                        <div className="txt">TOTAL
                          <p className="t12 c-grey">VAT Included</p>
                        </div>
                      </div>
                      <div className="popup-cart-right">
                        <p className="txt">$23.80</p>
                      </div>
                    </div>
                    <div className="popup-cart-btn"> <button className="btn full btn-pri" href="/"><span className="text">APPLY</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupLogin openLogin={openLogin} handleCloseLogin={handleCloseLogin} />


    </header>
    
  );
};

export default Header;
