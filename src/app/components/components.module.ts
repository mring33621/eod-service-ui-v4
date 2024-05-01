import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { MarketDataComponent } from '../market-data/market-data.component';

@NgModule({
  declarations: [
    HelloWorldComponent,
    MarketDataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
