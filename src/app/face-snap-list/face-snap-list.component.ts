import { Component, OnInit } from '@angular/core'; 
import { FaceSnap } from '../model/face-snap.models';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(){}
  
  ngOnInit(): void {
    this.faceSnaps = [
      {
        title:' Lamborghini',
        description:'My faborite Car!',
        imageUrl:'https://i.pinimg.com/originals/10/0e/bd/100ebd89d5603c71d18e8ed8850c052e.jpg',
        createdDate: new Date(),
        snaps: 100,
        location: 'Paris'
      },
      {
        title:'Three Rocks Montain',
        description:'Un endroit magnifique pour les rendonnées',
        imageUrl:'https://vsegda-pomnim.com/uploads/posts/2022-04/1650920338_20-vsegda-pomnim-com-p-bolshoi-vodorazdelnii-khrebet-foto-21.jpg',
        createdDate:new Date(),
        snaps: 55, 
        location: 'La Montagne'
      },
      {
        title: 'Un bon repas',
        description: 'Que c\'est  bon de manger',
        imageUrl: 'https://avatars.mds.yandex.net/i?id=b218ad6ec11cb5bd919d1e565aa553a2-4034093-images-thumbs&n=13',
        createdDate: new Date(),
        snaps: 50
      }
    ];
 
  }
}
