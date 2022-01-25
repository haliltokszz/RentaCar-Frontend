export interface Rental {
  id?: string;
  carId: string;
  customerId: string;
  rentStartDate: Date;
  rentEndDate: Date;
  deliveredDate?: Date;
}
