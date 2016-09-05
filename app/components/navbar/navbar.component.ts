/**
 * Created by RAMANDALAHY on 04/09/2016.
 */
import {Component} from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'navbar',
    templateUrl:'navbar.component.html'
})
export class NavbarComponent {
    private projectName:string;
    constructor(){
        this.projectName='A2Website';
    }
}