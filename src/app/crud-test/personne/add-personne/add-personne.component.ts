import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Personn } from 'src/app/models/personn';
import { PersonnService } from 'src/app/services/personn_service/personn.service';
import { PopupService } from 'src/app/services/popup_service/popup.service';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {
  isOpen = false;
  addpersonnForm! :FormGroup;
 
  constructor( private popupService : PopupService,private fb : FormBuilder, private personnService :PersonnService,private toster:ToastrService) { }

  ngOnInit(): void {
    this.popupService.isOpenChanged.subscribe((isOpen :boolean)=>{
      this.isOpen=isOpen;
    });
    this.initAdd();
  }
 
  closePopup() {
    this.popupService.closePopup();
  }

  initAdd(){
    this.addpersonnForm= this.fb.group({
      nom:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
      prenom:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],
      tel:['',Validators.minLength(8)],
      mail:['',[Validators.email]]
      
    })
  }

  onSubmit(){
    if(this.addpersonnForm.valid){
     
      const person: Personn =this.addpersonnForm.value;
      this.personnService.create(person).subscribe((res)=>{
        this.toster.success("Personne add successfully:")
        this.closePopup();
        this.addpersonnForm.reset();
        this.popupService.emitPersonAdded();
       
      },
      (error)=>{
        this.toster.error("Error Add Personne")
      });
          }
  
    }
    
  

}
