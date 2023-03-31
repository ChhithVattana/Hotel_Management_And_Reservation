export class RoomModel {
  constructor(
    public id: number,
    public name: String,
    public price: number,
    public roomType: String,
    public roomSize: number,
    public mainDescription: String,
    public subDescription: String,
    public url: String,
    public capacity: number,
    public floor: String,
  ) {}
}
