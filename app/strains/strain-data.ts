export type CultivationNote = {
  label: string;
  title: string;
  body: string;
};

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
  cultivationNotes: CultivationNote[];
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
    structure: "Dense, resin-forward flowers with deep color expression",
    description: "A frost-heavy selection where the dark, cookie-like Oreoz side meets the bright citrus lift of Lemon Iccee. The result is a layered dessert-and-fuel profile with a vivid lemon finish.",
    fieldNote: "A sturdy, compact frame builds tightly stacked flowers. Because this cultivar finishes dense, late-flower airflow and attentive timing help preserve its character.",
    cultivationNotes: [
      { label: "Growth habit", title: "Compact with a measured stretch", body: "Oreo Blizzard keeps close internodes and typically adds about half again its veg height through early flower. Early topping and an open, supported canopy help it fill space evenly." },
      { label: "Flower set", title: "Chunky flowers, early resin", body: "Expect compact, spade-like flowers with minimal leaf in the finished form. The heavy stacking phase benefits from a well-aerated root zone and a steady calcium and magnesium program." },
      { label: "Climate focus", title: "Protect the dense interior", body: "The tight flower structure rewards deliberate airflow and lower late-flower humidity. Cooler nights near the finish can bring out its signature deep purple-to-black contrast." },
      { label: "Finish", title: "Slow down the dry", body: "A slow, controlled dry preserves the cocoa, lemon and fuel character. The profile generally becomes more rounded after a patient cure rather than a rushed finish." },
    ],
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
    structure: "Purple, golf-ball flowers with a high calyx-to-leaf ratio",
    description: "#34 is a color-forward cultivar with thick resin and a memorable grape-and-fuel character. It brings Tropicanna Punch's purple expression together with Wedding Cake's dense, dessert-driven structure.",
    fieldNote: "A manageable, branchy frame carries medium stretch. Late in flower, the visual is all saturated purple, tightly formed buds and a heavy frost layer.",
    cultivationNotes: [
      { label: "Growth habit", title: "Branchy and canopy-friendly", body: "#34 stays compact through veg, then carries a medium stretch after the flip. Topping, low-stress training and a trellis help open the lateral branches before the canopy gets dense." },
      { label: "Flower set", title: "Golf-ball density", body: "The finish is defined by round, tightly packed flowers with very little excess leaf. Begin watching ripeness around week seven; the usual finish lands in the 56-63 day range." },
      { label: "Color and climate", title: "Purple is part of the identity", body: "The genetic purple shows readily, while a consistent late-flower night drop can deepen the expression across the calyxes and sugar leaf. Even airflow matters as the flowers bulk up." },
      { label: "Finish", title: "Give grape and fuel time", body: "Its dense structure benefits from purposeful thinning and a measured dry. A slower cure lets the grape-candy opening settle into the dough, pepper and fuel notes behind it." },
    ],
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
    structure: "Compact, branchy plants with dense purple-frosted flowers",
    description: "London Truffle connects White Truffle's savory, resin-rich character with the sweet pastry notes of London Pound Cake. It is a bold dessert cultivar with an earthy, fuel-leaning finish and unmistakable visual presence.",
    fieldNote: "A squat, tidy plant with close internodes and strong lateral branching. Those traits suit a well-managed, evenly spaced canopy.",
    cultivationNotes: [
      { label: "Growth habit", title: "Short nodes, strong laterals", body: "London Truffle starts stocky and branchy, then can roughly double after the flip. Topping and a spread canopy help turn the naturally tight structure into a field of even colas." },
      { label: "Flower set", title: "Dense, uniform and purple", body: "The flowers finish chunky and spade-shaped with tight calyx stacking and a thick frost layer. Start checking maturity at day 56; the usual flower window is 8-9 weeks." },
      { label: "Climate focus", title: "Airflow is part of the program", body: "This cultivar builds dense, resin-rich colas, so the late canopy needs steady circulation and lower humidity. Gentle environmental control also supports the deep violet finish." },
      { label: "Finish", title: "A patient cure opens the pastry notes", body: "A dark, cool dry with gentle air protects the sweet top notes. With time in cure, the truffle, dough and gas direction becomes more complete and defined." },
    ],
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
    structure: "Frosted, dense flowers with a vigorous, high-yielding character",
    description: "Tree Flip carries a bright Lemon Tree lead into Wedding Cake's creamy bakery-gas backbone. The cultivar is remembered for an unmistakable lemon-forward nose, a sweet fuel edge and an intensely frosted finish.",
    fieldNote: "A vigorous, productive plant built to show off loud terpenes and fully finished flower.",
    cultivationNotes: [
      { label: "Growth habit", title: "Vigorous from the start", body: "Tree Flip carries an energetic hybrid frame that responds well to early shaping and thoughtful support. Give the laterals room so the canopy can carry a productive flower set." },
      { label: "Flower set", title: "Bright terps, dense frost", body: "The flower profile is built around a clear lemon lead with creamy cake underneath, finished by sweet fuel and gas. Frost coverage and density are key parts of its final presentation." },
      { label: "Canopy focus", title: "Keep the light moving through", body: "As the plant stacks, consistent spacing and circulation help the lower and interior flower finish with the same attention as the tops. Keep the canopy clean, supported and evenly exposed." },
      { label: "Finish", title: "Let the lemon stay bright", body: "A measured finish and cure help protect the fresh citrus top note while giving the cake and fuel base time to settle into the overall profile." },
    ],
    tone: "tree",
  },
];

export const strainsById = Object.fromEntries(strains.map((strain) => [strain.id, strain]));
