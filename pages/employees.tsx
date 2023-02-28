import BackHomeLink from "../components/BackHomeLink";
import employees from "../data/employees";

const Employees = () => {
  const employeesView = employees.map((employee) => (
    <div key={employee.id}>
      {employee.name} - {employee.workTime} o`clock -{" "}
      {employee.applications.map((a) => (
        <span key={a.id}>{a.name}, </span>
      ))}
    </div>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <div>{employeesView}</div>
    </>
  );
};

export default Employees;
