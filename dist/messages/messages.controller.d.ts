import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";
export declare class MessagesController {
    messagesService: MessagesService;
    messagesService2: MessagesService;
    messagesService3: MessagesService;
    constructor(messagesService: MessagesService, messagesService2: MessagesService, messagesService3: MessagesService);
    listMessages(): Promise<any>;
    createMessage(body: CreateMessageDto): Promise<void>;
    GetMessage(id: string): Promise<any>;
}
