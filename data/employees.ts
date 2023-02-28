import applications, { IApplication } from "./applications";

interface IEmployee {
  id: number;
  name: string;
  applications: IApplication[];
  workTime: string;
}

const employees: IEmployee[] = [
  {
    id: 1,
    name: "Maria Hill",
    applications: [applications[0]],
    workTime: "8 - 12",
  },
  {
    id: 2,
    name: "Schorsch Mayer",
    applications: [...applications],
    workTime: "13 - 18",
  },
];

export default employees;
