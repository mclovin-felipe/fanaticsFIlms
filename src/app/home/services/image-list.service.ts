import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Movie {
  poster_path: string;
  // ... otros campos relevantes de la interfaz Movie
}

@Injectable({
  providedIn: 'root',
})
export class ImageListService {
  private readonly API_KEY: string = '8e668317eec307aac24f91f21341bbf7';
  private readonly LANGUAGE: string = 'es-ES';

  constructor(private http: HttpClient) {}

  getMovieImages(): Promise<string[]> {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_KEY}&language=${this.LANGUAGE}`;
    return this.http
      .get<any>(url)
      .toPromise()
      .then((data) => {
        if (!data || !data.results) {
          return []; // Retorna un array vacío o maneja el error como prefieras
        }
        console.log(data);
        return data.results
          .slice(10, 19)
          .map(
            (movie: Movie) =>
              `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
          );
      });
  }
}
