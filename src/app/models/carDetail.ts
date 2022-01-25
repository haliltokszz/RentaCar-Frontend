import { Brand } from "./brand";
import { CarImage } from "./carImage";
import { Color } from "./color";

export interface CarDetail {
  id: string;
  name: string;
  brand: Brand;
  color: Color;
  dailyPrice: number;
  modelYear: number;
  description: string;
  requiredDriveExperience: number;
  limitMinAge: number;
  kmLimitDaily: number;
  trunkCapacity: number;
  seatsNumber: number;
  images: CarImage[];
}
