import BackHomeLink from "../components/BackHomeLink";
import employees from "../data/employees";

const Employees = () => {
  const headerView = ["Name", "Work time", "Application"].map((entry) => (
    // eslint-disable-next-line react/jsx-key
    <th>{entry}</th>
  ));

  const employeesView = employees.map((employee) => (
    <tr key={employee.id}>
      <td>{employee.name}</td>
      <td>{employee.workTime} o`clock</td>
      <td>{employee.applications.map((a) => a.name)}</td>
    </tr>
  ));

  return (
    <>
      <BackHomeLink></BackHomeLink>
      <table>
        <tr>{headerView}</tr>
        {employeesView}
      </table>
    </>
  );
};

export default Employees;
