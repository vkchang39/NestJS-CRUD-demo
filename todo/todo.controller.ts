import { Controller , Get, Post, Put, Patch, Delete, Logger, Body, Param, ParseIntPipe} from "@nestjs/common";
import { threadId } from "worker_threads";
import { Todo } from "./todo.interface";
import { TodoService } from "./todo.service";

@Controller('todo')
export class TodoController {
    private logger = new Logger(TodoController.name)
    constructor (
        private readonly todoService:  TodoService
    ) {

    }

    @Get()
    findAll() {
        this.logger.log('Handling FindAll request...')
        return this.todoService.findAll();
    }

    @Post()
    create(@Body() todo : Todo) {
        this.logger.log('Handling create request...')
        this.todoService.create(todo);
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number) {
        this.logger.log('Handling findOne with id ' + id + ' request...')
        return this.todoService.findOne(id)
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() todo: Todo) {
        this.logger.log('Handling update with id ' + id + ' request...')
        return this.todoService.update(id, todo)
    }

    @Delete(':id') 
    delete(@Param('id', ParseIntPipe) id: number) {
        this.logger.log('Handling delete with id ' + id + ' request...')
        return this.todoService.delete(id)
    }

}