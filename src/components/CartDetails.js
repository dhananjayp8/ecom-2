import React, { useEffect, useState } from "react";
import "./CartStyle.css";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
  removeSingleItem,
  emptycartItem,
} from "../redux/features/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);
  //console.log(carts);

  const [totalprice, settotalPrice] = useState(0);
  const [totalquantity, settotalQuantity] = useState(0);
  const dispatch = useDispatch();
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };
  //remove cart
  const handleDecrement = (e) => {
    dispatch(removeToCart(e));
    toast.success("Item removed from your cart");
  };
  //single removal
  const handleSingleDecrement = (e) => {
    dispatch(removeSingleItem(e));
  };
  // empty cart
  const emptyCart = () => {
    dispatch(emptycartItem());
    toast.success("Your cart is empty");
  };
  const total = () => {
    let totalPrice = 0;
    carts.map((ele, index) => {
      totalPrice = ele.price * ele.qnty + totalPrice;
    });
    settotalPrice(totalPrice);
  };
  const totalQnty = () => {
    let totalQuantity = 0;
    carts.map((ele, index) => {
      totalQuantity = ele.qnty + totalQuantity;
    });
    settotalQuantity(totalQuantity);
  };
  useEffect(() => {
    total();
  }, [total]);
  useEffect(() => {
    totalQnty();
  }, [totalQnty]);

  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">
                  Cart Calculation{carts.length > 0 ? `(${carts.lenngth})` : ""}
                </h5>
                {carts.length > 0 ? (
                  <button
                    className="btn btn-danger mt-0 btn-sm"
                    onClick={emptyCart}
                  >
                    <i className="fa fa-trash-alt mr-2"></i>
                    <span>Empty Cart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {carts.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart"></i>
                          <p>Your Cart Is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right">
                        {" "}
                        <span id="amount" className="amount">
                          Total Amount
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((data, index) => {
                      console.log("info", data);
                      return (
                        <>
                          <tr>
                            <td>
                              <button
                                className="prdct-delete"
                                onClick={() => handleDecrement(data.id)}
                              >
                                <i className="fa fa-trash-alt"></i>
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.imgdata} alt="" />
                              </div>
                            </td>
                            <td>
                              <div className="product-name ">
                                <p className="mt-3">{data.dish}</p>
                              </div>
                            </td>
                            <td>{data.price}</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={
                                    data.qnty <= 1
                                      ? () => handleDecrement(data.id)
                                      : () => handleSingleDecrement(data)
                                  }
                                >
                                  <i className="fa fa-minus"></i>
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  value={data.qnty}
                                  disabled
                                  name=""
                                  id=""
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() => handleIncrement(data)}
                                >
                                  <i className="fa fa-plus"></i>
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              {data.price * data.qnty}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>&nbsp;</th>
                      <th colSpan={3}>&nbsp;</th>
                      <th>
                        Items in Cart<span className="ml-2 mr-2"></span>
                        <span className="text-danger">{totalquantity}</span>
                      </th>
                      <th className="text-right">
                        Total Price <span className="ml-2 mr-2">:</span>
                        <span className="text-danger">{totalprice}</span>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
