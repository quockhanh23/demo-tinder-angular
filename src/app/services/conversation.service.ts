import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PageImpl} from "../models/page-impl";

const API_URL = "http://localhost:8080/api/conversations"

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private httpClient: HttpClient) {
  }

  getChatByConversation(idConversation: any, searchText: any, page: any, size: any): Observable<PageImpl> {
    return this.httpClient.get<PageImpl>(API_URL + `/getChatByConversation?idConversation=${idConversation}&searchText=${searchText}&page=${page}&size=${size}`)
  }
}

