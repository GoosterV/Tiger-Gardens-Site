import StrainProfilePage from "../strain-profile";
import { strainsById } from "../strain-data";

export default function OreoBlizzardPage() {
  return <StrainProfilePage strain={strainsById["oreo-blizzard"]} />;
}
