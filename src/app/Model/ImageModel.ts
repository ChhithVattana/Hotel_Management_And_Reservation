import { RoomModel } from "./RoomModel";

export class ImageModel {
  constructor(
    public id: number,
    public url: string,
    public roomTypeId: RoomModel
  ) {}
}
