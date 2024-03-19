import { useState } from "react";
export default function Form() {
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    products: [],
  });

  const [people, setPeople] = useState([]);
  return (
    <>
      <label onClick={() => setPeople([...people, "new Person"])} htmlFor="">
        {" "}
        First Name
      </label>{" "}
      <input
        value={customerInfo.firstName}
        onChange={(e) =>
          setCustomerInfo({
            ...customerInfo,
            products: [...customerInfo.products, "new product"],
          })
        }
      />
      <label htmlFor=""> Last Name</label>
      <input
        onChange={(e) =>
          setCustomerInfo({ ...customerInfo, lastName: e.target.value })
        }
        value={customerInfo.lastName}
      />
      <label htmlFor=""> Address</label>
      <input
        onChange={(e) =>
          setCustomerInfo({ ...customerInfo, address: e.target.value })
        }
        value={customerInfo.address}
      />
      <label htmlFor=""> City</label>
      <input
        value={customerInfo.city}
        onChange={(e) =>
          setCustomerInfo({ ...customerInfo, city: e.target.value })
        }
      />
      <label htmlFor=""> State</label>
      <input
        value={customerInfo.state}
        onChange={(e) =>
          setCustomerInfo({ ...customerInfo, state: e.target.value })
        }
      />
      <label htmlFor=""> Postal code</label>
      <input
        value={customerInfo.postalCode}
        onChange={(e) =>
          setCustomerInfo({ ...customerInfo, postalCode: e.target.value })
        }
      />
    </>
  );
}
