import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HelloComponent, WorldComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
