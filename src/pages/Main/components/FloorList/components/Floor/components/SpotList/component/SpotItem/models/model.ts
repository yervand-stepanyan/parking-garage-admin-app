interface VehicleTypes {
  small: boolean;
  medium: boolean;
  large: boolean;
}

interface SpotItemFeatures {
  evCharger: boolean;
  disability: boolean;
  vehicleTypes: VehicleTypes;
}

export interface SpotItemProps {
  active: boolean;
  features: SpotItemFeatures;
  id: string;
  title: string;
}
