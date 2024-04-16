import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://quantumitbackend.adaptable.app/'
  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get(`${this.baseUrl}api/team/team`)
  }
}