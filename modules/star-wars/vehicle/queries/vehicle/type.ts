import { Vehicle } from '@md-shared/types/vehicle';


export type GetVehicle = Pick<Vehicle, 'id' | 'name' | 'maxAtmospheringSpeed' | 'passengers' >;

export interface GetPlanetResponse {
  vehicle: GetVehicle;
}

export interface GetPlanetVariables {
  id?: string;
  vehicleId?: string;
}
