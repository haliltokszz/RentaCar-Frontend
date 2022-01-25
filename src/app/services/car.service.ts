import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiControllerUrl = `${environment.apiUrl}/cars`;

  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(
      `${this.apiControllerUrl}`
    );
  }

  getCarById(carId: string): Observable<SingleResponseModel<Car>> {
    return this.httpClient.get<SingleResponseModel<Car>>(
      `${this.apiControllerUrl}/${carId}`
    );
  }

  getCarDetails(): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiControllerUrl}`
    );
  }

  getCarDetailsByBrand(//TODO: refactor to all services
    brandId: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiControllerUrl}/getallwithfilter?BrandId=${brandId}`
    );
  }

  getCarDetailsByColor(//TODO: refactor these filters
    colorId: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiControllerUrl}/getallwithfilter?ColorId=${colorId}`
    );
  }

  getCarDetailsByBrandAndColor(//TODO: apply generic filter
    brandId: string,
    colorId: string
  ): Observable<ListResponseModel<CarDetail>> {
    return this.httpClient.get<ListResponseModel<CarDetail>>(
      `${this.apiControllerUrl}/getallwithfilter?BrandId=${brandId}&ColorId=${colorId}`
    );
  }

  add(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}`,
      car
    );
  }

  update(car: Car): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}`,
      car
    );
  }

  delete(car: Car): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      car
    );
  }
}
