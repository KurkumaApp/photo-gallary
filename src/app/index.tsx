import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Страницы
import { NotFoundPage } from './pages/NotFoundPage';
import { PhotoGallaryPage } from './pages/PhotoGallaryPage';

// Глобальные стили
import { GlobalStyle } from 'styles/global-styles';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/photos' />
        <Route exact path='/photos' component={PhotoGallaryPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}