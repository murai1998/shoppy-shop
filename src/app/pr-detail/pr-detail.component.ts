import { Component, OnInit, Input  } from '@angular/core';
import {List} from "../pr-list/list";

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})
export class PrDetailComponent implements OnInit {
  @Input() product?: List;
  constructor() { }

  ngOnInit(): void {
  }

}
