import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private  httpClient:  HttpClient) {}

  public callPost(){
    return this.httpClient.get("http://localhost:3000/posts")
  }
}
