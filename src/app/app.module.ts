import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { DesignsComponent } from './designs/designs.component';
import {
  MdButtonModule,
  MdListModule,
  MdTabsModule,
  MdDialogModule,
  MdInputModule
} from '@angular/material';
import { CarouselModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AosToken, aos } from './aos';
import { ParticlesModule } from 'angular-particle';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'designs', component: DesignsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    DesignsComponent
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
    CarouselModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    { provide: AosToken, useValue: aos }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
