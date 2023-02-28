import Link from "next/link";
import customers from "../data/customers";

const Customers = () => {
  const customersView = customers.map((customer) => (
    <div key={customer.id}>
      {customer.name} - {customer.address} - {customer.comment}
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
