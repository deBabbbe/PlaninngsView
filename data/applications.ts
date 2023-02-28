export interface IApplication {
  id: number;
  name: string;
  price: number;
  duration: string;
}

const applications: IApplication[] = [
  {
    id: 0,
    name: "Nageln",
    duration: "30 min",
    price: 20,
  },
  {
    id: 1,
    name: "Wimpern",
    duration: "30 min",
    price: 30,
  },
  {
    id: 2,
    name: "Füße",
    duration: "60 min",
    price: 40,
  },
  {
    id: 3,
    name: "Nanoblading",
    duration: "90 min",
    price: 250,
  },
];

export default applications;
