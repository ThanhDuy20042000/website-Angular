import { Component } from '@angular/core';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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

  selectedLocation = ''
  selectedDistricts = ''

  districts: any = []
  changeCity(event: any): void {
    const itemS = event.target.value
    if(!itemS){
      return 
    }
    this.districts = this.vietnamLocations.find(data => data.name === itemS)?.districts || []
    console.log(this.selectedDistricts);
  }
  
  
}
