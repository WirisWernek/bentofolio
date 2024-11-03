import { Component, inject } from '@angular/core';
import { NgbDropdownModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
	private readonly modalService = inject(NgbModal);

	open() {
		const modalRef = this.modalService.open(MenuComponent, {
			centered: true,
			
		});
		modalRef.componentInstance.name = 'World';
	}
}
