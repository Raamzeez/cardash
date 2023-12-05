import cars from "@/data/cars";

const getCarById = (id: string) => {
  return cars.filter((car) => car.id === id)[0];
};

export default getCarById;
