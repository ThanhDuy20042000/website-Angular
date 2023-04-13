import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public currentTime = ''
  ngOnInit(): void {
    setInterval(() => {
      this.updateTime()
    }, 1000);
  }

  updateTime(): void {
    const date = new Date()
    this.currentTime = date.toLocaleTimeString()
  }
}

