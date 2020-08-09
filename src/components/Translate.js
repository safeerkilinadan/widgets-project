import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label:'Malayalam',
        value:'ml'
    },
    {
        label:'Hindi',
        value:'hi'
    },
    {
        label:'Tamil',
        value:'ta'
    }
]

const Translate = () =>{

    const [language,setLanguage] = useState(options[0]);
    const [text,setText] = useState('');
    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input onChange={e=>setText(e.target.value)} value={text}/>
                </div>
            </div>
            
            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a language"
                />
                <hr/>
                <h3 className="ui header">Output</h3>
                <Convert
                text={text}
                language={language}/>
        </div>
    );
}

export default Translate;