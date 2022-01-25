import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiControllerUrl = `${environment.apiUrl}/colors`;

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(
      `${this.apiControllerUrl}`
    );
  }

  getColorById(colorId: string): Observable<SingleResponseModel<Color>> {
    return this.httpClient.get<SingleResponseModel<Color>>(
      `${this.apiControllerUrl}/${colorId}`
    );
  }

  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}`,
      color
    );
  }

  update(color: Color): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(
      `${this.apiControllerUrl}`,
      color
    );
  }

  delete(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      color
    );
  }
}
