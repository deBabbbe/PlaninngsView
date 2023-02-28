import BackHomeLink from "../components/BackHomeLink";
import customers from "../data/customers";

const Customers = () => {
  const customersView = customers.map((customer) => (
    <ul key={customer.id}>
      <li>
        {customer.name} - {customer.comment} - {customer.address.street}{" "}
        {customer.address.zip} {customer.address.city}{" "}
        {customer.address.country} - {customer.telefon} - {customer.email}
      </li>
    </ul>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <div>Customers</div>
      <div>{customersView}</div>
    </>
  );
};

export default Customers;
