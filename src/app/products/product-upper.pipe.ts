import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"myPipe"
})

export class ProductUpperPipe implements PipeTransform{
    transform(value:string){
        value=value.toUpperCase();
        return value
    }
}