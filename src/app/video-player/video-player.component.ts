import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  template: `
    <div>
      <iframe #videoFrame [src]="videoUrl" width="560" height="315" frameborder="0" allowfullscreen></iframe>
    </div>
  `,
})
export class VideoPlayerComponent implements AfterViewInit {
  @Input() videoUrl!: string;
  @ViewChild('videoFrame') videoFrame!: ElementRef<HTMLIFrameElement>;

  ngAfterViewInit(): void {
    console.log ("at ngAfterViewInit");
    this.playVideo();
  }

  playVideo(): void {
    const videoElement = this.videoFrame.nativeElement;
    console.log ("at playVideo videoElement = " + videoElement);
    videoElement.src += '?autoplay=1';
  }
}
