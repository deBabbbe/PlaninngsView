interface IAddress {
  street: string;
  city: string;
  country: string;
  zip: number;
}

interface ICustomer {
  id: number;
  name: string;
  comment: string;
  address: IAddress;
}

const customers: ICustomer[] = [
  {
    id: 1,
    name: "Maria Müller",
    comment: "nothing special",
    address: {
      city: "Neustadt an der Weinstraße",
      country: "Germany",
      street: "Berlinerstraße 1",
      zip: 67433,
    },
  },
  {
    id: 2,
    name: "Max Mustermann",
    comment: "always too late",
    address: {
      city: "Lambrecht",
      country: "Germany",
      street: "Brechlochweg 15",
      zip: 67466,
    },
  },
];

export default customers;
