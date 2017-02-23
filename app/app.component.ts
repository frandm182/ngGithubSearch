import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>                
              </button>
                <a class="navbar-brand" href="#">GithubSearch</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">    
                </ul>
            </div>
            <!--/.nav-collapse -->
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <profile></profile>
            </div>
        </div>
    </div>`
})
export class AppComponent { 

}
 