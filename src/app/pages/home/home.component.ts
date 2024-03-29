import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, YouTubePlayer, YouTubePlayerModule ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  videos:string[];

  constructor(){
    this.videos = ["uG2rGk-sFkE", "uG2rGk-sFkE",]
  }
}
