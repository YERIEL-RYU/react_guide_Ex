import React from 'react';
import RedColor from './atoms/Color'

const css = {
    color:'red',
    fontsize : 24
}

const Home = () => {
    console.log(RedColor)
    return (
        <div style={RedColor}>
            Hello, world!
        </div>
    );
};

export default Home;