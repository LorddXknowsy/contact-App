import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = []
  contactID : number;
  // @Output() contactEvent = new EventEmitter<Contact>();
  constructor(private contactService:ContactService) {
  }
  ngOnInit(): void {
    this.contacts = this.contactService.Contacts;
  }
  editCurrentContact(id:number){
    this.contactID = id;
  }

  deleteContact(contact: Contact){
    this.contactService.deleteContact(contact);
  }

}
