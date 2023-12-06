import iCar from "@/types/CarModel";
import CarType from "@/types/CarType";

const cars: iCar[] = [
  {
    id: "3HEFX",
    type: "EV" as CarType,
    icon: "/Mercedes_Icon.png",
    image: "/car.webp",
    model: "Mercedes Benz EQS",
    year: "2023",
  },
  {
    id: "2NDL88",
    type: "PHEV" as CarType,
    icon: "/BMW_Icon.png",
    image: "/car5.png",
    model: "BMW 330e xDrive",
    year: "2019",
    oil: 32,
  },
  {
    id: "JVC3D",
    type: "ICE" as CarType,
    icon: "/Audi_Logo.png",
    image: "/car6.png",
    model: "Audi A5",
    year: "2014",
    iconHeight: 40,
    iconWidth: 40,
    oil: 19,
  },
  {
    id: "SJFFA",
    type: "EV" as CarType,
    icon: "/Polestar_Icon_White.png",
    image: "/car2.webp",
    model: "Polestar 2",
    year: "2023",
    iconHeight: 60,
    iconWidth: 60,
  },
  {
    id: "78JFJ",
    type: "EV" as CarType,
    icon: "/Tesla_Logo.png",
    image: "/car7.png",
    model: "Tesla Model 3",
    year: "2023",
  },
];

export default cars;
