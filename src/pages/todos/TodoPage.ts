import {Component} from "@angular/core";

@Component({
    selector: 'todo-page',
    template: `
        <ion-header>
            <ion-navbar>
                <button ion-button menuToggle>
                    <ion-icon name="menu"></ion-icon>
                </button>
                <ion-title>Todos</ion-title>
            </ion-navbar>
        </ion-header>

        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col
                        col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3
                        *ngFor="let todo of todos">
                        <todo-card [todo]="todo"></todo-card>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    `
})
export class TodoPage {
    todos = [
        {title: 'Buy milk', state: 'TODO', description: 'Do not forget to buy milk!'},
        {title: 'Learn math', state: 'IN PROGRESS', description: 'Learn math for the exam.'},
        {title: 'Job interview', state: 'DONE', description: 'Job interview in BMW.'}
    ];
}
