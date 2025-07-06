import {Component, OnInit} from '@angular/core';
import {WebSocketService} from "../../service/web-socket.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private webSocketService: WebSocketService) {
  }

  ngOnInit(): void {
    this.webSocketService.connect()
  }
}
