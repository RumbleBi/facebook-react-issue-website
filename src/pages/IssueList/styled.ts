import styled from 'styled-components';

const Wrap = styled.section`
  width: 700px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  overflow-y: scroll;
`;

const AdWrap = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  padding: 0px 10px;
  margin-bottom: 20px;
  > img {
    height: 80px;
  }
`;
export { Wrap, AdWrap };
