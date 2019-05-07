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
  padding: 0 ${padding.medium};
`;


export const PageWrapper = ({ children }) => (
  <Container>
    <Sidebar />
    <Content>
      { children }
    </Content>
  </Container>
);
export default PageWrapper;
