import React, { useMemo } from 'react';
//type
import { GetVehicle } from '@md-star-wars/vehicle/queries/vehicle/type';
//context(s)
import { VehicleAPIContext } from '@md-star-wars/vehicle/layers/api/vehicle';


interface Context {
  vehicleInfo: GetVehicle[]
}

export const VehicleBLContext = React.createContext<Context>({
  vehicleInfo: [],
})

const VehicleBLContextProvider:React.FC = ({children}) => {
  //use api logic here
  const {vehicle} = React.useContext(VehicleAPIContext)

  const vehicleInfo = useMemo<GetVehicle[]>(() => {
      if(!vehicle){
        return [];
      }else{
        return [
          {...vehicle}
        ]
      }
  },[typeof vehicle === 'undefined'])

  return (
    <VehicleBLContext.Provider value={{
        vehicleInfo
    }}>
      {children}
    </VehicleBLContext.Provider>
  );
};

export default VehicleBLContextProvider;