import { Observable } from 'rxjs';
import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course-model';

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

    course: Course;

    constructor(private activatedRoute: ActivatedRoute,
                private courseService: CourseService){}

    ngOnInit(): void {
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
            next: course => this.course = course,
            error: err => console.log('Erro', err)
        });
    }

    save(): void {
       this.courseService.saveCourse(this.course).subscribe({
        next: course => console.log("Salvo com sucesso"),
        error: err => console.log("Error ao salvar", err)
       })
    }    

    
}