import Link from "next/link";

const Menu = () => {
  return (
    <table>
      <ul>
        <tr>
          <Link href="../customers">Customers</Link>
        </tr>
        <tr>
          <Link href="../applications">Applications</Link>
        </tr>
        <tr>
          <Link href="../employees">Employees</Link>
        </tr>
        <tr>
          <Link href="../appointments">Appointments</Link>
        </tr>
      </ul>
    </table>
  );
};

export default Menu;
