import { Component } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let videoUrl of videoUrls">
      <app-video-player [videoUrl]="videoUrl"></app-video-player>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soubikas-youtube-autoplay-project';

  videoUrls: string[] = [];

  constructor(private videoService: VideoService) {}

  async autoplayVideos(): Promise<void> {
    const fileUrl = 'file_list.rtf'; // URL of your text file in the S3 bucket
    this.videoUrls = await this.videoService.fetchVideoUrlsFromFile(fileUrl);
  }
}
