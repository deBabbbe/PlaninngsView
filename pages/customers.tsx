import Link from "next/link";
import customers from "../data/customers";

const Customers = () => {
  const customersView = customers.map((customer) => (
    <div key={customer.id}>
      {customer.name} - {customer.comment} - {customer.address.street}{" "}
      {customer.address.zip} {customer.address.city} {customer.address.country}{" "}
      - {customer.telefon} - {customer.email}
    </div>
  ));

  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>{customersView}</div>
    </>
  );
};

export default Customers;
