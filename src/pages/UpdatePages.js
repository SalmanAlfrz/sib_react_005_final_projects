import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Atoms/Button';
import { removeStockBy1, updateStockBy1 } from '../features/listSlice';
import { fetchList } from '../features/listSlice';

const UpdatePages = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.list.list);

 

  const addby1 = (index) => {
    dispatch(updateStockBy1(index));
  };

  const removeby1 = (index) => {
    dispatch(removeStockBy1(index))
  };

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <>
      <div className='container mx-auto my-10'>
        <h1 className='text-5xl font-bold mb-10' style={{ color: '#47A025' }}>
          Stock Products
        </h1>
        <div className='overflow-x-auto w-full'>
          <table className='table w-full table-normal'>
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {data !== null &&
                data.map((data, index) => (
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
                    <td>
                      <Button handleClick={()=>removeby1(index)} buttonDanger>-</Button>
                      <span className='mx-2'>
                        <input
                          type='number'
                          id='stock'
                          className='input input-bordered input-primary w-16'
                          value={data.stock}
                          readOnly
                        />
                      </span>
                      <Button handleClick={() => addby1(index)} buttonPrimary>
                        +
                      </Button>
                    </td>
                
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UpdatePages;
