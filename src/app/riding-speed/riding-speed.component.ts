import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-riding-speed',
  templateUrl: './riding-speed.component.html',
  styleUrls: ['./riding-speed.component.css']
})
export class RidingSpeedComponent implements OnInit {
myForm : any ;
riding_speed : any  ;
constructor(private shared : SharedService){

}


ngOnInit(): void {
}
setSlow(){
  this.riding_speed = "slow"
}
setFast(){
  this.riding_speed = "fast"
}

sendRiding(){
  this.shared.setRiding(this.riding_speed)
}



}
