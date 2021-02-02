import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  list(): any {
    return [{ name: 'Lyon' }, { name: 'London' }];
  }
}
