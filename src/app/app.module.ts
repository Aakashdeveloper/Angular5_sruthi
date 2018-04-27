import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { CarComponent } from "./car.component";
import { ProductComponent } from "./products/products.component";

@NgModule({
    //We decl modules here
    imports:[
        BrowserModule
    ],
    //We will decl component & pipe
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent
    ],
    //Conation only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{

}