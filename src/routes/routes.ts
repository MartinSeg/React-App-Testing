import { lazy, LazyExoticComponent } from 'react';

interface Route {
    path: string,
    to: string,
    label: string,
    Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element)
}

const lazy1 = lazy( () => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const lazy2 = lazy( () => import(/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'))
const lazy3 = lazy( () => import(/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'))

export const routes:Route[] = [
    {
        path: '/lazy1',
        to: '/lazy1',
        label: 'Lazy 1',
        Component: lazy1
    },
    {
        path: '/lazy2',
        to: '/lazy2',
        label: 'Lazy 2',
        Component: lazy2
    },
    {
        path: '/lazy3',
        to: '/lazy3',
        label: 'Lazy 3',
        Component: lazy3
    }
]