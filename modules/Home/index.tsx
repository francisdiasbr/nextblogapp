import Head from 'next/head';
import React from 'react';

import CardComponent from '../../components/card'
import {StyledCardRow, StyledContainer} from './styles';

export default function Home() {
  return (
    <StyledContainer data-testid="styled-container">
      <Head>
        <title>Trade Calc App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <StyledCardRow>
          <CardComponent 
            title='Sobre o projeto'
            subtitle='Sobre o projeto'
            subtitle2='Sobre o projeto'
            content='Sobre o projeto'
          />
          <CardComponent 
            title='Inicie por aqui!'
            subtitle='Inicie por aqui!'
            subtitle2='Inicie por aqui!'
            content='Inicie por aqui!'
          />
        </StyledCardRow>
        <StyledCardRow>
          <CardComponent 
            title='Calculadora'
            subtitle='Calculadora de Hedge'
            subtitle2='Use a calculadora de hedge para ver como você pode garantir lucro em suas apostas'
            content='Use a calculadora de hedge para ver como você pode garantir lucro em suas apostas'
          />
          <CardComponent 
            title='Bla Bla Bla'
            subtitle='Bla Bla Bla'
            subtitle2='Bla Bla Bla'
            content='Bla Bla Bla'
          />
        </StyledCardRow>
      <footer>
        <a
          href="https://github.com/francisdiasbr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Franps
        </a>
      </footer>
    </StyledContainer>
  );
}
