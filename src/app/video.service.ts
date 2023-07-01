import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private s3BucketUrl = 'https://test-soubikas-youtube-videos.s3.amazonaws.com/';

  constructor() { }

  async fetchVideoUrlsFromFile(fileUrl: string): Promise<string[]> {
    console.log ("at fetchVideoUrlsFromFile with " + fileUrl);
    const response = await axios.get(fileUrl);
    const urls = response.data.split('\n').filter(Boolean);
    console.log ("at fetchVideoUrlsFromFile with urls" + urls);
    return urls;
  }
}
