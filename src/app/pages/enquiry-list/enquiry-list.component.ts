import { Component, OnInit, inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-enquiry-list',
  standalone: true,
  imports: [RouterLink,FormsModule,DatePipe],
  templateUrl: './enquiry-list.component.html',
  styleUrl: './enquiry-list.component.css'
})
export class EnquiryListComponent implements OnInit {

  enquiryList: any[] = [];
  enquiryStatusList: any []=[];
  enquirySubjectList: any []=[];
  filterObj: any = {
    "customerName": "",
  "contactNo": "",
  "email": "",
  "enquiryStatusId": null,
  "enquirySubjectId": null,
  "fromDate": "",
  "toDate": ""
  }
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllEnquries();
    this.getAllStatus();
    this.getAllSubject();
  }
  loadAllEnquries() {
    this.masterService.getAllEnqury().subscribe((res:any)=>{
      this.enquiryList = res.data;
    },error=>{

    })
  }
  filter() {
    this.masterService.filterEnquiry(this.filterObj).subscribe((res:any)=>{
      this.enquiryList = res.data;
    },error=>{

    })
  }
  getAllStatus() {
    this.masterService.getAllEnquiryStatus().subscribe((res:any)=>{
      this.enquiryStatusList = res.data;
    })
  }
  getAllSubject() {
    this.masterService.getAllSubjects().subscribe((res:any)=>{
      this.enquirySubjectList = res.data;
    })
  }

  reset() {
    this.filterObj = {
      "customerName": "",
    "contactNo": "",
    "email": "",
    "enquiryStatusId": null,
    "enquirySubjectId": null,
    "fromDate": "",
    "toDate": ""
    }
    this.loadAllEnquries();
  }
}
