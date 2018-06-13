import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectTypesComponent } from './project-types/project-types.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'all-projects',
    component: AllProjectsComponent
  },
  {
    path: 'create-project',
    component: CreateProjectComponent
  },
  {
    path: 'project-types',
    component: ProjectTypesComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
