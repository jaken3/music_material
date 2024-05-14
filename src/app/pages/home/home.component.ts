import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { Ivideo } from '../../core/models/video';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, YouTubePlayer, YouTubePlayerModule, CommonModule ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  videos:Ivideo[];

  constructor(){
    this.videos = [
      {idVideo:"uG2rGk-sFkE", title:'Todo acabo', lirycs:'texto'},
      {idVideo:"miAcR0rgHY4",title:'un textp ', lirycs:'texto'},
      {idVideo:'miAcR0rgHY4',title:'un ', lirycs:'texto'},
    ]
  }
}
