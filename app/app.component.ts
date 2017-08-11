import {Component} from 'angular2/core';

import {DankoIpsumGeneratorComponent} from './dankoipsum-generator.component/dankoipsum-generator.component'

@Component({
    selector: 'my-app',
    template: `
        <div class="container" style="margin-top: 50px">
            <div class="row">
                <div class="col-md-12">
                    <danko-ipsum></danko-ipsum>
                </div>
            </div>
        </div>
        `,
    directives: [
        DankoIpsumGeneratorComponent]
})
export class AppComponent {
}