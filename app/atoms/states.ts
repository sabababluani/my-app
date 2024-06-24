import { atom } from "recoil";

export const userIsGeorgianState = atom({
    key: "userIsGeorgian",
    default: false
})

export const profileIsVisibleState = atom({
    key: "profileIsVisible",
    default: false
})

export const darkModeState = atom({
    key: 'darkMode',
    default: false
})

export const imageChangeState = atom ({
    key: 'imageChange',
    default: ''
})