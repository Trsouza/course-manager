import { Course } from './course-model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular Forms',
                imageUrl: '/assets/images/forms.png',
                price: 20,
                code: 'hfkshfks',
                duration: 120,
                rating: 4.4,
                releaseDate: '08/06/2020',
            },
            {
                id: 2,
                name: 'Http',
                imageUrl: '/assets/images/http.png',
                price: 25,
                code: 'aaaaaaaa',
                duration: 120,
                rating: 3.5,
                releaseDate: '08/06/2020',
            }
        ]
    }
}
