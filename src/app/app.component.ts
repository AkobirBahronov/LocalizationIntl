import { Component } from '@angular/core';

import { locale, loadMessages, formatMessage } from 'devextreme/localization';

import deMessages from 'devextreme/localization/messages/de.json';
import ruMessages from 'devextreme/localization/messages/ru.json';
import { Locale, Payment, Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service],
  preserveWhitespaces: true,
})
export class AppComponent {
  locale: string;

  locales: Locale[];

  payments: Payment[];

  formatMessage = formatMessage;

  constructor(private service: Service) {
    this.locale = this.getLocale();
    this.payments = service.getPayments();
    this.locales = service.getLocales();

    this.initMessages();
    locale(this.locale);
  }

  initMessages() {
    loadMessages(deMessages);
    loadMessages(ruMessages);
    loadMessages(this.service.getDictionary());
  }

  changeLocale(selectBox) {
    this.setLocale(selectBox.instance.option('value'));
    parent.document.location.reload();
  }

  getLocale() {
    const locale = sessionStorage.getItem('locale');
    return locale != null ? locale : 'ru';
  }

  setLocale(locale) {
    sessionStorage.setItem('locale', locale);
  }
}
