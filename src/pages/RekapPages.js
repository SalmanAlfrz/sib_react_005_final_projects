import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const RekapPages = () => {
  const data = useSelector((state) => state.list);

  useEffect(() => { }, []);
  return (
    <>

      <div className="container mx-auto my-10">
        <h1 className="text-5xl font-bold mb-10" style={{ color: "#47A025" }}>Income Recap</h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-full table-normal">
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Price</th>
                <th>Sold</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody>
              {/* {data !== null &&
                data.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <figure>
                        <img
                          className="h-40 p-3 m-1"
                          src={data.image}
                          alt={data.title}
                        />
                      </figure>
                    </td>
                    <td>{data.title}</td>
                    <td>{data.price}</td>
                    <td>
                    terjual
                    </td>
                    <td>
                    total
                    </td>
                  </tr>
                ))} */}
              <tr>
                <td>Photo</td>
                <td>nama</td>
                <td>harga</td>
                <td>terjual</td>
                <td>income</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Total</th>
                <th>{data.totalPrice.toFixed(2)}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default RekapPages;
