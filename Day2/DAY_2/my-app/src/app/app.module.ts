import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Child3Component } from './child3/child3.component';
import { FormsModule } from '@angular/forms';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { EventExampleComponent } from './event-example/event-example.component';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { ReverseStrPipe } from './reverse-str.pipe';
import { MysqrtPipe } from './mysqrt.pipe';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { SearchFilterPipe } from './search-filter.pipe';
import { TempConverterPipe } from './temp-converter.pipe';
import { WordcountPipe } from './wordcount.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@NgModule({
  declarations: [
    AppComponent,
 
    WorldComponent,
      LifecyclehooksComponent,
      ParentComponent,
      ChildComponent,
      Parent2Component,
      Child2Component,
      Parent3Component,
      Child3Component,
      NgIfExampleComponent,
      EventExampleComponent,
      PipeExampleComponent,
      ReverseStrPipe,
      MysqrtPipe,
      ExponentialStrengthPipe,
      SearchFilterPipe,
      TempConverterPipe,
      WordcountPipe,
      PageNotFoundComponent,
 
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
       path:'event',
       component:EventExampleComponent 
      },
      {
        path:'pipe',
        component:PipeExampleComponent
      },
      
      {
        path:"parenttochild1",
        component:ParentComponent
      },
      
      {
        path:'**',
        component:PageNotFoundComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
