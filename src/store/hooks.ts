import type { RootState } from "./index"
import { useSelector } from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector