import React from 'react';
import Accordion from './Accordion';
import Search from './Search';


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
]
export default () => {
    return(
        <div>
            {/* <Accordion items={items}/> */}
            <Search/>
        </div>
    )
};