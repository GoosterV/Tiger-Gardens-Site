export type StrainProfile = {
  id: string;
  number: string;
  name: string;
  eyebrow: string;
  type: string;
  lineage: string;
  flower: string;
  typicalPotency: string;
  aroma: string;
  structure: string;
  description: string;
  fieldNote: string;
  tone: "blizzard" | "thirty-four" | "truffle" | "tree";
};

export const strains: StrainProfile[] = [
  {
    id: "oreo-blizzard",
    number: "01",
    name: "Oreo Blizzard",
    eyebrow: "Oreo Blizzard / also known as Oreoz Blizzard",
    type: "Indica-leaning hybrid · 60 / 40",
    lineage: "Oreoz × Lemon Iccee",
    flower: "8–9 weeks",
    typicalPotency: "26–30%+",
    aroma: "Dark cocoa, lemon zest, earth and diesel",
    structure: "Dense, resin-forward flowers with deep color expression",
    description: "A frost-heavy selection where the dark, cookie-like Oreoz side meets the bright citrus lift of Lemon Iccee. The result is a layered dessert-and-fuel profile with a vivid lemon finish.",
    fieldNote: "A sturdy, compact frame builds tightly stacked flowers. Because this cultivar finishes dense, late-flower airflow and attentive timing help preserve its character.",
    tone: "blizzard",
  },
  {
    id: "number-34",
    number: "02",
    name: "#34",
    eyebrow: "Number 34 / Thirty-Four",
    type: "Indica-leaning hybrid · 70 / 30",
    lineage: "Tropicanna Punch × Wedding Cake",
    flower: "8–9 weeks",
    typicalPotency: "28–32%",
    aroma: "Grape candy, vanilla dough, pepper and fuel",
    structure: "Purple, golf-ball flowers with a high calyx-to-leaf ratio",
    description: "#34 is a color-forward cultivar with thick resin and a memorable grape-and-fuel character. It brings Tropicanna Punch’s purple expression together with Wedding Cake’s dense, dessert-driven structure.",
    fieldNote: "A manageable, branchy frame carries medium stretch. Late in flower, the visual is all saturated purple, tightly formed buds and a heavy frost layer.",
    tone: "thirty-four",
  },
  {
    id: "london-truffle",
    number: "03",
    name: "London Truffle",
    eyebrow: "London Truffle",
    type: "Indica-leaning hybrid · 70 / 30",
    lineage: "White Truffle × London Pound Cake",
    flower: "8–9 weeks",
    typicalPotency: "30%+",
    aroma: "Earthy truffle, baked dough, grape sweetness and gas",
    structure: "Compact, branchy plants with dense purple-frosted flowers",
    description: "London Truffle connects White Truffle’s savory, resin-rich character with the sweet pastry notes of London Pound Cake. It is a bold dessert cultivar with an earthy, fuel-leaning finish and unmistakable visual presence.",
    fieldNote: "A squat, tidy plant with close internodes and strong lateral branching. Those traits suit a well-managed, evenly spaced canopy.",
    tone: "truffle",
  },
  {
    id: "tree-flip",
    number: "04",
    name: "Tree Flip",
    eyebrow: "Tree Flip",
    type: "Hybrid",
    lineage: "Lemon Tree × Wedding Cake",
    flower: "8–9 weeks",
    typicalPotency: "24–30%",
    aroma: "Lemon, vanilla cake, sweet fuel and gas",
    structure: "Frosted, dense flowers with a vigorous, high-yielding character",
    description: "Tree Flip carries a bright Lemon Tree lead into Wedding Cake’s creamy bakery-gas backbone. The cultivar is remembered for an unmistakable lemon-forward nose, a sweet fuel edge and an intensely frosted finish.",
    fieldNote: "A vigorous, productive plant built to show off loud terpenes and fully finished flower.",
    tone: "tree",
  },
];

export const strainsById = Object.fromEntries(strains.map((strain) => [strain.id, strain]));
