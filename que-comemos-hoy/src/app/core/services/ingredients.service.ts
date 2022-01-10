import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import ingredients from '../data/ingredients.json';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http: HttpClient) { }

  searchIngredients(searchQuery): Observable<any> {

    const ENDPOINT = 'food/ingredients/search?';
    const URL = `${environment.apiUrl}${ENDPOINT}query=${searchQuery}&apiKey=${environment.apiKey}`;

    return this.http.get(URL);

  }

  getIngredients(): Observable<any>{

    return of({ingredients});
  }
}


