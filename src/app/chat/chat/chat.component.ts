import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {ChatMessage} from "../../models/chat-message";
import {ConversationService} from "../../services/conversation.service";
import {PageImpl} from "../../models/page-impl";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userId: number = 1; // tạm fix userId, bạn có thể lấy từ AuthService
  content: string = ''; // nội dung tin nhắn
  messages: ChatMessage[] = []; // danh sách tin nhắn
  page?: PageImpl

  constructor(private webSocketService: WebSocketService,
              private conversationService: ConversationService) {
  }

  ngOnInit(): void {
    this.conversationService.getChatByConversation(1, "", 0, 10).subscribe(rs => {
      this.page = rs
      if (this.page != null && this.page.content != null) {
        this.messages = this.page?.content
      }
    })

    this.webSocketService.connect(this.userId, (msg: ChatMessage) => {
      this.messages.push(msg); // khi nhận tin nhắn mới thì add vào list
    });
  }

  sendMessage() {
    if (this.content.trim()) {
      const chatMessage = {
        senderId: this.userId,
        recipientId: 2, // ví dụ gửi cho userId=2, sau này bạn thay bằng logic thật
        idConversation: 1,
        content: this.content
      };

      this.webSocketService.sendMessage(chatMessage);
      this.content = ''; // clear input sau khi gửi
    }
  }
}
