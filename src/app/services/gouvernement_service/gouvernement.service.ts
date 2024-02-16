import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gouvernement } from 'src/app/models/gouvernement';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GouvernementService {

  baseUrl:string = `${environment.apiurl}gouvernement`
  constructor(private http: HttpClient) { }

  getAll(): Observable<Gouvernement[]>{
    return this.http.get<Gouvernement[]>(this.baseUrl);
  }
}
