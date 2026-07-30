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
  aromaNote: string;
  structure: string;
  description: string;
  fieldNote: string;
  photos: string[];
  tone: "blizzard" | "thirty-four" | "truffle" | "tree";
};

export const strains: StrainProfile[] = [
  {
    id: "oreo-blizzard",
    number: "01",
    name: "Oreo Blizzard",
    eyebrow: "Oreo Blizzard / also known as Oreoz Blizzard",
    type: "Indica-leaning hybrid - 60 / 40",
    lineage: "Oreoz x Lemon Iccee",
    flower: "8-9 weeks",
    typicalPotency: "26-30%+",
    aroma: "Dark cocoa, lemon zest, earth and diesel",
    aromaNote: "Open the jar and the first impression is dark chocolate and sharp citrus. As the flower is handled, the profile moves toward bakery spice, toasted nut, earth and a creamy fuel finish.",
    structure: "Dense, resin-forward flowers with deep color expression",
    description: "A frost-heavy selection where the dark, cookie-like Oreoz side meets the bright citrus lift of Lemon Iccee. The overall profile is dessert and fuel, sharpened by a clean lemon edge.",
    fieldNote: "A sturdy, compact plant with close spacing and a moderate stretch. The flowers finish chunky and tight, often showing a dramatic dark backdrop beneath the resin coverage.",
    photos: ["/strains/oreo-blizzard/oreo-blizzard-01.jpg"],
    tone: "blizzard",
  },
  {
    id: "number-34",
    number: "02",
    name: "#34",
    eyebrow: "Number 34 / Thirty-Four",
    type: "Indica-leaning hybrid - 70 / 30",
    lineage: "Tropicanna Punch x Wedding Cake",
    flower: "8-9 weeks",
    typicalPotency: "28-32%",
    aroma: "Grape candy, vanilla dough, pepper and fuel",
    aromaNote: "The first note is sweet grape candy, followed by a richer vanilla-dough center. On the finish, pepper and fuel give the profile weight without losing that purple-fruit character.",
    structure: "Purple, golf-ball flowers with a high calyx-to-leaf ratio",
    description: "#34 is a color-forward cultivar with thick resin and a memorable grape-and-fuel identity. It combines saturated purple expression with dense, dessert-driven flower structure.",
    fieldNote: "The plant carries a manageable, branchy frame with medium stretch. Its defining visual is a field of tightly formed, intensely purple flowers set under a heavy frost layer.",
    photos: ["/strains/number-34/number-34-01.jpg"],
    tone: "thirty-four",
  },
  {
    id: "london-truffle",
    number: "03",
    name: "London Truffle",
    eyebrow: "London Truffle",
    type: "Indica-leaning hybrid - 70 / 30",
    lineage: "White Truffle x London Pound Cake",
    flower: "8-9 weeks",
    typicalPotency: "30%+",
    aroma: "Earthy truffle, baked dough, grape sweetness and gas",
    aromaNote: "London Truffle opens savory and earthy, then moves into fresh-baked dough and a faint grape sweetness. Break a flower apart and the fuel note comes forward with a creamy pastry finish.",
    structure: "Compact, branchy plants with dense purple-frosted flowers",
    description: "London Truffle connects White Truffle's savory, resin-rich character with the polished pastry notes of London Pound Cake. It is a bold dessert cultivar with an earthy, fuel-leaning finish.",
    fieldNote: "A squat, tidy plant with close internodes and strong lateral branches. The finished flowers are dense and spade-shaped, with deep violet tones and a distinctive pale frost across the surface.",
    photos: ["/strains/london-truffle/london-truffle-01.jpg"],
    tone: "truffle",
  },
  {
    id: "tree-flip",
    number: "04",
    name: "Tree Flip",
    eyebrow: "Tree Flip",
    type: "Hybrid",
    lineage: "Lemon Tree x Wedding Cake",
    flower: "8-9 weeks",
    typicalPotency: "24-30%",
    aroma: "Lemon, vanilla cake, sweet fuel and gas",
    aromaNote: "Bright lemon leads the profile from the start, followed by vanilla cake and a sweet fuel edge. The finish is clean, zesty and gassy, with the citrus staying present all the way through.",
    structure: "Frosted, dense flowers with a vigorous, high-yielding character",
    description: "Tree Flip brings a bright Lemon Tree lead into Wedding Cake's creamy bakery-gas backbone. It is a vivid, lemon-forward cultivar with a sweet fuel edge and an intensely frosted finish.",
    fieldNote: "The plant has an energetic, productive shape and carries a well-filled flower set. At finish, the expression leans into dense frost, loud citrus and a strong visual contrast in the garden.",
    photos: ["/strains/tree-flip/tree-flip-01.jpg"],
    tone: "tree",
  },
];

export const strainsById = Object.fromEntries(strains.map((strain) => [strain.id, strain]));
