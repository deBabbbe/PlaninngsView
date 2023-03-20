import Link from "next/link"
import styles from "../styles/Home.module.css";

const Menu = () => {
    return <>
        <Link href="../customers">Customers</Link>
        <Link href="../applications">Applications</Link>
        <Link href="../employees">Employees</Link>
        <Link href="../appointments">Appointments</Link>
    </>
}

export default Menu;