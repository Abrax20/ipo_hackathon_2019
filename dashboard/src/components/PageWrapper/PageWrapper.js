import React from 'react';
import styled from 'styled-components';

import {padding} from "../../styles";

import Sidebar from '../Sidebar/SideBar';

const Container = styled.div`
  height: 100%;
  display: flex;
`;
const Content = styled.div`
  flex: 1;
  padding: ${padding.large} ${padding.medium};
`;


export const PageWrapper = ({ index, children }) => (
  <Container>
    <Sidebar index={index} />
    <Content>
      { children }
    </Content>
  </Container>
);
export default PageWrapper;
