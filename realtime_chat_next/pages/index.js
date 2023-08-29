import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Real-Time Chat App</h1>
            <Link href="/chat">Join Chat</Link>
        </div>
    );
};

export default Home;
