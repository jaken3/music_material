import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { Ivideo } from '../../core/models/video';
import { VideoService } from '../../core/services/video.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, YouTubePlayer, YouTubePlayerModule, CommonModule],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit{

  videos: Ivideo[] | undefined;

  constructor(private videoService: VideoService) {
    this.videos = []
  }

  ngOnInit(): void {
    this.getData()
    
  }

  getData(): void {
    this.videoService.getAllVideos().subscribe({
      next: (data) => {
        this.videos = data.model
      }
    })
  }

}
