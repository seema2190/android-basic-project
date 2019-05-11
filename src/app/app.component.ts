import { Component } from '@angular/core';
import { AppService } from './service/app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;

  constructor(private appService: AppService){}

  ngOnInit(){
    this.appService.callPost().subscribe(data => this.data = data);
  }

}
