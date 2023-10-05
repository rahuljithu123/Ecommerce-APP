import React, { useState } from "react";
import DATA from "../Data";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem ,delItem} from "../redux/actions";

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add To Cart");
  //we need the product id which is pass from the product page
  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);
  const dispatch=useDispatch()

  const handleCart = (product) => {
    if(cartBtn === "Add To Cart"){
        dispatch(addItem(product))
        setCartBtn("Remove from Cart")
    }
    else{
        dispatch(delItem(product))
        setCartBtn("Add To Cart")
    }
  };
  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
          <img src={product.img} alt={product.title} height="400px" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold">{product.title}</h1>
          <hr />
          <h2 className="my-4">{product.price}</h2>
          <p className="lead">{product.desc}</p>
          <button
            onClick={() => handleCart(product)}
            className="btn btn-outline-primary my-5"
          >
            {cartBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
