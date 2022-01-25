import { Brand } from "./brand";
import { CarCategories } from "./carCategories";
import { CarImage } from "./carImage";
import { Color } from "./color";

export interface Car {
  id: string;
  name: string;
  modelYear: number;
  category: CarCategories;
  description: string;
  requiredDriveExperience: number;
  limitMinAge: number;
  kmLimitDaily: number;
  kmCurrent: number;
  trunkCapacity: number;
  seatsNumber: number;
  dailyPrice: number;
  available: boolean;
  minFindeksScore: number | null;
  brandId: string;
  brand: Brand;
  colorId: string;
  color: Color;
  images: CarImage[];
}