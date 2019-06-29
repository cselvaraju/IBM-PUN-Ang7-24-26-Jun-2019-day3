import { Injectable } from '@angular/core';
import { Actor } from '../models/actor.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'http://localhost:3000';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {
  }

  getActorlist() {
    return this.http.get(`${URL}/actors`, HTTP_OPTIONS);
  }

  addActor(actor: Actor) {
    return this.http.post(`${URL}/actors`, actor, HTTP_OPTIONS);
  }

  deleteActor(id: number) {
    return this.http.delete(`${URL}/actors/${id}`, HTTP_OPTIONS);
  }

  updateActor(id: number, newActor: Actor) {
    return this.http.put(`${URL}/actors/${id}`, newActor, HTTP_OPTIONS);
  }
}
