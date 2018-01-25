import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placement-form',
  templateUrl: './placement-form.component.html',
  styleUrls: ['./placement-form.component.css']
})
export class PlacementFormComponent implements OnInit {

  position = this.route.snapshot.paramMap.get('position');  
  constructor(private route: ActivatedRoute) {

  }


  ngOnInit() {
    console.log("reached in placement" + this.position);
  }

}
