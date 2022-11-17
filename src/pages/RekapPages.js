import React from "react";
import { useSelector } from "react-redux";

const RekapPages = () => {
  const data = useSelector((state) => state.list);

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
              {data.rekap !== null &&
            data.rekap.map((data, index) => (
              <tr key={data.id}>
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
                <td>${data.price}</td>
                <td>{data.quantity}</td>
                <td>${data.price * data.quantity}</td>
              </tr>
            ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Total</th>
                <th>${data.totalRevenue.toFixed(2)}</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default RekapPages;
