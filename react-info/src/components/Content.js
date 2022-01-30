import React from 'react';


function Content() {
    return (
        <div className='content'>
            <h1 className="content--title">Fun facts about React</h1>
            <ul className='content--data'>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    );
}

export default Content;