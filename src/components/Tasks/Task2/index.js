import { useState } from "react";
import Layout from "components/Tasks/Task2/Layout";
import LoginScreen from "components/Tasks/Task2/Login/";
import { productData } from "components/Tasks/Task2/Home/data.js";
import "styles/App.css";

// ?? data is used to store external data to reuse.

function AdminUI() {
  const totalProducts = productData.reduce((a, c) => a + c.products.length, 0);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {isLogged ? (
        <Layout logger={setIsLogged}>
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
        <LoginScreen logger={setIsLogged} />
      )}
    </>
  );
}

export default AdminUI;
