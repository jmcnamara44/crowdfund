import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectTypesComponent } from './project-types/project-types.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AllProjectsComponent,
    CreateProjectComponent,
    ProjectTypesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
