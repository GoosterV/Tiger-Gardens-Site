import StrainProfilePage from "../strain-profile";
import { strainsById } from "../strain-data";

export default function LondonTrufflePage() {
  return <StrainProfilePage strain={strainsById["london-truffle"]} />;
}
