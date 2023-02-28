import applications, { IApplication } from "./applications";
import customers, { ICustomer } from "./customers";
import employees, { IEmployee } from "./employees";

interface IAppointment {
  id: number;
  date: Date;
  application: IApplication;
  employee: IEmployee;
  customer: ICustomer;
}

const appointments: IAppointment[] = [
  {
    id: 0,
    date: new Date(),
    application: applications[0],
    customer: customers[0],
    employee: employees[0],
  },
  {
    id: 1,
    date: new Date(),
    application: applications[1],
    customer: customers[1],
    employee: employees[1],
  },
  {
    id: 2,
    date: new Date(),
    application: applications[2],
    customer: customers[2],
    employee: employees[0],
  },
];
export default appointments;
