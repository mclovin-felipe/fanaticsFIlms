import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Movie {
    poster_path: string;
    // ... puedes agregar más campos si es necesario
  }
  
  interface MovieResponse {
    results: Movie[];
  }
  
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly API_KEY: string = '8e668317eec307aac24f91f21341bbf7';
  private readonly LANGUAGE: string = 'es-ES';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Promise<string[]> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=${this.LANGUAGE}`;
    return this.http.get<MovieResponse>(url).toPromise().then(data => {
        if (!data || !data.results) {
            return [];  // Retorna un array vacío o maneja el error como prefieras
        }
        return data.results.slice(0, 10).map(movie => `https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
    });
}
}
