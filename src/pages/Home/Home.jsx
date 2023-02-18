import React, {useState} from 'react';
import {ScrollTop} from "../../middleware/scrollTop";
import ChangeTitle from "../../middleware/changeTitle";
import {useSelector} from "react-redux";
import {ProductStyle} from "./HomeStyle";
import Button from "../../components/Button/Button";
import {USDollar} from "../../middleware/PriceFormatter";

function Home() {
    ScrollTop();
    ChangeTitle("E-Commerce")

    const products = useSelector(state => state.ProductReducer)

    function ProductSaveButton({ productId }) {
        const [saved, setSaved] = useState(false);

        const handleClick = () => {
            setSaved(prevState => !prevState);
        };

        return (
            <i onClick={handleClick}>{saved ? <i className="fa-solid fa-heart"></i> : <i className="fa-light fa-heart"></i>}</i>
        );
    }
    return (
        <div className="container">
          <ProductStyle.Products>
              {products.map((product) => (
                  <ProductStyle.ProdcutCard key={product.id}>
                      <img src={product.image} alt={product.productName}/>
                      <ProductStyle.Price>{USDollar.format(product.price)}</ProductStyle.Price>
                      <ProductStyle.ProductInfo>
                          <span>{product.productName} {product.descr.slice(0, 20)}</span>
                          <div>
                              <div>
                                  <i className="fa-light fa-eye"></i>
                                  <ProductSaveButton productId={product.id} />
                              </div>
                              <Button style={{fontSize: "12px"}}>Add to Cart</Button>
                          </div>
                      </ProductStyle.ProductInfo>
                  </ProductStyle.ProdcutCard>
              ))}
          </ProductStyle.Products>
        </div>
    );
}

export default Home;