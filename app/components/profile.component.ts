import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'profile',
    template: `
        <div class="row">
            <div class="col-md-12">
                <form>
                    <div class="form-group">
                        <input class="form-control" type="text" placeholder="Enter a github username..." name="username" [(ngModel)]="username" (keyup)="searchUser()">
                    </div>
                </form>
            </div>
        </div>
        <div *ngIf="user">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">{{user.name}}</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-4">
                            <img class="profile-img img-thumbnail" src="{{user.avatar_url}}">
                            <a class="btn btn-default btn-block" href="{{user.html_url}}" target="_blank">View profile</a>
                        </div>
                        <div class="col-md-8">
                            <div class="stats">
                                <span class="label label-primary">{{user.public_repos}} Public repositories</span>
                                <span class="label label-success">{{user.gists}} Public Gits</span>
                                <span class="label label-info">{{user.followers}} followers</span>
                                <span class="label label-warning">{{user.following}} following</span>
                            </div>
                            <br>
                            <ul class="list-group">
                                <li class="list-group-item"><strong>Username: </strong>{{user.login}}</li>
                                <li class="list-group-item"><strong>Location: </strong>{{user.location}}</li>
                                <li class="list-group-item"><strong>Email: </strong>{{user.email}}</li>
                                <li class="list-group-item"><strong>Blog: </strong>{{user.blog}}</li>
                                <li class="list-group-item"><strong>Member Since: </strong>{{user.created_at}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Repos</h3>
                </div>
                <div class="panel-body">
                    <div *ngFor="let repo of repos">                    
                        <div class="row">
                            <div class="col-md-9">
                                <h4><a href="{{repo.html_url}}" target="_blank">{{repo.name}}</a></h4>
                                <p>{{repo.description}}</p>
                            </div>
                            <div class="col-md-3">
                                <span class="label label-primary">{{repo.watchers}} Watchers</span>
                                <span class="label label-success">{{repo.forks}} Forks</span>
                            </div>                            
                        </div>
                        <hr>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class ProfileComponent {
    
    user:string;;
    repos:string;
    username:string;

    constructor(private _githubService:GithubService) {
        this.user= "" ;
    }

    searchUser() {
        this._githubService.updateUser(this.username);

        this._githubService.getUser().subscribe(user => {
            console.log(user);
            this.user = user;
        })

        this._githubService.getRepos().subscribe(repos => {
            console.log(repos);
            this.repos = repos;
        })
    }
 }