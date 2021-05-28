import styled from 'styled-components';

const TechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 7%;
  padding-left: 7%;
  margin-top: 25vh;
`;

const TechText = styled.div`
  color: #037780;
  font-size: 22px;
  font-weight: bold;
  padding-bottom: 20%;
`;

const TechTitle = styled.div`
  text-align: left;
  padding-top: 3%;
  font-size: 35px;
  color: #fa766a;
  padding-left: 2%;
`;

export {
  TechContainer, TechText, TechTitle
};
