import { Injectable } from '@angular/core';
import { CategoryModel } from "../Model/category.model";
import { JobModel } from "../Model/job.model";
import { EventEmitter } from '@angular/core/';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CategoryService {

  /*private categories: CategoryModel[] = [
    new CategoryModel('Engineering', [
        new JobModel('Data Analyst', 'BE/ME', 'Java,Angular,Spring,MongoDB', 'Not Required'),
        new JobModel('Dev Ops Engineer', 'BE/ME', 'Java,Angular,Spring,MongoDB', '2+'),
        new JobModel('Quality Assurance', 'BE/ME', 'Java,Angular,Spring,MongoDB', 'Not Required'),
    ]),
    new CategoryModel('Design', [
        new JobModel('Data Analyst', 'BE/ME', 'Java,Angular,Spring,MongoDB', 'Not Required'),
        new JobModel('Dev Ops Engineer', 'BE/ME', 'Java,Angular,Spring,MongoDB', '2+'),
        new JobModel('Quality Assurance', 'BE/ME', 'Java,Angular,Spring,MongoDB', 'Not Required'),
    ]),
    new CategoryModel('Business Development',[
        new JobModel('Data Analyst', 'BE/ME', 'Java,Angular,Spring,MongoDB', 'Not Required'),
        new JobModel('Dev Ops Engineer', 'BE/ME', 'Java,Angular,Spring,MongoDB', '2+'),
        new JobModel('Quality Assurance', 'BE/ME', 'Java,Angular,Spring,MongoDB', 'Not Required'),
    ])
];*/
  // private categories =[];

  getCategories() {
    return this.http.get<CategoryModel[]>("http://192.1.200.134:2222/categories");
  }

  addCategory(value: string, job: string, qualification: string, skills: string, experience: string) {
    const cm: CategoryModel = new CategoryModel('', value, [new JobModel(job, qualification, skills, experience)]);
    return this.http.post<CategoryModel>("http://192.1.200.134:2222/categories", cm);
  }

  updateCategory(categoryModel: CategoryModel) {
    return this.http.put<CategoryModel>("http://192.1.200.134:2222/categories/" + categoryModel.id, categoryModel);
  }

  addJobByCategory(categoryList: CategoryModel[], category: CategoryModel, jobTitle: string, jobQualification: string, jobSkills: string, jobExperience: string) {
    //const cm:CategoryModel=new CategoryModel(category.id,category.name,[new JobModel(jobTitle,jobQualification,jobSkills,jobExperience)]);
    console.log(category.id);
    for (let i = 0; i < categoryList.length; i++) {
      if (category.id == categoryList[i].id) {
        categoryList[i].jobs.push(new JobModel(jobTitle, jobQualification, jobSkills, jobExperience));
        return this.http.put<JobModel>("http://192.1.200.134:2222/categories/" + category.id, categoryList[i]);
      }
    }
  }

  deleteCategoryById(categoryId: string) {
    return this.http.delete<CategoryModel>("http://192.1.200.134:2222/categories/" + categoryId);
  }

  deleteJobById(categoryList: CategoryModel[], i: number, k: number) {
   
      categoryList[i].jobs.splice(k, 1);  
      return this.http.put<JobModel>("http://192.1.200.134:2222/categories/" + categoryList[i].id, categoryList[i]);
    
  }

  editJob(categoryList: CategoryModel[], i: number, k: number, newJobTitle: string, newJobQualification: string, newJobSkills: string, newJobExperience: string) {
    categoryList[i].jobs[k] = new JobModel(newJobTitle, newJobQualification, newJobSkills, newJobExperience);
    return this.http.put<JobModel>("http://192.1.200.134:2222/categories/" + categoryList[i].id, categoryList[i]);
  }

  constructor(private http: HttpClient) { }

  onSubmit(value){

    this.http.post("http://192.1.200.134:5555/applicantsData", value).subscribe((res:Response)=>{
          console.log("Added");
    });
  }

}
