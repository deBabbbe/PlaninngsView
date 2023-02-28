import BackHomeLink from "../components/BackHomeLink";
import appointments from "../data/appointments";

const Appointments = () => {
  const appointmentsView = appointments.map((appointments) => (
    <div key={appointments.id}>
      {appointments.customer.name} - {appointments.date.toString()} -{" "}
      {appointments.employee.name}{" "}
    </div>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <div>{appointmentsView}</div>
    </>
  );
};

export default Appointments;
