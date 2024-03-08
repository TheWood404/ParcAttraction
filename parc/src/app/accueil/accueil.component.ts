import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { CritiqueInterface } from '../Interface/critique.interface';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule, FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(public attractionService: AttractionService)
  {}
  
  //public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()
  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttractionVisible();

  public attractionid: number = 0;
  public nom: string = "";
  public prenom: string = "";
  public critique: string = "";
  public note: number = 0;

  submitCritique( attractionid: number, nom: string, prenom: string, critique: string, note: number) {
    const critiquedetail : CritiqueInterface = {
      critique_id: null,
      attraction_id: attractionid,
      nom: nom,
      prenom: prenom,
      critique: critique,
      note: note
    }
    
    this.attractionService.AddCritique(critiquedetail).subscribe(

      (data) => {
        console.log(data);
      }
    );
  }


}
