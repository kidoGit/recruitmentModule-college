import { CategoryService } from './../../services/category-service.service';
import { CategoryModel } from './../../Model/category.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-job-opening',
  templateUrl: './job-opening.component.html',
  styleUrls: ['./job-opening.component.css']
})
export class JobOpeningComponent implements OnInit {


  jobList: CategoryModel[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((res: CategoryModel[]) => {
      this.jobList = res;
    });
  }


}
