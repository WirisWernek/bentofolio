import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.scss',
})
export class TecnologiasComponent {
  tecnologias$ = new BehaviorSubject(this.getTecnologias());

  getTecnologias() {
    return [
      { name: 'Angular', logo: 'angular.png' },
      { name: 'React', logo: 'react.png' },
      { name: 'Vue', logo: 'vue.png' },
      { name: 'Ionic', logo: 'ionic.png' },
      { name: 'Flutter', logo: 'flutter.png' },
      { name: 'React Native', logo: 'react-native.png' },
      { name: 'Node.js', logo: 'nodejs.png' },
      { name: 'Django', logo: 'django.png' },
      { name: 'Laravel', logo: 'laravel.png' },
      { name: 'Spring', logo: 'spring.png' },
      { name: 'Express', logo: 'express.png' },
      { name: 'Spring', logo: 'spring.png' },
      { name: 'Express', logo: 'express.png' },
      { name: 'Spring', logo: 'spring.png' },
      { name: 'Express', logo: 'express.png' },
      { name: 'Laravel', logo: 'laravel.png' },
      { name: 'Spring', logo: 'spring.png' },
      { name: 'Express', logo: 'express.png' },
      { name: 'Spring', logo: 'spring.png' },
      { name: 'Express', logo: 'express.png' },
      { name: 'Spring', logo: 'spring.png' },
      { name: 'Express', logo: 'express.png' },
      
    ];
  }
}
