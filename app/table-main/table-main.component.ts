import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableMainDataSource } from './table-main-datasource';

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.css'],
})
export class TableMainComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableMainDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TableMainDataSource(this.paginator, this.sort);
  }
}
