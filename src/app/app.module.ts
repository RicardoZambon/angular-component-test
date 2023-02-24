import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }