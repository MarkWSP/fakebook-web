import React from "react"
import DefaultImg from '../assets/default-avatar.png'
import { DropdownIcon } from "../icons"

export function Avatar(props) {
  const {imgSrc, menu, bottom, right, ...restProps } = props
  return (
    <div className="avatar items-center cursor-pointer">

      <div {...restProps}>
        <img src={imgSrc ? imgSrc : DefaultImg} alt="avatar" />
      </div>
    { menu && 
      <DropdownIcon className="bg-slate-300 rounded-full w-4 absolute -bottom-1 -right-1" style={{ right : right, bottom:bottom}} />
    }
    </div>
  )
}
