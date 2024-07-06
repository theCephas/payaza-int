import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [accStatus, setAccStatus] = useState();

  let data = JSON.stringify({
    service_type: "Account",
    service_payload: {
      request_application: "Payaza",
      application_module: "USER_MODULE",
      application_version: "1.0.0",
      request_class: "MerchantCreateVirtualAccount",
      customer_first_name: "Iseoluwa",
      customer_last_name: "Osho",
      customer_email: "oshoiseoluwa@gmail.com",
      customer_phone: "08110470908",
      virtual_account_provider: "Premiumtrust",
      payment_amount: 2000,
      payment_reference: "RCO1322XLINE",
    },
  });
  const createAcc = async () => {
    const res = fetch(
      "https://router-live.78financials.com/api/request/secure/payloadhandler",
      {
        method: "post",
        headers: {
          Authorization:
            "Payaza UFo3OC1QS0xJVkUtOTQwMkM1QUYtNTRBQy00QTEwLThDOTUtN0E0NjBDRjcyQzM5",
          "Content-Type": "application/json",
        },
        data: data,
      }
    );
  };
  var data2 = JSON.stringify({
    service_type: "Account",
    service_payload: {
      request_application: "Payaza",
      application_module: "USER_MODULE",
      application_version: "1.0.0",
      request_class: "GetAccountDetailsStaticAndDynamic",
      virtual_account_number: "4030754610",
    },
  });

  const getAccountStatus = async () => {
    const res = await fetch(
      "https://router-live.78financials.com/api/request/secure/payloadhandler",
      {
        method: "post",
        maxBodyLength: Infinity,
        // url: "",
        headers: {
          Authorization:
            "Payaza UFo3OC1QS1RFU1QtMDlENERGRDAtRDlGMS00NDZFLUIyMDMtRjM0Q0RGMDJBMTNG",
          "Content-Type": "application/json",
        },
        data: data2,
      }
    );
    // setAccStatus()
    console.log(await res.json());
  };

  // axios
  //   .request(config)
  //   .then((response) => {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <>
      <div>
        <p>Implement:</p>

        <button onClick={createAcc}>Create Account</button>
        <button onClick={getAccountStatus}>Create Status</button>
        {/* <input type="text" /> */}
      </div>
    </>
  );
}

export default App;
