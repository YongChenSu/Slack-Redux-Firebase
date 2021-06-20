import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

export default function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'
          alt='slack logo'
        />
        <h1>Sign in to YongChen's Slack </h1>
        <p>slack-redux-firebase.yongchen.tw</p>

        <Button onClick={signIn}>Sing in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  background-color: #eee;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 60px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  @media screen and (min-width: 375px) {
    padding: 100px 50px;
  }

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > p {
    padding: 6px;
  }

  > button {
    margin-top: 50px;
    background-color: #298950;
    color: white;
    width: 100%;
    font-size: 18px;

    :hover {
      background-color: #3ba064;
    }
  }
`;
