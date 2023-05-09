import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../model/face-snap.models';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;//Ejecte depuis l'exterieur d'un component 
//Input doit être ajouté aux imports depuis  @angular/core
  buttonText !: string;
  
  ngOnInit(){
    this.buttonText='like';
  }

  onSnap(){
    if(this.buttonText==='like'){
      this.faceSnap.snaps++;
      this.buttonText='liked';
    }else{
      this.faceSnap.snaps--;
      this.buttonText='like';
    }
  }

}
