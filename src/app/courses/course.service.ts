import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Course from "./course";

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    constructor(private httpClient: HttpClient) { }

    private coursesUrl: string = 'http://localhost:3100/api/courses';

    retrieveAll(): Observable<Course[]> {
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course> {
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    }

    save(course: Course): Observable<Course> {
        if (course.id) {
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        } else {
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }
    }

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }

}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular CLI',
        releaseDate: 'November 2, 2019',
        description: 'Nesse curso , os alunos irão obter um grande conhecimento nos principais recursos do CLI',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png'
    },
    {
        id: 2,
        name: 'Formularios',
        releaseDate: 'November 2, 2019',
        description: 'Nesse curso , os alunos irão obter um grande conhecimento nos principais recursos do CLI',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/forms.png'
    },
    {
        id: 3,
        name: 'Http Client',
        releaseDate: 'November 2, 2019',
        description: 'Nesse curso , os alunos irão obter um grande conhecimento nos principais recursos do CLI',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/http.png'
    },
    {
        id: 4,
        name: 'Router',
        releaseDate: 'November 2, 2019',
        description: 'Nesse curso , os alunos irão obter um grande conhecimento nos principais recursos do CLI',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/router.png'
    },
]