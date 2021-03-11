import { Injectable } from "@nestjs/common";
import { threadId } from "worker_threads";
import { Todo } from "./todo.interface";

@Injectable()   
export class TodoService {
private storage: Todo[] = [];

findAll() {
    return this.storage;
}

create(todo:Todo) {
    const currentMaxId = Math.max(...this.storage.map((t: Todo) => t.id));
    todo.id = currentMaxId > 0 ? currentMaxId + 1 : 1;
    this.storage.push(todo);
}

findOne(id: number) {
    return this.storage.find((t:Todo) => t.id === id);
}

update(id:number, todo: Todo) {
    const index =  this.storage.findIndex((t:Todo) => t.id === id);
    this.storage[index] = todo;
}

delete(id:number) {
    const index =  this.storage.findIndex((t:Todo) => t.id === id);
    this.storage.splice(index, 1)
}
}