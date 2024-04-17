import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButoon.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* <CoreConcept title="Components" description="The Core UI building block" img={componentImg} /> props example */}
          <CoreConcept 
                    title={CORE_CONCEPTS[0].title} 
                    description={CORE_CONCEPTS[0].description} 
                    img={CORE_CONCEPTS[0].image} 
          />
          <CoreConcept 
                    title={CORE_CONCEPTS[1].title} 
                    description={CORE_CONCEPTS[1].description} 
                    img={CORE_CONCEPTS[1].image} 
          />
          <CoreConcept 
                    title={CORE_CONCEPTS[2].title} 
                    description={CORE_CONCEPTS[2].description} 
                    img={CORE_CONCEPTS[2].image} 
          />
          <CoreConcept 
                    title={CORE_CONCEPTS[3].title} 
                    description={CORE_CONCEPTS[3].description} 
                    img={CORE_CONCEPTS[3].image} 
          />
        </ul> 
        </section>
        <section>
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Jsx</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
            {/* <TabButton label='Components'></TabButton>*/} {/* another component use method */}

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App; 