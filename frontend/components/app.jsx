import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({children}) => (
  <div id="siteHeader-container">
    <HeaderContainer />
    {children}
  </div>
);

export default App;
