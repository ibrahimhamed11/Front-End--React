import React from "react";
import "./shoppingCart.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { deleteCartItem } from "../Redux/Slices/ProductSlice";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.ProductSlice) || [];
  console.log(cartItems)
  const [total, setTotal] = useState(0);
  const [items,setItems] = useState([]);

  function cartTotal(cartItems) {
    let items = [...cartItems];
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }
    return total;
  }


  useEffect(() => {
    setItems(cartItems)
  }, [cartItems]);


  useEffect(() => {
    setTotal(cartTotal(items));

  }, [ items]);

  useEffect(() => {

  }, [cartItems, total]);
  return (
    <>
      <section className="cart">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">العربة</h5>
                </div>
                <div className="card-body">
                  {/* Single item */}
                  {items.map((item, index) => {
                    return (
                      <>
                        <div className="row" key={index}>
                          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                            {/* Image */}
                            <div
                              className="bg-image hover-overlay hover-zoom ripple rounded"
                              data-mdb-ripple-color="light"
                            >
                              <img
                                src={item.image}
                                className="img-thumbnail"
                                alt="Blue Jeans Jacket"
                              />
                              <a href="#!">
                                <div
                                  className="mask"
                                  style={{
                                    backgroundColor: "rgba(251, 251, 251, 0.2)",
                                  }}
                                ></div>
                              </a>
                            </div>
                            {/* Image */}
                          </div>

                          <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                            {/* Data */}
                            <p>
                              <strong>{item.title}</strong>
                            </p>

                            <button
                              type="button"
                              className="btn btn-primary btn-sm ms-1 mb-2"
                              data-mdb-toggle="tooltip"
                              title="Remove item"
                              onClick={() => {
                                dispatch(deleteCartItem(item._id));
                              }}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm mb-2"
                              data-mdb-toggle="tooltip"
                              title="Move to the wish list"
                            >
                              <i className="fas fa-heart"></i>
                            </button>
                            {/* Data */}
                          </div>

                          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            {/* Quantity */}
                            <div
                              className="d-flex mb-4"
                              style={{ maxWidth: "300px" }}
                            >
                              <button
                                type="button"
                                className="btn btn-primary px-3 ms-2 h-25"
                              >
                                <i className="fas fa-minus"></i>
                              </button>

                              <div className="form-outline">
                                <input
                                  id="form1"
                                  min="0"
                                  name="quantity"
                                  value={item.quantity}
                                  type="number"
                                  className="form-control text-center"
                                />
                                <label className="form-label" htmlFor="form1">
                                  الكمية
                                </label>
                              </div>

                              <button className="btn btn-primary px-3 me-2 h-25">
                                <i className="fas fa-plus"></i>
                              </button>
                            </div>
                            {/* Quantity */}

                            {/* Price */}
                            <p className="text-start text-md-center">
                              <strong>{item.price}</strong>
                            </p>
                            {/* Price */}
                          </div>
                        </div>
                        <hr />
                      </>
                    );
                  })}
                  {/* Single item */}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p>
                    <strong>نحن نقبل</strong>
                  </p>
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="me-2"
                    width="45px"
                    src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">الملخص</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      المنتجات
                      <span>{total} EGP</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      الشحن
                      <span>مجاني</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>الاجمالي</strong>
                        <strong>
                          <p className="mb-0">(يشمل VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{total} EGP</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    الدفع
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
