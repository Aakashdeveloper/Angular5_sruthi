import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ProductService } from "./products/product.service";
import { Notfound } from "./shared/notFound.component";
import { OrderComponent } from "./orders/order.component";
import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./products/products.module";

@NgModule({
    //We decl modules here
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'orders', component:OrderComponent},
            {path:'home', component:HomeComponent},
            {path:'',redirectTo:'home', pathMatch:'full'},
            {path:'**', component:Notfound}
        ])
    ],
    //We will decl component & pipe
    declarations:[
        AppComponent,
        Notfound,
        OrderComponent,
        HomeComponent

    ],
    //Conation only main component
    bootstrap:[
        AppComponent
    ],
    //Service decl here
    providers:[]
})

export class AppModule{

}