import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { ModalService } from '../app/services/modal.service';
import { CategoryService } from "../app/services/category-service.service";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobOpeningComponent } from './body/job-opening/job-opening.component';
import { LoginComponent } from './body/login/login.component';
import { ModalEditCategoryComponent } from './body/dashboard/modal/modal-edit-category/modal-edit-category.component';
import { AddJobOpeningComponent } from './body/dashboard/add-job-opening/add-job-opening.component';
import { FormComponent } from './body/form/form.component';
import { JobDescriptionComponent } from './body/job-description/job-description.component';

import { ApplicantdataComponent } from './body/dashboard/applicantdata/applicantdata.component';
import { DashboardComponent } from './body/dashboard/dashboard.component';
import { AgGridModule } from "ag-grid-angular";
import { PlacementFormComponent } from './body/placement-form/placement-form.component';

const appRoute: Routes = [
  { path: '', component: JobOpeningComponent },
  { path: 'apply/:position', component: FormComponent },
  { path: 'applyplacement/:position', component: PlacementFormComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '', redirectTo: 'applicantdata', pathMatch: 'full' },
      { path: 'applicantdata', component: ApplicantdataComponent },
      { path: 'managejob', component: AddJobOpeningComponent }
    ]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JobOpeningComponent,
    LoginComponent,
    ModalEditCategoryComponent,
    AddJobOpeningComponent,
    FormComponent,
    JobDescriptionComponent,
    ApplicantdataComponent,
    DashboardComponent,
    PlacementFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    AgGridModule.withComponents([])
  ],
  providers: [
    CategoryService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
