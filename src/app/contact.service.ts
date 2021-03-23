import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './contact-list';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact: Contact;
  public contacts : Contact[];
  constructor() {
    this.contacts = CONTACTS;
  }

  get Contacts(){
    return this.contacts
  }

  addContact(contact : Contact){
    this.Contacts.push(contact);
  }

  deleteContact(contact: Contact){
    let index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
  }

  getContactDetails(id : number){
    let contact = this.contacts.find(x => x.id == id)
    return contact;
  }

}
