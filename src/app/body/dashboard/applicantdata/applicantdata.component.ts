import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-applicantdata',
  templateUrl: './applicantdata.component.html',
  styleUrls: ['./applicantdata.component.css']
})
export class ApplicantdataComponent implements OnInit {

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
            headerName: "Name",
            field: "name",
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            checkboxSelection: true,
            minWidth:250,
          
            },
            { headerName: "Position", field: "position", minWidth:120 },
            { headerName: "Email", field: "email",minWidth:180 },
            { headerName: "Employment Status", field: "status",minWidth:160 },
            { headerName: "Experience", field: "exp" , minWidth:100},
            { headerName: "Currunt Location", field: "city" , minWidth:130},
            { headerName: "Home Town", field:"hometown",minWidth:130},
            { headerName: "Contact" , field:"phone", minWidth:130}
        ],
      rowSelection: "multiple",
      
      enableColResize: true

    }

  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http
    .get("http://192.1.200.134:5555/Data")
    .subscribe(data => {
    params.api.setRowData(data);
    });
    this.gridApi.sizeColumnsToFit();
    }

  ngOnInit() {
  }

}
