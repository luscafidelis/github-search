import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchService } from './services/search/search.service';
import { FindService } from './services/find/find.service';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    SearchboxComponent,
    ProfileComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchService, FindService],
  bootstrap: [AppComponent]
})
export class AppModule { }
