import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () => import('./views/home/home.component').then((c) => c.HomeComponent),
	},
	{
		path: 'projetos',
		loadComponent: () => import('./views/projects/projects.component').then((c) => c.ProjectsComponent),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'home',
	},
];
