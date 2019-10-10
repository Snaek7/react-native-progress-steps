import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  background: #3b5bfd;
  padding: 5px 20px;
`;

const NextBtn = styled.View`
  background: #3b5bfd;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ProgressButtons = props => (
  <Container>
    <View>{props.renderPreviousButton()}</View>
    <NextBtn>{props.renderNextButton()}</NextBtn>
  </Container>
);

export default ProgressButtons;
