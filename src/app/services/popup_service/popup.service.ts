import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  isOpenChanged = new EventEmitter<boolean>();
  isOpenEdit=new EventEmitter<boolean>();
  isOpenDetail=new EventEmitter<boolean>();
  personAdded: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
  openPopup() {
    
    this.isOpenChanged.emit(true);
  }
  closePopup() {
    this.isOpenChanged.emit(false);
  }
  openPopupEdit(){
    this.isOpenEdit.emit(true);
  }
  openPopupDetail(){
    this.isOpenDetail.emit(true);
  }
  closePopupDetail() {
    this.isOpenDetail.emit(false);
  }
  closePopupedit() {
    this.isOpenEdit.emit(false);
  }
  emitPersonAdded() {
    this.personAdded.emit();
  }
}
