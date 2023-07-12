import styled from 'styled-components';

const Wrap = styled.section`
  width: 700px;
  height: 500px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  overflow-y: scroll;
`;

const ListWrap = styled.ul`
  cursor: pointer;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  line-height: 20px;
`;

const Comment = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 80px;
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
export { Wrap, ListWrap, Title, Comment, AdWrap };
