import {Component, Input} from "@angular/core";

@Component({
    selector: 'todo-card',
    template: `
        <ion-card>
            <ion-card-header>
                {{ todo.title }}
            </ion-card-header>
            <ion-card-content>
                {{ todo.description }}
            </ion-card-content>
        </ion-card>
    `
})
export class TodoCard {
    @Input() todo;
}
