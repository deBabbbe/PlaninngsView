import BackHomeLink from "../components/BackHomeLink";
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
      <BackHomeLink></BackHomeLink>
      <div>{customersView}</div>
    </>
  );
};

export default Customers;
