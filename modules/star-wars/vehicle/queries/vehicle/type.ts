import { Vehicle } from '@md-shared/types/vehicle';

export type GetVehicle = Pick<Vehicle, 'id' | 'name' | 'maxAtmospheringSpeed' | 'passengers'>;

export interface GetVehicleResponse {
  vehicle: GetVehicle;
}

export interface GetVehicleVariables {
  id?: string;
  vehicleId?: string;
}
