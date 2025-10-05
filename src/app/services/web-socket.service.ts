import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

declare var SockJS: any;
declare var Stomp: any;

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private stompClient: any;
  private messageSubject = new Subject<any>();

  connect(userId: number, onMessage: (msg: any) => void) {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);

    this.stompClient.connect({}, () => {
      this.stompClient?.subscribe(
        `/user/${userId}/queue/messages`,
        (message: any) => {
          if (message.body) {
            onMessage(JSON.parse(message.body));
          }
        }
      );
    });
  }

  sendMessage(chatMessage: any) {
    this.stompClient?.send('/app/chat', {}, JSON.stringify(chatMessage));
  }

  getMessages() {
    return this.messageSubject.asObservable();
  }

  disconnect(): void {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.disconnect(() => {
        console.log('Disconnected');
      });
    }
  }
}
