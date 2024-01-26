import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

// React-redux
import { Provider } from 'react-redux'
import store from './store'
// 持久化：本质还是把store存到 local Storage 里面
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

// 全局样式
import '@/assets/scss/index.scss';

// React-router
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import routes from './routes'

// 布局 & 路由页面
import Layout from '@/layout/Layout'

// 全局loading组件
import Loading from '@/components/loading/loading';

const root = createRoot(document.getElementById("root"));
// 路由表配置
const renderRoutes = (routes) => {
    return routes.map(item => {
        if (item && item.children) {
            return (
                <Route path={item.path} element={item.element} key={item.key}>
                    { renderRoutes(item.children) }
                </Route>
            );
        } else {
            return (
                <Route path={item.path} element={item.element} key={item.key}></Route>
            );
        }
    });
};

// 持久化
let persistor = persistStore(store);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<Loading />}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            { renderRoutes(routes) }
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </PersistGate>
    </Provider>
);
