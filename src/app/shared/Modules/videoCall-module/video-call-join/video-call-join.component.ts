import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-call-join',
  templateUrl: './video-call-join.component.html',
  styleUrls: ['./video-call-join.component.css'],
})
export class VideoCallJoinComponent implements OnInit {
  @ViewChild('localVideo') localVideo: any;
  private stream!: MediaStream;
  videoEnabled: boolean = false;
  audioEnabled: boolean = false;
  roomId: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  async ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.roomId = params['roomId'];
      console.log('Room ID:', this.roomId);
    });
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        const videoElement = this.localVideo.nativeElement;
        videoElement.srcObject = this.stream;
        videoElement.play(); // Start playing the video
        this.videoEnabled = true;
        this.audioEnabled = true;
      } catch (error) {
        console.error('Error accessing media devices: ', error);
      }
    } else {
      console.error('getUserMedia is not supported in this browser.');
    }
  }

  toggleCamera() {
    console.log(this.videoEnabled);
    const videoElement = this.localVideo.nativeElement;
    if (this.stream && this.stream.getVideoTracks().length > 0) {
      const videoTrack = this.stream.getVideoTracks()[0];
      videoTrack.enabled = !videoTrack.enabled;
      this.videoEnabled = videoTrack.enabled;
    }
  }

  toggleMicrophone() {
    console.log(this.audioEnabled);
    const videoElement = this.localVideo.nativeElement;
    if (this.stream && this.stream.getAudioTracks().length > 0) {
      const audioTrack = this.stream.getAudioTracks()[0];
      audioTrack.enabled = !audioTrack.enabled;
      this.audioEnabled = audioTrack.enabled;
    }
  }
  enterRoom() {
    console.log(this.roomId);
    if (!this.roomId) {
      return;
    }
    this.router.navigate(['/', this.roomId]);
  }
}
// https://play.tailwindcss.com/qx6nYMMbzA
