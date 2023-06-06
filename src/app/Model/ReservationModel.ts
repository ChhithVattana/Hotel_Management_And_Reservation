import { RoomModel } from "./RoomModel";

export class ReservationModel {
  constructor(
    public id: number,
    public checkInOn: Date,
    public checkOutOn: Date,
    public stayDuration: number,
    public roomId: RoomModel[],
  ){}
}
