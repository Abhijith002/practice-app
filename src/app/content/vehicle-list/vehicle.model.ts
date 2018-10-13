export class Vehicle {
  constructor(public VehicleId: number, public DistributorId: number, public UserId: number,
    public VehicleRegistrartion: string, public VehicleName: string, public photo: string,
    public Manufacturer?: string) {}
}
