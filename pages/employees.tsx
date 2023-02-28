import Link from "next/link";
import employees from "../data/employees";

const Employees = () => {
  const employeesView = employees.map((employee) => (
    <div key={employee.id}>
      {employee.name} - {employee.workTime} o'clock -{" "}
      {employee.applications.map((a) => (
        <span key={a.id}>{a.name}, </span>
      ))}
    </div>
  ));

  return (
    <>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>{employeesView}</div>
    </>
  );
};

export default Employees;
