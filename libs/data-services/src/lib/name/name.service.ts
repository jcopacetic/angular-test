import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  constructor(private apollo: Apollo) { }

  loadName() {
    const query = Name;
    const variables = {};
    const name$ = this.apollo.query({ query, variables });
    return from(name$).pipe(map((data: any) => data?.name);
  }
}