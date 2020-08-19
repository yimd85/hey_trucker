import React from 'react';

const Landing = () => {
    return (
        <div className={'gilroy-regular'} style={{ color: 'white', backgroundColor: '#2f2e34', textAlign: 'center',  }}>


            <div className={'landingParent'}>

                <div style={{ marginTop: '50px', height: '10px', width: '500px', borderRadius: '5px', backgroundColor: '#fc652f'}}></div>

                <div style={{ padding: '50px', fontSize: '100px' }}>Hey, Trucker</div>
                <div style={{ marginTop: '50px', fontSize: '50px' }}>
                    {'Every day, millions of truckers are on the road moving shipments to destinations across the country.'}
                    {' Each shipping job has a return trip and an empty truck on the way back home is such a waste. Far too often,'}
                    {'truckers have no choice but to drive empty miles.'}
                </div>

                <div style={{ marginTop: '50px', fontSize: '50px' }}>
                    {'Meanwhile, consumers and businesses have surprisingly few options when it comes to bulk shipping. Mailing a few boxes usually costs a small fortune.'}
                </div>
                <div style={{ marginTop: '50px', fontSize: '50px' }}>
                    {'Our mission is to provide a platform to connect consumers and businesses with professional truckers.'}
                    {'We want to make empty trucks available to the masses, so that we all have greater choice in shipping and truckers drive fewer empty miles.'}
                </div>
            </div>
        </div>
    )
}

export default Landing;