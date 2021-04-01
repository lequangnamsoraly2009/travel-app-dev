import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PageNotFound from '../../components/PageNotFound';
import AddProductItems from './pages/AddProductItems';
import MainProducts from './pages/MainProducts';

Products.propTypes = {};

function Products(props) {
  const match = useRouteMatch();
  console.log({ match });

  return (
    <Switch>
      <Route exact path={match.url} component={MainProducts} />

      <Route path={`${match.url}/add`} component={AddProductItems} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Products;