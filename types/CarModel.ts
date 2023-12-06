import CarType from "./CarType";

interface iCar {
  id: string;
  type: CarType;
  icon: string;
  iconHeight?: number;
  iconWidth?: number;
  image: string;
  model: string;
  year: string;
  oil?: number;
}

export default iCar;
