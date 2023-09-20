import {Component, Input, OnInit} from '@angular/core';
import {emptyPageable, Pageable} from "../../types";

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{

  @Input() paginator: Pageable<any> = emptyPageable([]);
  paginatorPages: number[] = [];

  constructor() {
  }

  ngOnInit(){
    this.paginatorPages = new Array(this.paginator.totalPages)
      .fill(0)
      .map((_,index) => index+1);
  }
}
