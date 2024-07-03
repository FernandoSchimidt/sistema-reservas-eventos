import { Component } from '@angular/core';

import { PrincipalComponent } from './components/principal/principal/principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'reserva-eventos-front';
}
