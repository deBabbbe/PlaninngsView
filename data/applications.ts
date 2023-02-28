interface IApplication {
  id: number;
  name: string;
  price: number;
  duration: string;
}

const applications: IApplication[] = [
  {
    id: 1,
    name: "Nageln",
    duration: "30 min",
    price: 20,
  },
];

export default applications;
