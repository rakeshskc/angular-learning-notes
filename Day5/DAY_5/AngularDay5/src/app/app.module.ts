import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TimeService} from './time.service';
import {DataService} from './data.service';
import { FormsModule } from '@angular/forms';

import {NameService} from './name.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { MyHighLightDirective } from './my-high-light.directive';
import { MyIfDirective } from './my-if.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MyHighLightDirective,
    MyIfDirective,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TimeService,DataService,NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
