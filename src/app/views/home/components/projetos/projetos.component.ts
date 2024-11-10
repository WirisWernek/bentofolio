import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-projetos',
	standalone: true,
	imports: [],
	templateUrl: './projetos.component.html',
	styleUrl: './projetos.component.scss',
	providers: [],
})
export class ProjetosComponent implements OnInit, OnDestroy {
	counter = 0;
	interval: any;

	ngOnInit(): void {
		this.interval = setInterval(() => {
			if (this.counter <= 24) {
				this.counter++;
			} else {
				this.counter = 0;
			}
		}, 5000);
	}

	ngOnDestroy(): void {
		clearInterval(this.interval);
	}
}
