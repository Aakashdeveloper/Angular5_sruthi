import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CarComponent } from "./car.component";
import { ProductComponent } from "./products/products.component";
import { ProductUpperPipe } from "./products/product-upper.pipe";
import { ProductFilter } from "./products/product-filter.pipe";

@NgModule({
    //We decl modules here
    imports:[
        BrowserModule,
        FormsModule
    ],
    //We will decl component & pipe
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductUpperPipe,
        ProductFilter
    ],
    //Conation only main component
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{

}