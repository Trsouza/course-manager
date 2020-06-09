import { Course } from './course-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ //Torna a classe elegível para receber injeção de dependências
    providedIn: 'root'  //Carregado direto na root da aplicação
})

export class CourseService {

    private coursesUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient){}

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    saveCourse(course: Course): Observable<Course> {
        if (course.id) {
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        }else {
            return this.httpClient.post<Course>(`${this.coursesUrl}/${course.id}`, course);
        }
    }

    deleteById(id: number): Observable<any> { //any - retorna qualquer coisa
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

}
