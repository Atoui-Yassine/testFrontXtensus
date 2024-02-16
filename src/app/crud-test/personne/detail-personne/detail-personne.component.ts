import { Component, OnInit } from '@angular/core';
import { Personn } from 'src/app/models/personn';
import { PersonnGetIDService } from 'src/app/services/personn_service/personn-get-id.service';
import { PersonnService } from 'src/app/services/personn_service/personn.service';
import { PopupService } from 'src/app/services/popup_service/popup.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  isOpendetail = false;
  personnId: number | null = null;
  personne? :Personn;
  constructor( private popupService : PopupService, private getPersonnId: PersonnGetIDService,private personnService:PersonnService) { }

  ngOnInit(): void {
    this.popupService.isOpenDetail.subscribe((isOpen :boolean)=>{
      this.isOpendetail=isOpen;
      
     
      
    });
    this.getPersonnId.getSelectedPersonnId().subscribe((personnId)=>{
      this.personnId=personnId;
      this.personnDetail();
    });
   
    
  
    
  }

  closePopup() {
    this.popupService.closePopupDetail();
    
  }
  
  personnDetail():void{
    console.log("llllll"+this.personnId )
   if(this.personnId !=null){
    this.personnService.getByID(this.personnId).subscribe((res)=>{
      console.log("iiiii"+res)
        this.personne=res;
    });

   }
  }

}
