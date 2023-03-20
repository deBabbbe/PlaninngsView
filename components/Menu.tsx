import Link from "next/link";

const Menu = () => {
  return (
    <table id="menu">
      <tr>
        <th>Areas</th>
      </tr>
      <tr>
        <td>
          <Link href="../customers">Customers</Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link href="../applications">Applications</Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link href="../employees">Employees</Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link href="../appointments">Appointments</Link>
        </td>
      </tr>
    </table>
  );
};

export default Menu;
