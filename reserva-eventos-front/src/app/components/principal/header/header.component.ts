import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user: string = '';
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.getUser();
  }

  logout() {
    const token = this.authService.getToken();

    if (token != null) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
  getUser() {
    const username = this.authService.getUsername();
    this.user = username ?? '';
  }
}
