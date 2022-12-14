import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { cartAdd1, cartRemove1, checkOut } from '../features/listSlice';
import Button from '../components/Atoms/Button';

const CartPages = () => {
  const data = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const [Login, setLogin] = useState(false);

  const handleAdd = (data) => {
    if (Login) {
      dispatch(cartAdd1(data));
    } else {
      alert('Login dulu bro');
    }
  };





  const handleRemove = (data) => {
    if (Login) {
      dispatch(cartRemove1(data));
    } else {
      alert('Login dulu bro');
    }
  };

  const handleCheckOut = (data) => {
    if (Login) {
      dispatch(checkOut(data));
    } else {
      alert('Login dulu bro');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <>
      <div className='container mx-auto my-10'>
        <h1 className='text-5xl font-bold mb-10' style={{ color: '#47A025' }}>
          My Cart
        </h1>
        <div className='overflow-x-auto w-full'>
          <table className='table w-full table-normal'>
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.cart !== null &&
                data.cart.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <figure>
                        <img
                          className='h-40 p-3 m-1'
                          src={data.image}
                          alt={data.title}
                        />
                      </figure>
                    </td>
                    <td>{data.title}</td>
                    <td>${data.price}</td>
                    <td>
                      <Button
                        buttonDanger
                        handleClick={() => handleRemove(data)}
                      >
                        -
                      </Button>
                      <span className='mx-2'>
                        <input
                          type='text'
                          placeholder='1'
                          className='input input-bordered input-primary w-16'
                          value={data.quantity}
                          readOnly
                        />
                      </span>
                      <Button buttonPrimary handleClick={() => handleAdd(data)}>
                        +
                      </Button>
                    </td>
                    <td>${data.price * data.quantity}</td>
                  </tr>
                ))}
              {data.cart == null && (
                <tr className='table-tr '>
                  <td>Photo</td>
                  <td>Nama</td>
                  <td>Harga</td>
                  <td>
                    <Button buttonDanger>-</Button>
                    <span className='mx-2'>
                      <input
                        type='text'
                        className='input input-bordered input-primary w-16'
                        value={data.quantity}
                        readOnly
                        
                      />
                    </span>
                    <Button buttonPrimary>+</Button>
                  </td>
                  <td>total</td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Total</th>
                <th>${data.totalPrice.toFixed(2)}</th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='flex justify-end mt-10'>
          <Button buttonPrimary handleClick={() => handleCheckOut(data.cart)}>
            Check Out
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartPages;
