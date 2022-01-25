export interface UserDetailUpdateModel {
  id: number;
  firstName: string;
  lastName: string;
  currentPassword: string;
  newPassword: string;
  birthDate: Date;
  phoneNumber: string;
  address: string;
  email: string;
  age: number;
}