import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-placement-data',
  templateUrl: './placement-data.component.html',
  styleUrls: ['./placement-data.component.css']
})
export class PlacementDataComponent implements OnInit {

  private gridOptions: GridOptions;
private rowSelection;
private autoGroupColumnDef;
private gridApi;
private gridColumnApi;


constructor(private http: HttpClient) {
this.gridOptions = <GridOptions>{
floatingFilter: true,
columnDefs:
[
{
headerName: "Institute Details",
children: [
{
headerName: "Institute",
field: "nameOfInstitute",
headerCheckboxSelection: true,
headerCheckboxSelectionFilteredOnly: true,
checkboxSelection: true,
minWidth: 200,

},
{ headerName: "University", field: "nameOfUniversity", minWidth: 120 },
{ headerName: "Degree", field: "degree", minWidth: 100 },
{ headerName: "Year Passing", field: "yearOfPassing", minWidth: 80 },
{ headerName: "website", field: "exp", minWidth: 100 },
{ headerName: "Email", field: "city", minWidth: 100 }
]
},
{
headerName: "Placement Officer",
children: [
{ headerName: 'Name', field: 'officername', minWidth: 100 },
{ headerName: 'Contact', field: 'offi', minWidth: 90, },
{ headerName: 'Email', field: 'country', minWidth: 100 }
]
}
],
rowSelection: "multiple",

enableColResize: true,


}

}
onGridReady(params) {
this.gridApi = params.api;
this.gridColumnApi = params.columnApi;
this.http
.get("http://192.1.200.134:3333/placementData")
.subscribe(data => {
params.api.setRowData(data);
});
this.gridApi.sizeColumnsToFit();
}

ngOnInit() {
}


}
