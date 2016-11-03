import React from 'react';
import HeaderContainer from './header/header_container';

const App = ({children}) => (
  <div>
    <div id="siteHeader-container">
      <HeaderContainer />
    </div>
    <div className="siteBody-container">
      {children}
    </div>
  </div>
);

export default App;
