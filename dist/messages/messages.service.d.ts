import { MessagesRepository } from './messages.repository';
export declare class MessagesService {
    messagesRepo: MessagesRepository;
    constructor();
    findOne(id: string): Promise<any>;
    findAll(): Promise<any>;
    create(content: string): Promise<void>;
}
