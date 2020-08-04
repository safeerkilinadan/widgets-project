import React, { useState } from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';


const items = [
    {
        title:'What is React?',
        content:'React is a frontend javascript framework'
    },
    {
        title:'Why use React?',
        content:'React is a favourite library among engineers'
    },
    {
        title:'How do you use React?',
        content:'You use react by creating components'
    }
];

const options = [
    {
        label:'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value:'Green'
    },
    {
        label:'A shade of blue',
        value:'blue'
    }
]

export default () => {

    const [selected,setSelected] = useState(options[0]);

    return(
        <div>
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            <Dropdown 
                selected={selected}
                options={options}
                onSelectedChange={setSelected}
            />
        </div>
    )
};