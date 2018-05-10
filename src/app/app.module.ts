import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { CarComponent } from "./car.component";
import { ProductComponent } from "./products/products.component";
import { ProductUpperPipe } from "./products/product-upper.pipe";
import { ProductFilter } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductService } from "./products/product.service";
import { Notfound } from "./shared/notFound.component";
import { ProductDetail } from "./products/product-detail.component";
import { OrderComponent } from "./orders/order.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    //We decl modules here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products', component:ProductComponent},
            {path:'products/:id',component:ProductDetail},
            {path:'orders', component:OrderComponent},
            {path:'home', component:HomeComponent},
            {path:'',redirectTo:'home', pathMatch:'full'},
            {path:'**', component:Notfound}
        ])
    ],
    //We will decl component & pipe
    declarations:[
        AppComponent,
        CarComponent,
        ProductComponent,
        ProductUpperPipe,
        ProductFilter,
        StarComponent,
        Notfound,
        ProductDetail,
        OrderComponent,
        HomeComponent

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