import { JobModel } from './../../../Model/job.model';
import { ModalService } from './../../../services/modal.service';
import { CategoryService } from './../../../services/category-service.service';
import { Subscription } from 'rxjs/Subscription';
import { CategoryModel } from './../../../Model/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-job-opening',
  templateUrl: './add-job-opening.component.html',
  styleUrls: ['./add-job-opening.component.css']
})
export class AddJobOpeningComponent implements OnInit {

  // categories to be displayed
  categoryList: CategoryModel[];

  /** 
   * subscriptions for ModalEditCategoryComponent to
   * send and receive the data to Modal
   */
  categoryModelSubscriber: Subscription;
  categoryIdSubscriber: Subscription;

  /**
   * categoryService for http purposes
   * modalService for send and receive the data to Modal
   */
  constructor(private categoryService: CategoryService, private modalService: ModalService) { }

  ngOnInit() {
    // get categoryList through http
    this.categoryService.getCategories().subscribe((res: CategoryModel[]) => {
      this.categoryList = res;
    });

    // update the categoryList if categoryName has been modified
    this.categoryModelSubscriber = this.modalService.categoryBackwardModel$
      .subscribe((receivedCategoryModel: CategoryModel) => {
        for (let i = 0; i < this.categoryList.length; i++) {
          if (this.categoryList[i].id == receivedCategoryModel.id) {
            this.categoryList[i] = receivedCategoryModel;
            break;
          }
        }
      });

    // update the categoryList if category has been deleted
    this.categoryIdSubscriber = this.modalService.categoryBackwardId$
      .subscribe(() => {
        this.categoryService.getCategories().subscribe((res: CategoryModel[]) => {
          this.categoryList = res;
        });
      });
  }

  // send the category name for modification to the modal
  postCategoryName(categoryModel: CategoryModel) {
    this.modalService.forwardCategoryName(categoryModel);
  }

  addCategory(value: string, job: string, qualification: string, skills: string, experience: string) {
    this.categoryService.addCategory(value, job, qualification, skills, experience)
      .subscribe((cm: CategoryModel) => {
        console.log('In next method');
        this.categoryList.push(cm);
      }, (err) => {
        console.log("There was an error! => " + err.message);
      });
  }

  addNewJob(category: CategoryModel, jobTitle, jobQualification, jobSkills, jobExperience) {
    this.categoryService.addJobByCategory(this.categoryList, category, jobTitle, jobQualification, jobSkills, jobExperience).subscribe(
      (data: JobModel) => {
        //const cm: CategoryModel = new CategoryModel(category.id,category.name, [new JobModel(data.jobTitle, data.qualification, data.skills, data.experience)]);
        //this.categoryList.push(cm);
      }
    );
  }

  deleteJobById(i: number, k: number) {
    this.categoryService.deleteJobById(this.categoryList, i, k).subscribe(
      () => {
        console.log("Deleted");
      }
    );
  }

  editJob(i: number, k: number, newJobTitle: string, newJobQualification: string, newJobSkills: string, newJobExperience: string) {
    this.categoryService.editJob(this.categoryList, i, k, newJobTitle, newJobQualification, newJobSkills, newJobExperience).subscribe(
      () => {
        console.log("updated");
      }
    );
  }
}
