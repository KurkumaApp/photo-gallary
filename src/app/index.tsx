import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Страницы
import { NotFoundPage } from './pages/NotFoundPage';
import { PhotosPage } from './pages/PhotosPage';

// Глобальные стили
import { GlobalStyle } from 'styles/global-styles';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/photos' />
        <Route exact path='/photos' component={PhotosPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}