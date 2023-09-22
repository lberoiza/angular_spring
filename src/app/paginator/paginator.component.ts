import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {emptyPageable, Pageable} from "../../types";

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() paginator: Pageable<any> = emptyPageable([]);
  protected paginatorPages: number[] = [];

  private pagesToShowBeforeAndAfterCurrentPage = 2;
  private from: number = 0;
  private until: number = 0;


  constructor() {
  }

  ngOnInit(): void {
    this.updatePaginatorPages();
  }


  ngOnChanges(changes: SimpleChanges): void {
    const updatedPaginator = changes['paginator'];
    if (updatedPaginator.previousValue) {
      this.updatePaginatorPages();
    }
  }

  private updatePaginatorPages(): void {
    const currentPage = this.paginator.number;
    const possibleFrom = Math.min(currentPage, this.paginator.totalPages - this.pagesToShowBeforeAndAfterCurrentPage - 1);
    const possibleUntil = Math.max(currentPage, this.pagesToShowBeforeAndAfterCurrentPage);

    this.from = Math.max(1, (possibleFrom + 1) - this.pagesToShowBeforeAndAfterCurrentPage);
    this.until = Math.min(this.paginator.totalPages, possibleUntil + this.pagesToShowBeforeAndAfterCurrentPage + 1);

    this.paginatorPages = new Array(this.until - this.from + 1)
      .fill(0)
      .map((_, index) => index + this.from);
  }


}
