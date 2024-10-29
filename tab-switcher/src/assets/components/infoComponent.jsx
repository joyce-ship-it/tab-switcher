import { useState } from "react"
import Button from "./Button"
import { EXAMPLES } from "./tabContents";

export default function TabContainer(){
    const [selectedTopic, setSelectedTopic] = useState('components');
    function handleClick(topicName){
        setSelectedTopic((name) => topicName);
        console.log(selectedTopic);
    }

    let tabContent = '';
    if(selectedTopic){
        tabContent = <div className="tab-content">
            <h2>{EXAMPLES[selectedTopic].title}</h2>
            <p>{EXAMPLES[selectedTopic].description}</p>
        </div>
    }
    
    return ( 
    <div id="tab-container">
        <h2>This is where you can find the info</h2>
        <menu>
            <Button isActive = {selectedTopic === 'components'} handleSelect={()=>handleClick('components')} >Components</Button>
            <Button isActive = {selectedTopic === 'jsx'} handleSelect={()=>handleClick('jsx')}>JSX</Button>
            <Button isActive = {selectedTopic === 'useState'} handleSelect={()=>handleClick('useState')}>useState</Button>
            <Button isActive = {selectedTopic === 'props'} handleSelect={()=>handleClick('props')}>Props</Button>
        </menu>
        {tabContent}
    </div>
     )
}