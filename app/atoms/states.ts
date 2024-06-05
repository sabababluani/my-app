import { atom } from "recoil";

export const userIsGeorgianState = atom({
    key: "userIsGeorgian",
    default: false
})

export const userIsLogedOutState = atom({
    key: "userIslogetOut",
    default: false
})

export const userNameState = atom ({
    key: "userName",
    default: ''
})