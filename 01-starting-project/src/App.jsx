import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButoon.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

 
function App() {
  // Always with an state the it declare with the array structure value where first selectedTopic is showing number of count time & set selected is an function
  const [ selectedTopic, setSelectedTopic ] = useState( ); 
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

          {/* This one of thing we can use how many number of array size we know */}
          {/* <CoreConcept 
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
          <CoreConcept {...CORE_CONCEPTS[3]}/> */}

          {/* this another method to display the data let suppose  we don't know what is size of data how many time the data is comming so at thay time we are using the Array */}


          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}

        </ul> 
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'Components'} 
              onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton
              isSelected={selectedTopic === 'Jsx'} 
              onSelect={() => handleSelect('Jsx')}>Jsx</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'Props'} 
              onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton 
              isSelected={selectedTopic === 'State'} 
              onSelect={() => handleSelect('State')}>State</TabButton>
            {/* <TabButton label='Components'></TabButton>*/} {/* another component use method */}
          </menu>
          {/* so now we will easily replace this tabContent from here because  it will not work we have to use useState function */}
          {/* {tabContent} */}
          {/* {selectedTopic} */}

          {!selectedTopic ? <p>please select the topic</p> : (
                <div className="tab-content">  
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                    <code>
                      {EXAMPLES[selectedTopic].code}
                    </code>
                  </pre>
                  </div>
              ) }
        </section>
      </main>
    </div>
  );
}

export default App;   