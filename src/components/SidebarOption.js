import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { enterRoom } from '../features/appSlice';
import { db } from '../firebase';

export default function SidebarOption({
  Icon,
  title,
  addChannelOption,
  id,
  isCursor,
}) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt('Please enter channel name');

    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <>
      <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
        isCursor={isCursor}
      >
        {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span> {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
    </>
  );
}

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: ${({ isCursor }) => (isCursor ? 'pointer' : '')};

  :hover {
    opacity: 0.9;
    background-color: var(--slack-purple-800);
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 500;
`;
