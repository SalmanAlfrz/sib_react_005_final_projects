import React from "react";
import { Link } from "react-router-dom";
import Badge from "../Atoms/Badge";
import Button from "../Atoms/Button";

const CardProduct = (props) => {
  return (
    <>
      {props.list.map((product) => (
        <div className="card w-60 bg-base-100 shadow-xl" key={product.id}>
          <figure>
            <img
              className="h-40 p-3 m-1"
              src={product.image}
              alt={product.title}
            />
          </figure>
          <div className="card-body" style={{ margin: "-8px" }}>
            <h2 className="card-title text-lg line-clamp-2 h-14">
              {product.title}
            </h2>
            <Badge badgePrimary>{product.category}</Badge>
            <p className="line-clamp-3 text-sm text-left">{product.description}</p>
            <p>
              {product.rating.rate} | {product.rating.count}{" "}
            </p>
            <div className="grid grid-flow-col gap-1">
              <Button buttonSecondary isSmall>
                <Link to={`/product/${product.id}`}>Detail</Link>
              </Button>
              <Button buttonPrimary isSmall>
                <Link to="/cart">Add to Cart</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardProduct;
