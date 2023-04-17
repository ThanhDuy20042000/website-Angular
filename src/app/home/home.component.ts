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

  public arrayLanguge = [
    { name: 'Angular', content: 'là một framework mã nguồn mở được phát triển bởi Google, được sử dụng để xây dựng các ứng dụng web động một cách dễ dàng và nhanh chóng.' },
    { name: 'PHP', content: 'là một ngôn ngữ lập trình phía server được sử dụng rộng rãi cho các ứng dụng web, hỗ trợ tương tác với cơ sở dữ liệu và tích hợp dữ liệu với HTML để tạo ra các trang web động.' },
    { name: 'Vue.js', content: 'là một framework JavaScript mã nguồn mở được sử dụng để phát triển các ứng dụng web động một cách dễ dàng và hiệu quả.' },
    { name: 'React', content: 'là một framework JavaScript mã nguồn mở được phát triển bởi Facebook, được sử dụng để xây dựng các ứng dụng web động và tĩnh hiệu quả, đặc biệt phù hợp cho các dự án phức tạp và quy mô lớn.' }
  ]

  isAddArrayInputEmpty = false
  isAddArrayInputContent = false
  public addArrayInput = ''
  public addArrayInputContent = ''
  
  cleaArrayInput() {
    this.addArrayInput = ''
    this.addArrayInputContent = ''
  }

  addArray() {
    if (this.addArrayInput.length && this.addArrayInputContent.length) {
      this.arrayLanguge.push({ name: this.addArrayInput, content: this.addArrayInputContent + ". #Bạn vừa thêm" })
      alert('Đã thêm thành công !')
      this.cleaArrayInput()
    } else {
      alert('Vui lòng nhập đủ thông tin')
    }
  }

  checkInputValue() {
    if (!this.addArrayInput) {
      this.isAddArrayInputEmpty = true;
    } else {
      this.isAddArrayInputEmpty = false;
    }
    if (!this.addArrayInputContent) {
      this.isAddArrayInputContent = true;
    } else {
      this.isAddArrayInputContent = false;
    }
  }
}
