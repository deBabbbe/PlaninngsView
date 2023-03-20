import BackHomeLink from "../components/BackHomeLink";
import customers from "../data/customers";

const Customers = () => {
  const headerList = [
    "Name",
    "Street",
    "Zip",
    "City",
    "Country",
    "Telefon",
    "Email",
    "Comment",
  ];

  // eslint-disable-next-line react/jsx-key
  const headerView = headerList.map((entry) => <th>{entry}</th>);

  const customersView = customers.map((customer) => (
    <tr key={customer.id}>
      <td>{customer.name}</td>
      <td>{customer.address.street}</td>
      <td>{customer.address.zip}</td>
      <td>{customer.address.city}</td>
      <td>{customer.address.country}</td>
      <td>{customer.telefon}</td>
      <td>{customer.email}</td>
      <td>{customer.comment}</td>
    </tr>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <table>
        <tr>{headerView}</tr>
        {customersView}
      </table>
    </>
  );
};

export default Customers;
