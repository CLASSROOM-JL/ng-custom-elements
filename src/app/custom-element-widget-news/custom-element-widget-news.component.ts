import { Component, OnInit } from '@angular/core';
import {environment} from "@env";

@Component({
  selector: 'app-custom-element-widget-news',
  templateUrl: './custom-element-widget-news.component.html',
  styleUrls: ['./custom-element-widget-news.component.scss']
})
export class CustomElementWidgetNewsComponent implements OnInit {
  mfUrl:string = environment.widget_url;
  constructor() { }

  ngOnInit(): void {
  }

  onReadFullAction(detail: any) {
    console.log('Event front microfronted => ',detail);
  }
}
