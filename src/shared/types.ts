export enum Selected {
  Home = "home",
  Benifite = "benifits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassesType {
  id: number;
  description?: string;
  image: string;
  name: string;
}
