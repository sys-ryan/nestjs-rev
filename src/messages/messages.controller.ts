import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  messagesService: MessagesService;

  // Service is creating its own dependencies
  // DONT DO THIS ON REAL APPS
  constructor() {
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get("/:id")
  GetMessage(@Param("id") id: string) {
    return this.messagesService.findOne(id);
  }
}
