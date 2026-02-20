import { Component, Input } from '@angular/core';
import { transaction } from '../../../model/transaction.model';

@Component({
  selector: 'app-transaction-item',
  imports: [],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.css'
})
export class TransactionItemComponent {

  @Input() transaction!: transaction;


}
