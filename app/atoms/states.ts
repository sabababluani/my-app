import { atom } from "recoil";

export const userIsGeorgianState = atom({
    key: "userIsGeorgian",
    default: false
})

export const profileIsVisibleState = atom({
    key: "profileIsVisible",
    default: false
})

export const userNameState = atom ({
    key: "userName",
    default: ''
})