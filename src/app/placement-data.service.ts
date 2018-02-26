import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PlacementDataService {

  constructor(private http: HttpClient) { }

  addPlacementData(placementData:any){
   this.http.post("http://192.1.200.134:3333/placementData", placementData).subscribe((res:Response)=>{
          console.log("Added");
    });
  }
}
