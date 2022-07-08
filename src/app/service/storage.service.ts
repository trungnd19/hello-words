import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    if(localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) || '{}')
    }
  }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }


}

//https://ng-girls.gitbook.io/todo-list-tutorial/workshop-todo-list/local-storage
