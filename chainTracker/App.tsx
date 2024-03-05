import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Login from './components/Login';

const App = () => {
  // You can manage the state here to decide which component to show, for example:
  // const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {/*  toggle between Login and CreateAccount }
      <Login />
      {/* <CreateAccount /> */}
    </ApplicationProvider>
  );
};

export default App;
