import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {emptyPageable, Pageable} from "../../types";

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {

  @Input() paginator: Pageable<any> = emptyPageable([]);
  protected paginatorPages: number[] = [];

  private pagesToShow = 3;
  private from: number = 0;
  private until: number = 0;


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.from = Math.min(Math.max(1, this.paginator.number - (this.pagesToShow-1)), this.paginator.totalPages - this.pagesToShow);
    this.until = Math.max(Math.min(this.paginator.totalPages, this.paginator.number + this.pagesToShow), this.pagesToShow+1);


    let nrElementsOfPaginator = 0;
    if (this.paginator.totalPages > this.pagesToShow) {
      nrElementsOfPaginator = this.until - this.from + 1;
    } else {
      nrElementsOfPaginator = this.paginator.totalPages;
    }

    this.paginatorPages = new Array(nrElementsOfPaginator)
      .fill(0)
      .map((_, index) => index + this.from);
  }


}
