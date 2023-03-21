export class RoomModel {
  constructor(
    public id: number,
    public name: string,
    public numGuest: number,
    public price: number,
    public description: string
  ) {}
}
