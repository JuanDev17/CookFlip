import { inject, Injectable, Service } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { RecipeApi } from '../types/recipe-api-type';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    readonly baseurl = `${environment.apiUrl}/recipes`;

    readonly #http = inject(HttpClient);

    getAllRecipes(): Observable<RecipeApi[]> {
        return this.#http.get<RecipeApi[]>(this.baseurl);
    }


}
 