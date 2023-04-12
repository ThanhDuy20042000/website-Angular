import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  home: { label: string, url: string } = { label: 'Home', url: '/' };
  public name = ''
  public age = 0
  public birthday = 0
  public job = ''
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
