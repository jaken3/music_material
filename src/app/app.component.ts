import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'portafolio_material';
}
