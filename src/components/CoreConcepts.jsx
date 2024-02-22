import { CORE_CONCEPTS } from '../data.js';

function CoreConcept({ image, title, description }) { //object destructing otherwise can be used as props and below used as props.image and without () brackets
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }

export default function CoreConcepts(){
    return(
    <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={CORE_CONCEPTS.title} {...conceptItem} />
            ))}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title} //without using spread operator
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
             {/* using spread operator */}
            {/* <CoreConcept {...CORE_CONCEPTS[1]} /> 
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
)}