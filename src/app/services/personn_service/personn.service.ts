import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { PersonDto } from 'src/app/models/person-dto';
import { Personn } from 'src/app/models/personn';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonnService {
  baseUrl:string = `${environment.apiurl}personne`
  constructor(private http: HttpClient) { }

  getAll(): Observable<Personn[]>{
    return this.http.get<Personn[]>(this.baseUrl);
  }
  create(data : Personn):Observable<Personn>{
    return this.http.post<Personn>(this.baseUrl,data)
    ;
  }

  getByID(id: number):Observable<Personn>{
    return this.http.get<Personn>(`${this.baseUrl}/${id}`);
  }

  deletPersonn(id:number):Observable<string>{
    return this.http.delete<string>(`${this.baseUrl}/${id}`);
  }
  updatePersonn(id :number, personnDto : PersonDto):Observable<Personn>{
    return this.http.put<Personn>(`${this.baseUrl}/${id}`,personnDto);
  }

}
