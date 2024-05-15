import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ivideo} from '../models/video'
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
  export class VideoService extends ApiService {

    constructor(http: HttpClient) {
      super(http)
    }

    getAllVideos(): Observable<Message<Ivideo>> {
      return this.getAll<Message<Ivideo>>('videos/getAll');
    }
  }
