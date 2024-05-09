import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SignalService } from '../../Services/web-socketService/signal.service'; 
import { WebSocketService } from '../../Services/web-socketService/webSocket.service'; 
import { UUID } from 'crypto';
@Component({
  selector: 'app-video-call',
  standalone:true,
  imports:[],
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.css']
})
export class VideoCallComponent implements OnInit {

  @ViewChild('remoteVideo') remoteVideo!: ElementRef;

  constructor(private webSocketService: WebSocketService,
    private callService:SignalService
    ) { }

  ngOnInit() {
  }
  public async makeCall(): Promise<void> {
    await this.callService.makeCall(this.remoteVideo);
  }

  // private async _handleMessage(data): Promise<void> {
  //   switch (data.type) {
  //     case 'offer':
  //       await this.callService.handleOffer(data.offer, this.remoteVideo);
  //       break;

  //     case 'answer':
  //       await this.callService.handleAnswer(data.answer);
  //       break;

  //     case 'candidate':
  //       this.callService.handleCandidate(data.candidate);
  //       break;

  //     default:
  //       break;
  //   }
  // }

  createRoom(){

  }
}
