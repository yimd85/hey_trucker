
import React from 'react';
import { createButton, FacebookLoginButton } from "react-social-login-buttons";
import SvgIcon from '@material-ui/core/SvgIcon';

import KaKaoImage from '../images/pngwave.png'

const configKakao = {
    text: "Login with Kakao",
    icon: () => <img
        className="right-header"
        height='20'
        src={KaKaoImage}
        alt={'hey-trucker-logo'}
    />,
    className: 'gilroy-regular',
    style: { width: '235px', background: '#fee100', color: 'black', fontWeight: 'bold' },
    activeStyle: { border: '1px solid black', background: '#fee100' },
};

const MyKaKaoLoginButton = createButton(configKakao);


const configGoogle = {
    text: "Login with Google",
    icon: () => <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ fill: 'grey' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" /><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" /><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" /><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" /><script xmlns="" /></svg>
    </SvgIcon>,
    className: 'gilroy-regular',
    style: { width: '235px', background: 'white', color: 'black', fontWeight: 'bold' },
    activeStyle: { border: '1px solid black', background: '#eeeeee' },
};

const MyGoogleLoginButton = createButton(configGoogle);



const Login = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}>
            <div>
                <a style={{ textDecoration: 'none' }} href="/auth/google"  >
                    <MyGoogleLoginButton />
                </a>
            </div>

            <div  >
                <a style={{ textDecoration: 'none' }} href={process.env.REACT_APP_LOCATION + '/auth/kakao'} >
                    <MyKaKaoLoginButton />
                </a>
            </div>
            <div >
                <a style={{ textDecoration: 'none' }} href={process.env.REACT_APP_LOCATION + '/auth/facebook'} >
                    <FacebookLoginButton className={'gilroy-regular'} />
                </a>
            </div>

        </div>
    )
}

export default Login;


