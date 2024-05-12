import { ReactNode } from "react";

export  interface buttonProps {
    variants?: "primary" | "secandary" | "outline";
    IsFullSize?:boolean
    children:ReactNode
}