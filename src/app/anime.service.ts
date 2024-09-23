import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor() { }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiUrl = 'http://localhost:3000/animes';

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateAnime(anime: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${anime.id}`, anime);
  }
}
