import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name!: string;
  speed!: number;
  model!: string;
  colors!: Colors;
  options!:string[];
  isEdit:boolean=false;
  editText:string='ShowEdit';

  constructor() { }

  ngOnInit(): void {
    this.name='Audi';
    this.speed=235;
    this.model='RS8';
    this.colors={
      car:'White',
      salon:'Black',
      wheels:'Silver',
    };
    this.options=["ABS","Auto parking", "Auto drive"]
  }

  showEdit(){
    this.isEdit=!this.isEdit;
    if(this.isEdit){
      this.editText="Close edit"
    }else{
      this.editText="Show edit"
    }
  }

  addOpt(option:any){
      this.options.unshift(option);
      return false;
  }
  deleteOpt(option:any){
    for(let i=0;i<this.options.length; i++){
      if(this.options[i]==option){
        this.options.splice(i, 1);
        break;
      }
    }
  }
  carSelect(carName:string){
    if(carName=='bmw'){
      this.name='BMW';
      this.speed=280;
      this.model='GL15';
      this.colors={
        car:'Purple',
        salon:'White',
        wheels:'None',
      };
      this.options=["ABS", "Auto drive"]
    }
    if(carName=='audi'){
      this.name='Audi';
      this.speed=235;
      this.model='RS8';
      this.colors={
        car:'White',
        salon:'Black',
        wheels:'Silver',
      };
      this.options=["ABS","Auto parking", "Auto drive"]
    }
    if(carName=='mercedes'){
      this.name='Mercedes';
      this.speed=210;
      this.model='CL5';
      this.colors={
        car:'Black',
        salon:'Gray',
        wheels:'white',
      };
      this.options=["ABS","Auto parking", "Auto drive", "Massage"]
    }
    
  }
}
interface Colors{
  car:string,
  salon:string,
  wheels:string
}
