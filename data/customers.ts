interface IAddress {
  street: string;
  city: string;
  country: string;
  zip: number;
}

export interface ICustomer {
  id: number;
  name: string;
  comment: string;
  address: IAddress;
  telefon: string;
  email: string;
}

const customers: ICustomer[] = [
  {
    id: 0,
    name: "Maria Müller",
    comment: "nothing special",
    address: {
      city: "Neustadt an der Weinstraße",
      country: "Germany",
      street: "Berlinerstraße 1",
      zip: 67433,
    },
    telefon: "06321234345435",
    email: "m.mueller@gmail.com",
  },
  {
    id: 1,
    name: "Max Mustermann",
    comment: "always too late",
    address: {
      city: "Lambrecht",
      country: "Germany",
      street: "Brechlochweg 15",
      zip: 67466,
    },
    telefon: "06325453245",
    email: "m.mustermann@gmx.com",
  },
  {
    id: 2,
    name: "Monika Mustermann",
    comment: "talks too much",
    address: {
      city: "Lambrecht",
      country: "Germany",
      street: "Brechlochweg 15",
      zip: 67466,
    },
    telefon: "06325453245",
    email: "m.mustermann@gmx.com",
  },
];

export default customers;
