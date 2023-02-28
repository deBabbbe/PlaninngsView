import BackHomeLink from "../components/BackHomeLink";
import appointments from "../data/appointments";

const Appointments = () => {
  const appointmentsView = appointments.map((appointments) => (
    <ul key={appointments.id}>
      <li>
        {appointments.customer.name} - {appointments.date.toString()} -{" "}
        {appointments.employee.name}{" "}
      </li>
    </ul>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <div>{appointmentsView}</div>
    </>
  );
};

export default Appointments;
