import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: './app.component.html'
})
export class AppComponent {
    disabled = false;
    url = 'http://example.com/';
    invalidUrl = 'hoge://example.com/';
    domain = 'example.com'
    nullValue: string = null;
    bg:string = 'bg.png';

    getBgStyle(url:string) {
        let bgUrl = url ? `url(${url})` : null;
        return { 'background-image': bgUrl };
    }
}
