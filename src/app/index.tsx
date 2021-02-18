import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Страницы
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Глобальные стили
import { GlobalStyle } from 'styles/global-styles';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}