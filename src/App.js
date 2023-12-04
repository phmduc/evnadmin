import { ConfigProvider } from 'antd';
import 'antd/dist/antd.less';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ProtectedRoute from './components/utilities/protectedRoute';
import config from './config/config';
import store from './redux/store';
import Admin from './routes/admin';
import Auth from './routes/auth';
import './static/css/style.css';
import 'react-toastify/dist/ReactToastify.css';

const NotFound = lazy(() => import('./container/pages/404'));

const { themeColor } = config;

function ProviderConfig() {
  const { rtl, topMenu, mainContent } = useSelector((state) => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
      mainContent: state.ChangeLayoutMode.mode,
    };
  });

  const isLoggedIn = sessionStorage.getItem('user_id');

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setPath(window.location.pathname);
    }
    return () => {
      unmounted = true;
    };
  }, [setPath]);

  return (
    <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={{ ...themeColor, rtl, topMenu, mainContent }}>
        <Suspense>
          <Router basename={process.env.PUBLIC_URL}>
            {!isLoggedIn ? (
              <Routes>
                <Route path="/*" element={<Auth />} />{' '}
              </Routes>
            ) : (
              <Routes>
                <Route path="/admin/*" element={<ProtectedRoute path="/*" Component={Admin} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
            {isLoggedIn && (path === process.env.PUBLIC_URL || path === `${process.env.PUBLIC_URL}/`) && (
              <Routes>
                {/* <Route path="/*" element={<Navigate to="/admin" />} /> */}
              </Routes>
            )}
          </Router>
        </Suspense>
      </ThemeProvider>
    </ConfigProvider>
  );
}

function App() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const eventSource = new EventSource('https://dbevn.webmau.net/wp-content/plugins/dbevn/includes/sse.php');

    eventSource.onmessage = (event) => {
      // Xử lý dữ liệu realtime ở đây
      console.log(event);
    };

  

    return () => {
      eventSource.close();
    };
}, []);
  return (
    <Provider store={store}>
      <ProviderConfig />
    </Provider>
  );
}

export default App;
