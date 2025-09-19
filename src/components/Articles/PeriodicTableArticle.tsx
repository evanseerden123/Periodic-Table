const Article = () => {
  return (
    <div className="font-sans leading-relaxed mx-auto p-7 dark:text-neutral-200">
      <h1 className="text-center text-3xl font-bold text-halogen-400 dark:text-nonmetal-400/60 border-b-2 border-gray-200 pb-4 mb-8 mt-10">
        The Periodic Table: A Cornerstone of Modern Chemistry
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-halogen-400 dark:text-neutral-200 mb-4">Introduction to the Periodic Table</h2>
        <p className="mb-4">
          The periodic table of elements is one of the most iconic and fundamental tools in the field of chemistry. It organizes all known chemical elements in a tabular format based on their atomic number, electron configurations, and recurring chemical properties. This arrangement allows scientists to predict the behavior of elements, understand their relationships, and discover patterns in their physical and chemical attributes.
        </p>
        <p>
          Conceived in the 19th century, the periodic table has evolved into a comprehensive framework that underpins much of modern science, from materials engineering to pharmacology. With 118 confirmed elements as of the current date, it continues to expand as new superheavy elements are synthesized in laboratories around the world.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-halogen-400 dark:text-neutral-200 mb-4">Historical Development</h2>
        <p className="mb-4">
          The journey toward the modern periodic table began in the early 19th century when chemists started noticing similarities among elements. In 1817, Johann Wolfgang Döbereiner identified "triads" of elements with similar properties, such as lithium, sodium, and potassium, where the atomic weight of the middle element was approximately the average of the other two.
        </p>
        <p className="mb-4">
          Building on this, John Newlands proposed the "Law of Octaves" in 1865, arranging elements in order of increasing atomic weight and noting that every eighth element exhibited similar properties, akin to musical notes. However, his idea was met with skepticism.
        </p>
        <p className="mb-4">
          The breakthrough came in 1869 when Dmitri Mendeleev, a Russian chemist, published his periodic table. Mendeleev arranged elements by atomic weight and left gaps for undiscovered elements, predicting their properties with remarkable accuracy. For instance, he foresaw the existence of gallium and germanium, which were later discovered and matched his predictions.
        </p>
        <p className="mb-4">
          Concurrently, Lothar Meyer developed a similar table, but Mendeleev's version gained prominence due to its predictive power. In the 20th century, Henry Moseley's work on X-ray spectra established that atomic number, rather than atomic weight, was the fundamental organizing principle, refining the table further.
        </p>
        <div className="bg-halogen-400/30 dark:bg-nonmetal-400/30 p-4 border-l-4 border-halogen-400 dark:border-nonmetal-400">
          <p><strong>Key Milestone:</strong> The International Union of Pure and Applied Chemistry (IUPAC) oversees the periodic table's standardization, ensuring consistency in element naming and placement.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold dark:text-neutral-200 text-halogen-400 mb-4">Structure of the Periodic Table</h2>
        <p className="mb-4">
          The periodic table is divided into rows called periods and columns called groups. There are seven periods, each representing a principal energy level in the electron shell model. As one moves from left to right across a period, the atomic number increases, and elements transition from metals to nonmetals.
        </p>
        <p className="mb-4">
          Groups, numbered from 1 to 18 in the modern IUPAC system, contain elements with similar valence electron configurations, leading to comparable chemical behaviors. For example:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Group 1 (Alkali Metals):</strong> Highly reactive metals like sodium and potassium that readily lose one electron.</li>
          <li><strong>Group 17 (Halogens):</strong> Reactive nonmetals such as chlorine and iodine that gain one electron to form anions.</li>
          <li><strong>Group 18 (Noble Gases):</strong> Inert elements like helium and neon with full electron shells.</li>
        </ul>
        <p className="mb-4">
          The table also features two detached rows at the bottom: the lanthanides (elements 57–71) and actinides (elements 89–103), which are part of the f-block and exhibit unique properties due to their f-orbital electrons.
        </p>
        <p>
          Elements are categorized into metals, nonmetals, and metalloids. Metals, occupying the left and center, are typically shiny, conductive, and malleable. Nonmetals, on the right, are poor conductors and often gases or brittle solids. Metalloids, along the staircase line, possess intermediate properties.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-halogen-400 dark:text-neutral-200 mb-4">Periodic Trends and Properties</h2>
        <p className="mb-4">
          One of the periodic table's greatest strengths is revealing trends in elemental properties, which arise from atomic structure.
        </p>
        <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">Atomic Radius</h3>
        <p className="mb-4">
          Atomic radius decreases across a period due to increasing nuclear charge pulling electrons closer, but increases down a group as additional electron shells are added.
        </p>
        <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">Electronegativity</h3>
        <p className="mb-4">
          Electronegativity, the tendency to attract electrons in a bond, increases across a period and decreases down a group. Fluorine is the most electronegative element.
        </p>
        <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">Ionization Energy</h3>
        <p className="mb-4">
          The energy required to remove an electron rises across a period and falls down a group, reflecting electron shielding and nuclear attraction.
        </p>
        <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">Reactivity</h3>
        <p>
          Metal reactivity increases down groups and decreases across periods, while nonmetal reactivity follows the opposite pattern.
        </p>
        <p>
          These trends enable chemists to anticipate reactions, such as the vigorous interaction between alkali metals and water or the stability of noble gases.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-halogen-400 dark:text-neutral-200 mb-4">Applications and Significance</h2>
        <p className="mb-4">
          The periodic table is indispensable across scientific disciplines. In materials science, it guides alloy development; for example, transition metals like iron and copper form the basis of steels and electronics.
        </p>
        <p className="mb-4">
          In medicine, elements such as iodine (for thyroid function) and platinum (in chemotherapy drugs) highlight its role in health. Environmental chemistry uses it to study pollutants like heavy metals (e.g., lead and mercury) and their bioaccumulation.
        </p>
        <p className="mb-4">
          Astrophysics employs the table to analyze stellar spectra, revealing cosmic element abundances. In nuclear physics, it aids in understanding radioactivity and synthesizing new elements, like oganesson (element 118), completed in 2006.
        </p>
        <p className="mb-4">
          Educationally, the periodic table fosters scientific literacy, teaching patterns and predictions. Its cultural impact is evident in art, music, and popular media, symbolizing the quest for knowledge.
        </p>
        <div className="bg-halogen-400/30 dark:bg-nonmetal-400/30 p-4 border-l-4 border-halogen-400 dark:border-nonmetal-400">
          <p><strong>Future Prospects:</strong> Ongoing research into island of stability theories suggests potential superheavy elements with enhanced stability, expanding the table further.</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-halogen-400 dark:text-neutral-200 mb-4">Conclusion</h2>
        <p className="mb-4">
          The periodic table stands as a testament to human ingenuity, transforming disparate observations into a unified system. From Mendeleev's visionary gaps to today's synthetic elements, it evolves with scientific progress. As we delve deeper into quantum mechanics and particle physics, the periodic table remains a vital map of the atomic world, inspiring discoveries that shape our future.
        </p>
        <p>
          For those eager to explore further, interactive online versions and educational resources provide dynamic ways to engage with this foundational tool.
        </p>
      </section>
    </div>
  );
};

export default Article;