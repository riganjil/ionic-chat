// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
//
// /*
//   Generated class for the GithubUsersProvider provider.
//
//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class GithubUsersProvider {
//
//   constructor(public http: HttpClient) {
//     console.log('Hello GithubUsersProvider Provider');
//   }
//
// }
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../models/user';

@Injectable()
export class GithubUsers {
  githubApiUrl = 'https://api.github.com';

  constructor(public http: Http) { }

  // Load all github users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApiUrl}/users`)
      .map(res => <User[]>res.json());
  }
}
