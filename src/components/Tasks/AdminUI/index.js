import { useState } from "react";
import Layout from "components/Tasks/AdminUI/Layout";
import LoginScreen from "components/Tasks/AdminUI/Login/";
import { productData } from "components/Tasks/AdminUI/Home/data.js";
import "styles/App.css";
import Chart from "./Home/components/Chart";

// ?? data is used to store external data to reuse.

function AdminUI() {
  const [isLogged, setIsLogged] = useState(true);

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
          </div>
          <Chart />
        </Layout>
      ) : (
        <LoginScreen logger={setIsLogged} />
      )}
    </>
  );
}

export default AdminUI;
