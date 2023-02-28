export interface IApplication {
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
  {
    id: 2,
    name: "Wimpern",
    duration: "30 min",
    price: 30,
  },
  {
    id: 3,
    name: "Füße",
    duration: "60 min",
    price: 40,
  },
  {
    id: 4,
    name: "Nanoblading",
    duration: "90 min",
    price: 250,
  },
];

export default applications;
