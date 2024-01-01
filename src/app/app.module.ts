import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendanceContainerComponent } from './utils/widgets/attendance-container/attendance-container.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AttendanceContainerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
