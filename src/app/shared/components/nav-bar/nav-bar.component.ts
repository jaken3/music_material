import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule} from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MediaMatcher } from '@angular/cdk/layout'
import { Menu } from '../../../core/models/menu';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatSidenavModule, MatIconModule, MatMenuModule, 
    MatToolbarModule, MatListModule, RouterOutlet, 
    RouterModule
  ],
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent implements OnDestroy {
  menu: Menu[];
  mobileQuery: MediaQueryList;

  constructor(private cdr: ChangeDetectorRef, private media: MediaMatcher){
    this.mobileQuery = this.media.matchMedia('(min-width:680px)') 
    this.mobileQuery.addEventListener('change',(this.mobileQuery, cdr.detectChanges));
    this.menu=[
      {label:'inicio', icon:'home', link:'home'},
      {label:'contacto', icon:'contacts', link:'contact'},
      {label:'entrevistas', icon:'video_camera_front', link:'interwiews'}
    ]
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.mobileQuery.removeEventListener('change',(this.media, this.cdr.detectChanges));
  }
}
