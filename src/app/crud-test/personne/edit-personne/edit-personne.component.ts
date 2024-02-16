import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Gouvernement } from 'src/app/models/gouvernement';
import { GouvernementService } from 'src/app/services/gouvernement_service/gouvernement.service';
import { PersonnGetIDService } from 'src/app/services/personn_service/personn-get-id.service';
import { PersonnService } from 'src/app/services/personn_service/personn.service';
import { PopupService } from 'src/app/services/popup_service/popup.service';

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {
  isOpenEdit = false;
  personneForm! :FormGroup;
  allGouvernement :Gouvernement[]=[];
  personnId: number | null = null;

  constructor( private popupService : PopupService,private fb : FormBuilder, private getIDService :PersonnGetIDService,private  gouvernementService :GouvernementService,private personnService: PersonnService,private toster:ToastrService) { }

  ngOnInit(): void {
    this.popupService.isOpenEdit.subscribe((isOpen :boolean)=>{
      this.isOpenEdit=isOpen;
    });
    this.getIDService.getSelectedPersonnId().subscribe((id)=>{
      this.personnId=id;
    });
    this.initAdd();
    this.getAllGouvernement();
  }


  closePopup() {
    this.popupService.closePopupedit();
  }
  initAdd(){
    this.personneForm= this.fb.group({
      nom:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
      prenom:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
      tel:['',Validators.minLength(8)],
      mail:['',[Validators.email]],
      gouvernementID:['']
    })
  }

  getAllGouvernement():void{
    this.gouvernementService.getAll().subscribe((data)=>{
      this.allGouvernement=data;
    })
  }
  onSubmit(){
    
    if(this.personnId != null){
      const personDto=this.personneForm.value;
      this.personnService.updatePersonn(this.personnId,personDto).subscribe((res)=>{
        this.toster.success('Personne updated successfully:')
        this.closePopup();
        this.personneForm.reset;
        this.popupService.emitPersonAdded();

      },
      (error)=>{
        this.toster.error("Error updating Personne ")
      }
      )
    }

    
  }
}
