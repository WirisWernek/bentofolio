import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProjectCardComponent, AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

	projects$ = new BehaviorSubject(this.getProjects())

	private getProjects() {
		return [
			{
				image: 0,
				name: 'Project 1',
			},
			{
				image: 1,
				name: 'Project 2',
			},
			{
				image: 2,
				name: 'Project 3',
			},
			{
				image: 3,
				name: 'Project 4',
			},
			{
				image: 4,
				name: 'Project 5',
			},
			{
				image: 5,
				name: 'Project 6',
			},
			{
				image: 6,
				name: 'Project 7',
			},
			{
				image: 7,
				name: 'Project 8',
			},
			{
				image: 8,
				name: 'Project 9',
			},
			{
				image: 9,
				name: 'Project 10',
			},
			{
				image: 10,
				name: 'Project 11',
			},
			{
				image: 11,
				name: 'Project 12',
			},
			{
				image: 12,
				name: 'Project 13',
			},
			{
				image: 13,
				name: 'Project 14',
			},
			{
				image: 14,
				name: 'Project 15',
			},
			{
				image: 15,
				name: 'Project 16',
			},
			{
				image: 16,
				name: 'Project 17',
			},
			{
				image: 17,
				name: 'Project 18',
			},
			{
				image: 18,
				name: 'Project 19',
			},
			{
				image: 19,
				name: 'Project 20',
			},
			{
				image: 20,
				name: 'Project 21',
			},
			{
				image: 21,
				name: 'Project 22',
			},
			{
				image: 22,
				name: 'Project 23',
			},
			{
				image: 23,
				name: 'Project 24',
			},
			{
				image: 24,
				name: 'Project 25',
			}
		]
	}

}
