import React from "react";
import "./Product.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addtoCart = () => {
    //Dispatch the item to Data Layer
    dispatch({
      type: "add_to_cart",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <strong>{value}</strong>
              </>
            )}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addtoCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
