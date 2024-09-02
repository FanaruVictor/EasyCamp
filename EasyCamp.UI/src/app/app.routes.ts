import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'feedback',
    loadChildren: () =>
      import('./feedback/feedback.module').then(m => m.FeedbackModule),
  },
  {
    path: 'administrative',
    loadChildren: () => import('./administrative/administrative.module').then(m => m.AdministrativeModule)
  },
  {
    path: 'program',
    loadChildren: () => import('./program/program.module').then(m => m.ProgramModule)
  },
  {
    path: 'visual',
    loadChildren: () => import('./visual/visual.module').then(m => m.VisualModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  },
];
