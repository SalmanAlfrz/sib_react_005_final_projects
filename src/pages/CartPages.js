import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { cartAdd1, cartRemove1, checkOut } from "../features/listSlice";
import Button from "../components/Atoms/Button";

const CartPages = () => {
  const data = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const [Login, setLogin] = useState(false);

  const handleAdd = (data) => {
    if (Login) {
      dispatch(cartAdd1(data));
    } else {
      alert("Login dulu bro");
    }
  };

  const handleRemove = (data) => {
    if (Login) {
      dispatch(cartRemove1(data));
    } else {
      alert("Login dulu bro");
    }
  };

  const handleCheckOut = (data) => {
    if (Login) {
      dispatch(checkOut(data));
    } else {
      alert("Login dulu bro");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#adas</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Action</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {data.cart !== null &&
              data.cart.map((data, index) => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.quantity}</td>
                  <td>
                    <Button onClick={() => handleAdd(data)}>+</Button>{" "}
                    <span></span>
                    <Button onClick={() => handleRemove(data)}>-</Button>
                  </td>
                  <td>${data.price * data.quantity}</td>
                </tr>
              ))} */}
            <tr>
              <td>1</td>
              <td>Product</td>
              <td>Quantity</td>
              <td>
                <Button>+</Button> <span></span>
                <Button>-</Button>
              </td>
              <td>$</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Product</td>
              <td>Quantity</td>
              <td>
                <Button>+</Button> <span></span>
                <Button>-</Button>
              </td>
              <td>$</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Product</td>
              <td>Quantity</td>
              <td>
                <Button>+</Button> <span></span>
                <Button>-</Button>
              </td>
              <td>$</td>
            </tr>
          </tbody>
          <tfoot>
            <p>Total: ${data.totalPrice.toFixed(2)}</p>
          </tfoot>
        </table>
      </div>
      <Button onClick={() => handleCheckOut(data.cart)}>checkOut</Button>
    </>
  );
};

export default CartPages;
