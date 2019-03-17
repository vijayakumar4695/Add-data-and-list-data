import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { TwowayComponent } from './twoway/twoway.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TwowayComponent,
    AddComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'index'},
      {path:'index',component:IndexComponent},
      {path:'twoway',component:TwowayComponent}, 
      {path:'add',component:AddComponent},
      {path:'list',component:ListComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
