"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var github_service_1 = require("../services/github.service");
require("rxjs/add/operator/map");
var ProfileComponent = (function () {
    function ProfileComponent(_githubService) {
        this._githubService = _githubService;
        this.user = "";
    }
    ;
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        this._githubService.updateUser(this.username);
        this._githubService.getUser().subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            console.log(repos);
            _this.repos = repos;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        template: "\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <form>\n                    <div class=\"form-group\">\n                        <input class=\"form-control\" type=\"text\" placeholder=\"Enter a github username...\" name=\"username\" [(ngModel)]=\"username\" (keyup)=\"searchUser()\">\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div *ngIf=\"user\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{user.name}}</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <img class=\"profile-img img-thumbnail\" src=\"{{user.avatar_url}}\">\n                            <a class=\"btn btn-default btn-block\" href=\"{{user.html_url}}\" target=\"_blank\">View profile</a>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <div class=\"stats\">\n                                <span class=\"label label-primary\">{{user.public_repos}} Public repositories</span>\n                                <span class=\"label label-success\">{{user.gists}} Public Gits</span>\n                                <span class=\"label label-info\">{{user.followers}} followers</span>\n                                <span class=\"label label-warning\">{{user.following}} following</span>\n                            </div>\n                            <br>\n                            <ul class=\"list-group\">\n                                <li class=\"list-group-item\"><strong>Username: </strong>{{user.login}}</li>\n                                <li class=\"list-group-item\"><strong>Location: </strong>{{user.location}}</li>\n                                <li class=\"list-group-item\"><strong>Email: </strong>{{user.email}}</li>\n                                <li class=\"list-group-item\"><strong>Blog: </strong>{{user.blog}}</li>\n                                <li class=\"list-group-item\"><strong>Member Since: </strong>{{user.created_at}}</li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">Repos</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <div *ngFor=\"let repo of repos\">                    \n                        <div class=\"row\">\n                            <div class=\"col-md-9\">\n                                <h4><a href=\"{{repo.html_url}}\" target=\"_blank\">{{repo.name}}</a></h4>\n                                <p>{{repo.description}}</p>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <span class=\"label label-primary\">{{repo.watchers}} Watchers</span>\n                                <span class=\"label label-success\">{{repo.forks}} Forks</span>\n                            </div>                            \n                        </div>\n                        <hr>\n                    </div>\n                </div>\n            </div>\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map