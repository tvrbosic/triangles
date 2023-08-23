import { Route, Routes } from 'react-router-dom';

import routes from 'router/routes';

import Layout from 'components/layouts/Layout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import CreateTriangle from 'pages/CreateTriangle';
import EditTriangle from 'pages/EditTriangle';

const Router = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.createTriangle} element={<CreateTriangle />} />
        <Route path={routes.editTriangle} element={<EditTriangle />} />
        <Route path={routes.login} element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
