import React, { Component } from 'react';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <header className='landing'>
            <section className='welcome-screen'>
                <div className='typewriter'>
                    <h1>Welcome To Headcount 2.0</h1>
                </div>
                <input aria-label='Search field' type='text'></input>
            </section>
        </header>
         );
    }
}
 
export default Landing;