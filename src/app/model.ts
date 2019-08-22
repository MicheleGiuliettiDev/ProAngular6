import { ToDoItem } from './toDoItem';

export class Model {
    user;
    items;

    constructor() {
        this.user = 'Michele';
        this.items = [
            new ToDoItem('Buy Flowers', false),
            new ToDoItem('Get Shoes', false),
            new ToDoItem('Collect Tickets', true),
            new ToDoItem('Call Joe', false)];
    }
}