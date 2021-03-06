import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: space-around;
  width: 50%;
`;

const Title = styled.div`
  padding-top: 3%;
  text-align: left;
  font-size: 35px;
  color: #fa766a;
  padding-left: 2%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
`;

const Info = styled.a`
  font-size: 25px;
  color: #037780;
  font-weight: bold;
  &:hover {
    color: #fa766a;
  }
`;

const WholeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 8%;
`;

export {
  InfoContainer, Info, WholeContainer, IconContainer, Title
};
