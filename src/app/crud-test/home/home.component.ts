import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personn } from 'src/app/models/personn';
import { PersonnGetIDService } from 'src/app/services/personn_service/personn-get-id.service';
import { PersonnService } from 'src/app/services/personn_service/personn.service';
import { PopupService } from 'src/app/services/popup_service/popup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allPersonn :Personn[]=[];
  constructor(private popupService :PopupService,private personnService :PersonnService,private personnGetIdService:PersonnGetIDService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllPersonne();
    this.popupService.personAdded.subscribe(() => {
      this.getAllPersonne(); 
    });
  }
 
  openPopup() {
    this.popupService.openPopup();
    
  }
  openPopupEDit(id:number) :void{
    this.popupService.openPopupEdit();
    this.onPersonnClick(id);
  }
  openPopupDetail(id:number) :void{
    this.popupService.openPopupDetail();
    this.onPersonnClick(id);
  }
  
  getAllPersonne():void{
    this.personnService.getAll().subscribe((data)=>{
      this.allPersonn=data;
    })
  }
  onPersonnClick(personnID: number): void {
    this.personnGetIdService.setSelectedPersonnId(personnID);
  }

  deleteByid(id :number):void{
    this.personnService.deletPersonn(id).subscribe((res)=>{
      this.toastr.success('Personne deleted successfully.');
      this.getAllPersonne();
    },
    (error)=>{
      this.toastr.error('Error deleting Personne')
    });
  }
}
