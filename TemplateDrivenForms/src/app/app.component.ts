import {Component} from '@angular/core';
import {Employee} from '../models/employee.model'

@Component({
  selector:'app-form',
  templateUrl:'./app.component.html'
})

export class AppComponent{
 
  langugages = ["NodeJs","AngulaeJs","ReactJs"]

  model = new Employee('John','methew',true,'male','NodeJs')


    firstToUpper(value:string):void{
      if(value.length>0){
        this.model.firstName = value.charAt(0).toUpperCase()+value.slice(1)
      }else{
        this.model.firstName = value
      }
    }
  }


  /*
  ng-pristine ng-untouched  ng-invalid
  ng-dirty    ng-touched    ng-valid
  */