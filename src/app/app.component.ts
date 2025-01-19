import { Component } from '@angular/core';
import { PaymentComponent } from './payment/payment.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [PaymentComponent],
})
export class AppComponent {
  title = 'mf-payment';
}
