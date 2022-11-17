import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Atoms/Button";
import { updateStock } from "../features/listSlice";
import { fetchList } from "../features/listSlice";

const UpdatePages = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.list.list);
  const [stock, setStock] = useState();

  const handleAddStock = (index, stock, e) => {
    dispatch(updateStock({ index, stock }));
    setStock(0);
  };

  const handleInput = (e) => {
    setStock(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="text-5xl font-bold mb-10" style={{ color: "#47A025" }}>Stock Products</h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-full table-normal">
            <thead>
              <tr>
                <th>Product</th>
                <th></th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data !== null &&
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
                    <td>
                      <Button buttonDanger>-</Button>
                      <span className="mx-2">
                        <input
                          type="number"
                          placeholder="1"
                          id="stock"
                          className="input input-bordered input-primary w-16"
                          value={data.stock}
                          onChange={(e) => handleInput(e)}
                        />
                      </span>
                      <Button buttonPrimary>+</Button>
                    </td>
                    <td>
                      <Button buttonPrimary onClick={() => handleAddStock(index, stock)}>
                        Update
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
