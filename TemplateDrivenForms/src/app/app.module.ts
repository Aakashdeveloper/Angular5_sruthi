import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'


import { AppComponent } from "./app.component";
import { FormPoster } from "../services/form-poster.service";

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations:[
        AppComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        FormPoster
    ]
})

export class AppModule{}