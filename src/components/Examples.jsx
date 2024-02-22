import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';

export default function Examples(){
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
      setSelectedTopic(selectedButton);
    }
    
  return(
    <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {!selectedTopic ? (<p>Please Select a Topic from Above!</p>) : (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </div> )}
    </section>
)}