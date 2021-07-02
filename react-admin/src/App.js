import { productData } from "components/Home/data";
import Layout from "components/Layout/Layout";
import LoginScreen from "components/Login/";
import { useState } from "react";
import "styles/App.css";

function App() {
  const totalProducts = productData.reduce((a, c) => a + c.products.length, 0);

  const [isLogged, setIsLogged] = useState(false);
  const logger = (val) => setIsLogged(val);
  return (
    <>
      {isLogged ? (
        <Layout logger={logger}>
          <div className="cardWrap">
            {productData.map(({ name, products }) => (
              <div className="card" key={name}>
                <h3>{name}</h3>
                <h5>{products.length}</h5>
              </div>
            ))}
            <div className="card">
              <h3>Total Products</h3>
              <h5>{totalProducts}</h5>
            </div>
          </div>
        </Layout>
      ) : (
        <LoginScreen logger={logger} />
      )}
    </>
  );
}

export default App;
