import { RoomTypeModel } from "./RoomTypeModel";

export class RoomModel {
  constructor(
    public id: number,
    public roomNo: String,
    public available: boolean,
    public roomTypeId: RoomTypeModel,
  ) {}
}
