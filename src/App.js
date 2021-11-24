
import {  lazy, Suspense } from 'react';
import { GlobalStyle } from './globalStyles';

const Home = lazy( () => import("./Pages/Home"));
const Header = lazy( () => import("./components/Header/Header"));
const Footer = lazy( () => import("./components/Footer/Footer"));
const ScrollToTop = lazy( () => import("./components/ScrollToTop/ScrollToTop"));


function App() {
  return (
    < >
    <Suspense fallback={null} >

        <GlobalStyle />
        <ScrollToTop />
        <Header />
        <Home />
        <Footer />
    
    </Suspense>
    </>
  );
}

export default App;
