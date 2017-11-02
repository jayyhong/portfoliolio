import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { DesignsComponent } from './designs/designs.component';
import { AnimationsComponent } from './animations/animations.component';

import {
  MdButtonModule,
  MdListModule,
  MdTabsModule,
  MdDialogModule,
  MdInputModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AosToken, aos } from './aos';
import { ParticlesModule } from 'angular-particle';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'designs', component: DesignsComponent},
  { path: 'animations', component: AnimationsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    DesignsComponent,
    AnimationsComponent
  ],
  imports: [
    BrowserModule,
    ParticlesModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    MdButtonModule,
    MdListModule,
    MdTabsModule,
    MdDialogModule,
    MdInputModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: AosToken, useValue: aos },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
