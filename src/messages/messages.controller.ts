import { Controller, Get, Post, Body, Param, NotFoundException } from "@nestjs/common";
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
  async GetMessage(@Param("id") id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException("message not found");
    }

    return message;
  }
}
