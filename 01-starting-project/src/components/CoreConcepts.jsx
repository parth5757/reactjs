import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data.js"

export default function CoreConcepts() {
    return(
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
    )
}