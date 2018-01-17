import { Component } from '@angular/core';
import {AppPetService} from './shared/pet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppPetService]
})
export class AppComponent {
  title = 'app';
}
