import styled from 'styled-components';

export default function Message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user}
          <span>{new Date(timestamp?.toDate()).toLocaleTimeString()}</span>

          <p>{message}</p>
        </h4>
      </MessageInfo>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 10px 20px;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 6px;
    object-fit: cover;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: #707070;
    font-size: 10px;
    font-weight: 300;
    margin-left: 4px;
  }

  > h4 > p {
    font-weight: 500;
  }
`;
