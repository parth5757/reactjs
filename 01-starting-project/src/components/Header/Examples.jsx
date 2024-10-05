import { useState } from "react";
import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButoon.jsx";
import Section from "../Sections.jsx";
export default function Examples() {
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
    return(
        <Section title="Examples" id="examples">
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
      </Section>
    )
}