import { Component } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "angular-test-user-datatable",
  templateUrl: "./user-datatable.component.html",
  imports: [MatTableDataSource],
  styleUrls: ["./user-datatable.component.scss"]
})
export class UserDataTableComponent {
  displayedColumns: string[] = ["column1", "column2", "column3"];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
}

const ELEMENT_DATA: Element[] = [
  { column1: "value1", column2: "value2", column3: "value3" },
  { column1: "value4", column2: "value5", column3: "value6" },
  { column1: "value7", column2: "value8", column3: "value9" }
];

interface Element {
  column1: string;
  column2: string;
  column3: string;
}