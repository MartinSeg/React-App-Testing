import { lazy, LazyExoticComponent } from 'react';
import NoLazy from '../01-lazyload/pages/NoLazy';

interface Route {
    path: string,
    to: string,
    label: string,
    Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)
}

const LazyLayout = lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'))

export const routes:Route[] = [
    {
        path: '/lazyLayout/*',
        to: '/lazyLayout',
        label: 'Lazy Layout - Dash',
        Component: LazyLayout
    },
    {
        path: '/no-lazy',
        to: 'no-lazy',
        label: 'No Lazy',
        Component: NoLazy
    },
]