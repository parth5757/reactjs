import componentImg from './assets/components.png'
import { CORE_CONCEPTS } from './data';
import Header from './components/assets/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concept">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title="Components" description="The Core UI building block" img={componentImg} /> {/* props example */}
          <CoreConcept 
                    title={CORE_CONCEPTS[0].title} 
                    description={CORE_CONCEPTS[0].description} 
                    img={CORE_CONCEPTS[0].image} 
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App; 