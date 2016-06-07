//our root app component
import {Component, Inject} from 'angular2/core';
import {Control, Validators, FormBuilder} from 'angular2/common';

@Component({
    selector: 'media-tracker-app',
    templateUrl:'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    form;
    data:Array;
    isListing: boolean = true;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.form = this.formBuilder.group({
            'medium': new Control('Movies'),
            'name': new Control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            'category': new Control(''),
            'year': new Control('')
        });
    }

    saveForm(mediaItem) {
        console.log(mediaItem);
        this.data = [JSON.stringify(mediaItem)];
    }

    /*get value(): string {
        return JSON.stringify(this.loginForm.value, null, 2);
    }*/
}