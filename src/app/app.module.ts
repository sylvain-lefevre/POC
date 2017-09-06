import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2CompleterModule } from 'ng2-completer';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';
import { HeroService } from './hero.service';
import { LoginComponent } from './login.component';
import { MissionSaisieComponent } from './mission-saisie.component';
import { UserService } from './user.service';
import { NavigationBarItem } from 'typescript';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent,
    AutocompleteComponent,
    MissionSaisieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2CompleterModule,
    NgbModule.forRoot()
  ],
  providers: [
    HeroService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
