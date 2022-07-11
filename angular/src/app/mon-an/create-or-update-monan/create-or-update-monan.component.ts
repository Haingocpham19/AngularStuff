import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-create-or-update-monan',
  templateUrl: './create-or-update-monan.component.html',
  styleUrls: ['./create-or-update-monan.component.scss']
})
export class CreateOrUpdateMonanComponent implements OnInit {

  @Input() dataItem: any;
  selectedValue = null;
  // tenMonAn: any;
  // anhMonAn: any;
  comboboxThucDon: any;
  duongDanAnh: any;
  thucDonId: number = -1;

  constructor(private service: SharedService, private fb: FormBuilder, private modal: NzModalRef) {

  }

  ngOnInit(): void {
    debugger
    if (this.dataItem) {
      this.duongDanAnh = this.service.ApiPhoto + "/" + this.dataItem.AnhMonAn;
      this.thucDonId = this.dataItem.MaThucDon;
    }
    else{
      this.duongDanAnh = this.service.ApiPhoto;
      this.dataItem = {
        tenMonAn: '',

      };
    }
    this.service.getComboxThucDon().subscribe(result => {
      console.log(result);
      this.comboboxThucDon = result;
    })
  }


  save(isSave: boolean) {
    if (isSave) {
      if (!this.dataItem) {
        this.addMonAn();
      } else {
        this.editMonAn(this.dataItem);
      }
    }
  }

  addMonAn() {
    let date = Date.now();
    debugger
    var val = {
      tenMonAn: this.dataItem.TenMonAn,
      maThucDon: this.thucDonId,
      ngayTao: "2022-07-08T10:43:14.184Z",
      anhMonAn: this.dataItem.AnhMonAn
    };
    this.service.themMonAn(val).subscribe(data => {
      if (data) {
        this.cancel();
        //alert("đã thêm");
      }
    });
  }

  editMonAn(monAn: any) {
    debugger
    var val = {
      id: monAn.Id,
      tenMonAn: this.dataItem.TenMonAn,
      maThucDon: this.thucDonId,
      ngayTao: "2022-07-08T10:43:14.184Z",
      anhMonAn: this.dataItem.AnhMonAn
    };
    this.service.suaMonAn(val, monAn.Id).subscribe(data => {
      this.cancel();
      //alert("đã sửa");
    });
  }
  cancel(isSave?: boolean) {
    this.modal.close(isSave);
  }
  uploadAnh(event: any) {
    var file = event.target.files[0];
    const formData = new FormData();
    formData.append('uploadfile', file, file.name);

    this.service.taiAnh(formData).subscribe((data: any) => {
      this.dataItem.AnhMonAn = data.toString();
      this.duongDanAnh = this.service.ApiPhoto + "/" + this.dataItem.AnhMonAn;
    })
  }
}
