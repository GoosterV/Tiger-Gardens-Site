export type StrainProfile = {
  id: string;
  number: string;
  name: string;
  eyebrow: string;
  type: string;
  breeder: string;
  lineage: string;
  flower: string;
  referencePotency: string;
  aroma: string;
  structure: string;
  description: string;
  fieldNote: string;
  sourceUrl: string;
  tone: "blizzard" | "thirty-four" | "truffle" | "tree";
};

export const strains: StrainProfile[] = [
  {
    id: "oreo-blizzard",
    number: "01",
    name: "Oreo Blizzard",
    eyebrow: "Oreo Blizzard / also known as Oreoz Blizzard",
    type: "Indica-leaning hybrid · 60 / 40",
    breeder: "Tiki Madman",
    lineage: "Oreoz × Lemon Iccee",
    flower: "8–9 weeks",
    referencePotency: "26–30%+",
    aroma: "Dark cocoa, lemon zest, earth and diesel",
    structure: "Dense, resin-forward flowers with deep color expression",
    description: "A frost-heavy selection where the dark, cookie-like Oreoz side meets the bright citrus lift of Lemon Iccee. The result is a layered dessert-and-fuel profile with a vivid lemon finish.",
    fieldNote: "The reference cut is known for a sturdy, compact frame and tightly stacked flowers. Its density makes careful airflow and timing important late in flower.",
    sourceUrl: "https://www.primecutsnursery.com/strains/oreoz-blizzard",
    tone: "blizzard",
  },
  {
    id: "number-34",
    number: "02",
    name: "#34",
    eyebrow: "Number 34 / Thirty-Four",
    type: "Indica-leaning hybrid · 70 / 30",
    breeder: "Prime Cuts Nursery selection",
    lineage: "Tropicanna Punch × Wedding Cake",
    flower: "8–9 weeks",
    referencePotency: "28–32%",
    aroma: "Grape candy, vanilla dough, pepper and fuel",
    structure: "Purple, golf-ball flowers with a high calyx-to-leaf ratio",
    description: "#34 was selected from a 100-seed search for its loud color, thick resin and memorable grape-and-fuel character. It brings Tropicanna Punch’s purple expression together with Wedding Cake’s dense, dessert-driven structure.",
    fieldNote: "The selected cut is associated with a manageable, branchy frame and medium stretch. The late-flower visual is all about saturated purple and heavy frost.",
    sourceUrl: "https://www.primecutsnursery.com/strains/number-34",
    tone: "thirty-four",
  },
  {
    id: "london-truffle",
    number: "03",
    name: "London Truffle",
    eyebrow: "London Truffle",
    type: "Indica-leaning hybrid · 70 / 30",
    breeder: "Tiki Madman",
    lineage: "White Truffle × London Pound Cake",
    flower: "8–9 weeks",
    referencePotency: "30%+",
    aroma: "Earthy truffle, baked dough, grape sweetness and gas",
    structure: "Compact, branchy plants with dense purple-frosted flowers",
    description: "London Truffle connects White Truffle’s savory, resin-rich character with the sweet pastry notes of London Pound Cake. It is a bold dessert cultivar with an earthy, fuel-leaning finish and unmistakable visual presence.",
    fieldNote: "The reference profile points to a squat, tidy plant with close internodes and strong lateral branching—traits that suit a well-managed, evenly spaced canopy.",
    sourceUrl: "https://www.primecutsnursery.com/strains/london-truffle",
    tone: "truffle",
  },
  {
    id: "tree-flip",
    number: "04",
    name: "Tree Flip",
    eyebrow: "Tree Flip",
    type: "Hybrid",
    breeder: "Rasta Cruz Farms",
    lineage: "Lemon Tree × Wedding Cake",
    flower: "8–9 weeks",
    referencePotency: "24–30%",
    aroma: "Lemon, vanilla cake, sweet fuel and gas",
    structure: "Frosted, dense flowers with a vigorous, heavy-yielding reference profile",
    description: "Tree Flip carries a bright Lemon Tree lead into Wedding Cake’s creamy bakery-gas backbone. The cultivar is remembered for an unmistakable lemon-forward nose, a sweet fuel edge and an intensely frosted finish.",
    fieldNote: "The nursery reference describes a vigorous, productive plant. The name speaks to a selection built to show off both loud terpenes and fully finished flower.",
    sourceUrl: "https://www.primecutsnursery.com/tree-flip-cannabis-clones",
    tone: "tree",
  },
];

export const strainsById = Object.fromEntries(strains.map((strain) => [strain.id, strain]));
