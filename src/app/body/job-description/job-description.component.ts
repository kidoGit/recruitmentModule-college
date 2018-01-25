import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})


export class JobDescriptionComponent implements OnInit {

  position: string;
  abc:string="abc";

  constructor(private route: ActivatedRoute) {
    this.position=this.route.snapshot.paramMap.get('position');
    console.log("job dis" +this.position);
   }

  ngOnInit() {
  }

}
