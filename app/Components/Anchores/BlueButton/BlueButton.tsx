// 'use client'
// import { useState } from "react";
// import { useRecoilState } from "recoil";
// import Style from "./BlueButon.module.scss"
// import { userIsGeorgianState } from "@/app/atoms/states";

// interface Props {
//     setHandleJoined: (value: boolean) => void;
//     isJoined: boolean;
// }

// export default function Button(props: Props) {
//     const [userIsGeorgian, setUserIsGeorgian] = useRecoilState(userIsGeorgianState)
//     const [isJoined , setIsJoined] = useState(false)
//     return (
//         <div className={Style.container}>{
//             <button onClick={() => props.setHandleJoined(!props.isJoined)}>{userIsGeorgian ? "შესვლა" : "Sign in"}</button>
//         }
//         </div>
//     )
// }