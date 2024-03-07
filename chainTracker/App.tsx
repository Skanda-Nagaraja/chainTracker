import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Login from './src/components/Login';
import CreateAccount from './src/components/CreateAccount';
// import landing from './components/landing'

const App = () => {
  // You can manage the state here to decide which component to show, for example:
  // const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/*  toggle between Login and CreateAccount }
      // {/*  */}
      <CreateAccount/>
       {/* <Login/>  */}
    </ApplicationProvider>
  );
};

export default App;


