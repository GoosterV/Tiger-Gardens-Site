import StrainProfilePage from "../strain-profile";
import { strainsById } from "../strain-data";

export default function NumberThirtyFourPage() {
  return <StrainProfilePage strain={strainsById["number-34"]} />;
}
