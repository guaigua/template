import Head from 'next/head';
import React from 'react';

class headers extends React.Component {

    render() {
      
        return (
            <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>    
            </div>            
        );
    }
}

export default headers;