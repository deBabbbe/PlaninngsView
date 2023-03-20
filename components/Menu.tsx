import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PersonIcon from "@mui/icons-material/Person";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
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
          <PersonIcon />
        </td>
      </tr>
      <tr>
        <td>
          <Link href="../applications">Applications</Link>
          <SettingsApplicationsIcon />
        </td>
      </tr>
      <tr>
        <td>
          <Link href="../employees">Employees</Link>
          <EngineeringIcon />
        </td>
      </tr>
      <tr>
        <td>
          <Link href="../appointments">Appointments</Link>
          <AccessTimeIcon />
        </td>
      </tr>
    </table>
  );
};

export default Menu;
