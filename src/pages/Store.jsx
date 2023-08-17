import React, { useEffect, useState } from "react";
import { BsFillCartPlusFill, BsCartCheckFill } from "react-icons/bs";

const Store = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://api.mercadolibre.com/sites/MLA/search?q=celular";
      const response = await fetch(url);
      const objJson = await response.json();
      setData(objJson.results);
    };
    fetchApi();
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.i);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== setcart(arrFilter));
    } else {
      setCart([...cart, obj]);
    }
  };

  return (
    <div>
      <h1>Store</h1>
      <div>
        {data.map((e) => (
          <div key={e.id}>
            <h4>{e.title}</h4>
            <img src={e.thumbnail} alt="" />
            <h4>{e.price}</h4>
            <h5>Detalhe do Produto</h5>
            <button>
              {(() => {
                if (cart.some((itemCart) => itemCart.id === e.id)) {
                  return <BsFillCartPlusFill />;
                } else {
                  return <BsCartCheckFill />;
                }
              })()}
              {/* {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsFillCartPlusFill />
              ) : (
                <BsCartCheckFill />
              )} */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
