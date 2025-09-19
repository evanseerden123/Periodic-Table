
const MetalloidsEssay = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl max-h-fit mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-blue-600 text-white">
          <h1 className="text-3xl font-bold">Metalloids: The Versatile Elements at the Metal-Nonmetal Boundary</h1>
        </div>
        <div className="p-6 prose prose-lg max-w-none">
          <p>Metalloids—boron (B), silicon (Si), germanium (Ge), arsenic (As), antimony (Sb), and tellurium (Te)—straddle the metal-nonmetal divide, exhibiting hybrid properties. Their intermediate electronegativity and semiconducting behavior make them critical in electronics and materials science, offering a unique study for chemists exploring periodic trends.</p>

          <h2>Physical and Chemical Properties</h2>
          <p>Metalloids are solids with intermediate densities (B: 2.46 g/cm³; Te: 6.24 g/cm³) and melting points (Si: 1414°C; As: 817°C sublimes). Electronegativity ranges from 1.90 (B) to 2.18 (As), enabling covalent or polar bonds. Boron forms icosahedral structures, while silicon and germanium adopt diamond-like lattices, conferring semiconductivity (band gaps: Si: 1.12 eV; Ge: 0.67 eV). Antimony and tellurium show metallic luster but brittle behavior.</p>

          <h2>Reactivity and Reactions</h2>
          <p>Boron forms boranes (B₂H₆) with unique three-center bonds. Silicon reacts with halogens (Si + 2Cl₂ → SiCl₄), and arsenic yields toxic arsine (AsH₃). Tellurium forms oxides (TeO₂) and hydrides, while antimony’s +3 state is stabilized by the inert pair effect. Metalloids often form amphoteric oxides (e.g., B₂O₃, SiO₂), reacting with both acids and bases.</p>

          <h2>Applications and Biological Roles</h2>
          <p>Silicon dominates microelectronics (chips, solar cells), and germanium enhances infrared optics. Boron strengthens glass (Pyrex) and composites. Arsenic in GaAs enables high-speed semiconductors, while tellurium is used in CdTe solar cells. Antimony alloys improve battery electrodes. Biologically, boron aids plant growth, but arsenic’s toxicity limits its role.</p>

          <h2>Future Directions</h2>
          <p>Research explores 2D metalloid materials (e.g., silicene, borophene) for next-generation electronics, boron nitride nanotubes as carbon alternatives, and tellurium-based thermoelectric devices for energy harvesting.</p>
        </div>
      </div>
    </div>
  );
};

export default MetalloidsEssay;