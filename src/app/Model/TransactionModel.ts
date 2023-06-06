import { CustomerModel } from './CustomerModel';
import { ReservationModel } from './ReservationModel';

export class TransactionModel {
  constructor(
    public id: number,
    public reservation: ReservationModel[],
    public customerId: CustomerModel
  ) {}
}
