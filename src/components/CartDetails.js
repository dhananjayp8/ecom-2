import React from "react";
import "./CartStyle.css";

const CartDetails = () => {
  const arr = [0, 1];
  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">Cart Calculation(1)</h5>
                {arr.length > 0 ? (
                  <button className="btn btn-danger mt-0 btn-sm">
                    <i className="fa fa-trash-alt mr-2"></i>
                    <span>Empty Cart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
