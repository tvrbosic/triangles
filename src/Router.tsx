import { Route, Routes } from 'react-router-dom';

import Layout from 'components/layout/Layout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import CreateTriangle from 'pages/CreateTriangle';
import EditTriangle from 'pages/EditTriangle';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/triangles/create" element={<CreateTriangle />} />
        <Route path="/triangles/:id" element={<EditTriangle />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
