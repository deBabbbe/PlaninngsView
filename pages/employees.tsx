import BackHomeLink from "../components/BackHomeLink";
import employees from "../data/employees";

const Employees = () => {
  const employeesView = employees.map((employee) => (
    <ul key={employee.id}>
      <li>
        {employee.name} - {employee.workTime} o`clock -{" "}
        {employee.applications.map((a) => (
          <span key={a.id}>{a.name}, </span>
        ))}
      </li>
    </ul>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <div>{employeesView}</div>
    </>
  );
};

export default Employees;
