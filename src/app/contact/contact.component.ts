import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventType } from '@angular/router';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  selectedLocation = ''
  selectedDistricts = ''
  districts: any = []
  nameProduct: string = ''

  vietnamLocations = [
    {
      name: 'Thành phố Hà Nội',
      districts: [
        'Ba Đình',
        'Hoàn Kiếm',
        'Hai Bà Trưng',
        'Đống Đa',
        'Tây Hồ',
        'Cầu Giấy',
        'Thanh Xuân',
        'Hoàng Mai',
        'Long Biên',
        'Nam Từ Liêm',
        'Bắc Từ Liêm',
        'Thanh Trì',
        'Gia Lâm',
        'Đông Anh',
        'Sóc Sơn',
        'Hà Đông',
        'Sơn Tây',
        'Ba Vì',
        'Phúc Thọ',
        'Đan Phượng',
        'Hoài Đức',
        'Quốc Oai',
        'Thạch Thất',
        'Chương Mỹ',
        'Thanh Oai',
        'Thường Tín',
        'Phú Xuyên',
        'Ứng Hòa',
        'Mỹ Đức'
      ]
    },
    {
      name: 'Thành phố Hồ Chí Minh',
      districts: [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận 7',
        'Quận 8',
        'Quận 9',
        'Quận 10',
        'Quận 11',
        'Quận 12',
        'Quận Bình Tân',
        'Quận Bình Thạnh',
        'Quận Gò Vấp',
        'Quận Phú Nhuận',
        'Quận Tân Bình',
        'Quận Tân Phú',
        'Quận Thủ Đức',
        'Huyện Bình Chánh',
        'Huyện Cần Giờ',
        'Huyện Củ Chi',
        'Huyện Hóc Môn',
        'Huyện Nhà Bè'
      ]
    }
  ]

  changeCity(event: any): void {
    const itemS = event.target.value
    if (!itemS) {
      return
    }
    this.districts = this.vietnamLocations.find(data => data.name === itemS)?.districts || []
    console.log(this.selectedDistricts);
  }

  constructor(private httpService: GlobalService, private noitification: GlobalService) { }
  public Date: any
  public dataGet1: any
  public ngOnInit(): void {
    this.httpService.getData().subscribe((dataGet) => {
      this.dataGet1 = dataGet
      console.log("Data get", this.dataGet1)
    })
  }

  public submitButton() {
    console.log("Data: ", this.dataGet1)
  }

  public postData() {
    const dateProduct = {
      "id": Number,
      "name": "Iphone 15",
      "price": "27000000",
      "quantity": "50"
    }
    this.httpService.postData(dateProduct).subscribe(data => {
      console.log(data)
    })
  }

  qrCodeinput: string = ''
  qrCode: string = 'https://thanhduy20042000.github.io/website-Angular/'
  noitifiCationQr = 'Mã QR của bạn đã được tạo thành công !'
  noitifiCationQrError = 'Tạo mã thất bại, vui lòng kiểm tra lại !'
  noitifiCationQrErrorPost = 'Quyền truy cập vào XMLHttpRequest đã bị chính sách CORS chặn !'
  qrCodeFunction() {
    this.qrCode = this.qrCodeinput
    if (this.qrCodeinput) {
      console.log(this.noitifiCationQr)
      this.Date = this.noitification.successNotification(this.noitifiCationQr)
    } else {
      this.qrCode = 'https://thanhduy20042000.github.io/website-Angular/'
      this.Date = this.noitification.errorNotification(this.noitifiCationQrError)
    }
  }

  errorNotificationPost() {
    this.Date = this.noitification.errorNotification(this.noitifiCationQrErrorPost)
  }
}
