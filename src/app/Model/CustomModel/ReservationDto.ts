import { TransactionDto } from './TransactionDto';

export class ReservationDto {
  constructor(
    public checkInOn: Date,
    public checkOutOn: Date,
    public specialRequests: String,
    public transactionId: TransactionDto
  ) {}
}
