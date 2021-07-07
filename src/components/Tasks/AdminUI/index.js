import { useState } from "react";
import Layout from "components/Tasks/AdminUI/Layout";
import LoginScreen from "components/Tasks/AdminUI/Login/";
import "styles/App.css";
import Chart from "./Home/components/Chart";
import ProductCards from "../AdminUI/Home/components/ProductCards";

// ?? data is used to store external data to reuse.

function AdminUI() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      {isLogged ? (
        <Layout logger={setIsLogged}>
          <ProductCards />
          <Chart />
        </Layout>
      ) : (
        <LoginScreen logger={setIsLogged} />
      )}
    </>
  );
}

export default AdminUI;
