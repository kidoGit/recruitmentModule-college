import { CategoryService } from './../../services/category-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  position = this.route.snapshot.paramMap.get('position');
  isFresher = false;
  isWorking = false;
  isOthers = false;
  selectedStatus = 'Fresher';
  data=[1];

  status: string[] = [
    'Fresher',
    'Freelancer',
    'Working',
    'Others'
  ];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit() {
    this.changeStatus();
  }

  changeStatus() {
    if (this.selectedStatus == 'Fresher') {
      this.isFresher = true;
      this.isWorking = false;
      this.isOthers = false;
    } else if (this.selectedStatus == 'Working' || this.selectedStatus == 'Freelancer') {
      this.isWorking = true;
      this.isFresher = false;
      this.isOthers = false;
    } else {
      this.isOthers = true;
      this.isWorking = false;
      this.isFresher = false;
    }
  }

  onSubmit = function (value) {
    this.categoryService.onSubmit(value);
  }
  onAdd(){
    this.data.push(1);
  }
}
