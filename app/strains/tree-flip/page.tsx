import StrainProfilePage from "../strain-profile";
import { strainsById } from "../strain-data";

export default function TreeFlipPage() {
  return <StrainProfilePage strain={strainsById["tree-flip"]} />;
}
