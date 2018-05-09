import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { CarComponent } from "./car.component";
import { ProductComponent } from "./products/products.component";
import { ProductUpperPipe } from "./products/product-upper.pipe";
import { ProductFilter } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";

@NgModule({
    //We decl modules here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    //We will decl component & pipe
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductUpperPipe,
        ProductFilter,
        StarComponent
    ],
    //Conation only main component
    bootstrap:[
        AppComponent
    ],
    //Service decl here
    providers:[
        ProductService
    ]
})

export class AppModule{

}