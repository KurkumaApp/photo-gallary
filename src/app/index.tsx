import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Страницы
import { NotFoundPage } from './pages/NotFoundPage';

// Глобальные стили
import { GlobalStyle } from 'styles/global-styles';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}