import applications, { IApplication } from "./applications";

export interface IEmployee {
  id: number;
  name: string;
  applications: IApplication[];
  workTime: string;
}

const employees: IEmployee[] = [
  {
    id: 0,
    name: "Maria Hill",
    applications: [applications[0]],
    workTime: "8 - 12",
  },
  {
    id: 1,
    name: "Schorsch Mayer",
    applications: [...applications],
    workTime: "13 - 18",
  },
];

export default employees;
