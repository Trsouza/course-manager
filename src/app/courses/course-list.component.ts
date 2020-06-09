import { CourseService } from './course.service';
import { Course } from './course-model';
import { Component, OnInit } from '@angular/core';

@Component({
    // selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

    _courses: Course[] = [];
    _filterBy: string;
    filteredCourses: Course[] = [];

    constructor(private courseService: CourseService) {

    }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    delete(courseId: number): void {
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deletado com Sucesso');
                this.retrieveAll();
            },
            error: err => console.log('Error ao excluir', err)
        })
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}
