import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  review = '';
  data: any;
  res: any;
  intent: Object;
  primary: Object;
  secondary: Object[];

constructor(private http: HttpClient) { }

   onClickMe(data) {
    this.review = data;
    this.http.post('http://192.168.1.79:3000/pages/home', {comment: this.review}).subscribe(res => {
      this.intent = res.intent;
      this.primary = res.primary;
      this.secondary = res.secondary[0];
      console.log(res.secondary[0].length);
      console.log(this.secondary.length);
    });
  }
}
