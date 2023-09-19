import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet /> // all childe component after this route "/" will be render here
      </main>
    </>
  );
}

export default RootLayout;
