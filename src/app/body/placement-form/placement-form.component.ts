import { PlacementDataService } from './../../placement-data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-placement-form',
  templateUrl: './placement-form.component.html',
  styleUrls: ['./placement-form.component.css']
})
export class PlacementFormComponent implements OnInit {

  position = this.route.snapshot.paramMap.get('position');  
  constructor(private route: ActivatedRoute,private placement_service : PlacementDataService) {

  }

  onSubmit(placement_data){
    this.placement_service.addPlacementData(placement_data);
  }
  ngOnInit() {
    
  }

}
