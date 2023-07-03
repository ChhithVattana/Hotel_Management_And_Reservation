import { CustomerModel } from '../CustomerModel';

export class TransactionDto {
  constructor(public paymentType: String, public customerId: CustomerModel) {}
}
