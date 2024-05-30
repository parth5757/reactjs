import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButoon.jsx';
import { useState } from 'react';

function App() {
  // Always with an state the it declare with the array structure value where first selectedTopic is showing number of count time & set selected is an function
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button');
  // we simply think to change the component state we think we can directly use this but this thing is not work because without using state we can't change the value of an component in page without  
  // let tabContent = 'Please click a button'

  function handleSelect(selectedButton){
    // Selected Button => 'components', 'jsx', 'props', 'state'
    // tabContent = selectedButton;
    // now using usestate we can change value of of selected topic 
    // console.log(tabContent);
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  console.log('APP COMPONENT EXECUTING')
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('Jsx')}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
            {/* <TabButton label='Components'></TabButton>*/} {/* another component use method */}
          </menu>
          {/* so now we will easily replace this tabContent from here because  it will not work we have to use useState function */}
          {/* {tabContent} */}
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;  