import { transaction } from './../../../model/transaction.model';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-item',
  imports: [],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.css'
})
export class TransactionItemComponent {

  @Input() transaction!: transaction;

}
