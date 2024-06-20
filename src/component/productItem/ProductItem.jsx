import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  const { dataItem } = props;

  const priceDiscount =
    dataItem.price - (dataItem.variants?.[0].price * dataItem.discount) / 100;

  const priceDiscountSimple =
    dataItem.price - (dataItem.price * dataItem.discount) / 100;

  const [chooseColor, setChooseColor] = useState(
    dataItem?.options?.color[0]?.color_name
  );
  const handleCheckColor = (e) => {
    setChooseColor(e.target.value);
  };
  // console.log(chooseColor)
  const [chooseSize, setChooseSize] = useState();

  const handleChooseSize = (e) => {
    setChooseSize(e.target.value);
  };

  useEffect(() => {
    if (chooseColor && chooseSize) {
      props.addToCart(dataItem, chooseColor, chooseSize);
    }
  }, [chooseColor, chooseSize, dataItem]);

  return (
    <>
      {dataItem.type === "complie" ? (
        <div className="pro-item">
          <div className="pro-box">
            <div className="pro-img">
              <Link className="box" to={`/product/${dataItem.id}`}>
                <img src={dataItem.img[0].img1} alt="" />
                <span className=" box-hover">
                  <img src={dataItem.img[1].img2} alt="" />
                </span>
              </Link>
              <div className="pro-hover">
                <Link className="btn btn-trans full" to={`/product/${dataItem.id}`}>
                  <span className="text">SEE DETAIL</span>
                </Link>
                <div className="cmini-option-row option-size">
                  <div className="recheck">
                    <div className="recheck-block">
                      {dataItem?.options?.size.map((dataSize, index) => (
                        <div className="recheck-item" key={index}>
                          <input
                            value={dataSize.size_name}
                            onChange={(e) => handleChooseSize(e)}
                            className="recheck-input"
                            type="radio"
                            name={` color ${dataItem?.id}`}
                          />
                          <div className="recheck-checkbox">
                            <span className="txt">{dataSize.size_name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-desc">
              <div className="pro-desc-left">
                <Link className="pro-name" to={`/product/${dataItem.id}`}>
                  {dataItem.name}
                </Link>
                <div className="pro-price">
                  <div className="pro-price-inner">
                    <p className="price-odd">
                      {dataItem.price.toLocaleString()}
                      {dataItem.currency}
                    </p>
                    <p className="price-new">
                      {priceDiscount.toLocaleString()}
                      {dataItem.currency}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pro-desc-right">
                <p className="txt">CARA CLUB</p>
                <div className="cmini-option-row option-color">
                  <div className="recheck">
                    <div className="recheck-block">
                      {dataItem?.options?.color.map((dataItem, index) => (
                        <div className="recheck-item" key={index}>
                          <input
                            checked={dataItem.color_name === chooseColor}
                            value={dataItem.color_name}
                            onChange={(e) => handleCheckColor(e)}
                            className="recheck-input"
                            type="radio"
                            name=""
                          />
                          <div
                            className="recheck-checkbox"
                            style={{ background: `${dataItem.color}` }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pro-item pro-simple">
          <div className="pro-box">
            <div className="pro-img">
              <Link className="box" to={`/product/${dataItem.id}`}>
                <img src={dataItem.img[0].img1} alt="" />
                <span className=" box-hover">
                  <img src={dataItem.img[1].img2} alt="" />
                </span>
              </Link>
              <div className="pro-hover">
                <button
                  className="btn btn-trans full"
                  onClick={() => props.addToCart(dataItem)}
                >
                  <span className="text">ADD TO CART</span>
                </button>
              </div>
            </div>
            <div className="pro-desc">
              <div className="pro-desc-left">
                <Link className="pro-name" to={`/product/${dataItem.id}`}>
                  {dataItem.name} - {dataItem.color_name} - {dataItem.size_name}
                </Link>
                <div className="pro-price">
                  <div className="pro-price-inner">
                    <p className="price-odd">
                      {dataItem.price.toLocaleString()}
                      {dataItem.currency}
                    </p>
                    <p className="price-new">
                      {priceDiscountSimple.toLocaleString()}
                      {dataItem.currency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
