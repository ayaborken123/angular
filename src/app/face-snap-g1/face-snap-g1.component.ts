import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-face-snap-g1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap-g1.component.html',
  styleUrl: './face-snap-g1.component.css'
})
export class FaceSnapG1Component implements OnInit {
  mySnap!:FaceSnap;
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  img!: string;
  buttonText!:string;
  @Input()faceSnap!:FaceSnap;
  ngOnInit():void{
    
    this.buttonText='Oh Snap!';
  }
  onSnap():void{
    if (this.buttonText==='oh snap !'){
      this.faceSnap.snaps++;
      this.buttonText='oops,unSnap';
    }
    else{
      this.faceSnap.snaps--;
      this.buttonText='oh snap!';
    }
  }


} 



