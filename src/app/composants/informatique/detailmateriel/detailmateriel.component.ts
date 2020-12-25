import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'nej-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean =false;
  identifiant:number;
onClick(){
  this.afficher = !this.afficher;}



materiel: Materiel[] ; 
constructor(private materielServices : MaterielService , private activatedRoute:ActivatedRoute) { }

ngOnInit(): void {
 this.materiel =  this.materielServices.getMateriels() ; 
 this.identifiant = this.activatedRoute.snapshot.params['id'];
}

}

