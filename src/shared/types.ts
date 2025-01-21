export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contact Us",
}

export interface BenefitType{
  icon: JSX.Element;
  title: string;
  description: string;
}
