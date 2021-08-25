import React from 'react'
import './assets/scss/style.scss'
import { Route } from 'react-router-dom';
import routes from './routes/routes'
import HeaderTemplate from "./components/HeaderTemplate/HeaderTemplate";
import FooterTemplate from "./components/FooterTemplate/FooterTemplate";


function App() {
  return (
        <div>
            <div className='app__background'>
              <HeaderTemplate />
              {
                Object.values(routes).map(route =>
                    <Route
                        exact
                        key={route.component}
                        path={route.url} 
                        component={route.component}
                    />
                )
              }
              <FooterTemplate />
            </div>
        </div>
  );
}
export default App;
