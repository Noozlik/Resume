import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  contactDetails: any;

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
    this.contactDetails = {
      phone: '+79131021231',
      email: 'mr.fialochka@mail.ru',
      github: 'https://github.com/Noozlik',
      telegram: 'https://t.me/Noozlik'
    };
  }

  async goToNextpage() {
    await this.router.navigate(['/content']);
  }
}
