import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStudent} from './shared/models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientApp';
}
