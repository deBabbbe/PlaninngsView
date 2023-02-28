interface ICustomer {
  id: number;
  name: string;
  comment: string;
  address: string;
}

const customers: ICustomer[] = [
  {
    id: 1,
    name: "Maria Müller",
    comment: "nothing special",
    address: "67433 Neustadt",
  },
  {
    id: 2,
    name: "Max Mustermann",
    comment: "always too late",
    address: "67466 Lambrecht",
  },
];

export default customers;
