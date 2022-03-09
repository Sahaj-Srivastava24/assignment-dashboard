import '../styles/globals.css'
import Navbar from "../components/Navbar";
import type { AppProps } from 'next/app'
import styled from '@emotion/styled'

const Background = styled.div`
  box-sizing: border-box;  
  margin: 0;
  padding: 0;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Background>
    <Navbar />
    <Component {...pageProps} />
  </Background>
  );
}

export default MyApp
