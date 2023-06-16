import { useDispatch, useSelector } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './addProduct.css'
import "bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import { addProuct } from "../../Redux/Slices/SellerSlice";
import * as Yup from "yup";
import { useFormik } from "formik";

export default function Modal() {
  const { products } = useSelector((state) => state.SellerSlice);

  const dispatch = useDispatch();
  const Schema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.number().required(),
    quantity: Yup.number().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      quantity: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(addProuct(values));
      console.log(products);
    },
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-warning btn-block text-black"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        أضف منتج
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">
                إضافة منتج
              </h1>
              <button
                type="button"
                className="btn-close mx-5"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <input
                  id="productName"
                    type="text"
                    name="name"
                    placeholder="اسم المنتج"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="description"
                    placeholder="وصف المنتج"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="price"
                    placeholder="السعر"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="الكمية"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div>
                  <input
                    type="file"
                    name="image"
                    accept="image/jpeg , image/png"
                    placeholder="الكمية"
                    onChange={formik.handleChange}
                    className="form-control border border-secondary"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-dismiss="modal"
                  >
                    الغاء
                  </button>
                  <button type="submit" className="btn btn-outline-primary">
                    اضافة منتج
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
