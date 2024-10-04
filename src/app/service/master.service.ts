import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = 'https://freeapi.gerasim.in/api/youtube/';
  http = inject(HttpClient);

  constructor() { }

  getAllEnqury() {
    return this.http.get(`${this.apiUrl}GetAllEnquries`)
  }
  getAllEnquiryStatus() {
    return this.http.get(`${this.apiUrl}GetAllEnquiryStatus`)
  }
  getAllSubjects() {
    return this.http.get(`${this.apiUrl}GetAllEnquirySubject`)
  }

  createNewEnquiry(obj:any) { 
    debugger;
    return this.http.post(`${this.apiUrl}AddNewEnquiry`,obj)
  }

  filterEnquiry(obj:any) { 
    debugger; 
    return this.http.post(`${this.apiUrl}FilterEnquries`,obj)
  }
}
