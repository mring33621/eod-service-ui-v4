import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import {RouterModule, Routes} from "@angular/router";
import {HelloWorldComponent} from "./hello-world/hello-world.component";
import {MarketDataComponent} from "./market-data/market-data.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'hello-world',
    component: HelloWorldComponent
  },
  {
    path: 'market-data',
    component: MarketDataComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
