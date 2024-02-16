import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnGetIDService {

  constructor() { }
  private selectedPersonnId: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  setSelectedPersonnId(PersonnId: number): void {
    this.selectedPersonnId.next(PersonnId);
  }

  getSelectedPersonnId(): Observable<number | null> {
    return this.selectedPersonnId.asObservable();
  }

}
