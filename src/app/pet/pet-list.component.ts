import { Component, OnInit } from '@angular/core';

import { AppPetService } from '../shared/pet.service'
import { Pet } from '../shared/pet.project';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  providers: [AppPetService]
})
export class PetListComponent implements OnInit {

  constructor(public petService: AppPetService,public toastr : ToastrService) { }

  ngOnInit() {
    this.petService.getPetList();
    console.log(this.petService.petList);
  }

  showForEdit(pet: Pet) {
    this.petService.selectedPet = Object.assign({}, pet);
  }


  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.petService.deletePet(id)
        .subscribe(x => {
          this.petService.getPetList();
          this.toastr.warning("Deleted Successfully","Pet Register");
        })
    }
  }
}
