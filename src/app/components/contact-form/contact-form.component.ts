import { OnChanges, ViewChild } from '@angular/core';
import { Component, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/contact';
import { ContactService } from 'src/app/contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, OnChanges {
  contact:Contact = new Contact();
  id: number =1;
  contacts = []
  isUpdated = true;
  @Input() contactID : number;

  constructor(public contactService:ContactService) { }

  ngOnChanges(){
    if(this.contactID > 0)
      {
          let contactDetails = this.contactService.getContactDetails(this.contactID);
          Object.assign(this.contact,contactDetails);
          this.isUpdated = false;
      }
    }

    ngOnInit(): void {}


    addContact(contact: NgForm){
      if (this.isUpdated === true){
        this.contactService.addContact(contact.value);}
      else {

        let contactDetails = this.contactService.getContactDetails(this.contactID)
        Object.assign(contactDetails, this.contact)
      }
      contact.value.id = ++this.id
      contact.reset();
      this.isUpdated = true;
    }
  }

