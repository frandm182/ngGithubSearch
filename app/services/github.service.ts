import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private clien_id = '77d94ca7117deac92290';
    private client_secret = 'c541668d6eef10bcd619e45ec81786e8ad281c59';

    constructor(private _http:Http) {
        console.log('Github Service Ready...');
        this.username = 'fran';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.clien_id + '&client_secret' + this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.clien_id + '&client_secret' + this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }
}
