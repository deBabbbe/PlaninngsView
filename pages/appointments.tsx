import BackHomeLink from "../components/BackHomeLink";
import appointments from "../data/appointments";

const Appointments = () => {
  const headerView = ["Customer name", "Date", "Employee name"].map((entry) => (
    // eslint-disable-next-line react/jsx-key
    <th>{entry}</th>
  ));

  const appointmentsView = appointments.map((appointment) => (
    <tr key={appointment.id}>
      <td>{appointment.customer.name}</td>
      <td>{appointment.date.toLocaleString()}</td>
      <td>{appointment.employee.name}</td>
    </tr>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <table>
        <tr>{headerView}</tr>
        {appointmentsView}
      </table>
    </>
  );
};

export default Appointments;
