import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {ChatMessage} from "../../models/chat-message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private webSocketService: WebSocketService,
              private chatMessage: ChatMessage) {
  }

  ngOnInit(): void {
    this.webSocketService.connect()
  }

  sendMessage() {
    let content = "";
    this.webSocketService.sendMessage(content)
  }
}
