"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const messages_repository_1 = require("./messages.repository");
class MessagesService {
    constructor() {
        this.messagesRepo = new messages_repository_1.MessagesRepository();
    }
    async findOne(id) {
        return this.messagesRepo.findOne(id);
    }
    async findAll() {
        return this.messagesRepo.findAll();
    }
    async create(content) {
        return this.messagesRepo.create(content);
    }
}
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map