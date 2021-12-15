import { getWindow } from 'ssr-window'
/* eslint-env browser, node */
const window = getWindow()
export const mediaMobile = window.matchMedia('(max-width: 768px)')
/* eslint-env browser, node */
export const mediaTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)')
/* eslint-env browser, node */
export const mediaDesktop = window.matchMedia('(min-width: 1025px)')
