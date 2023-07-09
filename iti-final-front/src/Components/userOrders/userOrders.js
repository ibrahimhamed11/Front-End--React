import React from "react";
import MyOderStyle from "./userOrders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserOrders } from "../../Redux/Slices/OrderSlice";

export default function UserOrders() {
  const api = "http://localhost:4000/";
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");
  const { orders } = useSelector((state) => state.OrderSlice) || [];
  console.log(orders);

  useEffect(() => {
    dispatch(getUserOrders(userId));
  }, []);
  return (
    <div className="col-lg-9">
      {orders.map((item, index) => {
        return (
          <div className={`${MyOderStyle.box} my-3`} key={index}>
            <div className={MyOderStyle.head}>
              <div className={MyOderStyle.headItem}>
                <span>تاريخ الطلب</span>
                <span>{orders[0].date}</span>
              </div>
              <div className={MyOderStyle.headItem}>
                <span>الاجمالي</span>
                <span>{orders[0].totalAmount} EGP</span>
              </div>
              <div className={MyOderStyle.headItem}>
                <span>رقم الطلب</span>
                <span>{orders[0]._id}</span>
              </div>
            </div>
            {item.products.map((product, index) => {
              return (
                
                <div className={MyOderStyle.body} key={index}>
                 { console.log(product)}
                  <div>
                    <p>{product.product.name}</p>
                    <p>{product.product.price}EGP</p>
                  </div>
                  <div>
                    <p>حالة الطلب</p>
                    <p>{orders[0].delStatus}</p>
                  </div>
                  <div className={MyOderStyle.image}>
                    <img src={`${api}${product.product.image}`} />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
