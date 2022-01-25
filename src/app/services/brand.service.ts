import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiControllerUrl = `${environment.apiUrl}/brands`;

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(
      `${this.apiControllerUrl}`
    );
  }

  getBrandById(brandId: string): Observable<SingleResponseModel<Brand>> {
    return this.httpClient.get<SingleResponseModel<Brand>>(
      `${this.apiControllerUrl}/${brandId}`
    );
  }

  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}`,
      brand
    );
  }

  update(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}`,
      brand
    );
  }

  delete(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      brand
    );
  }
}
