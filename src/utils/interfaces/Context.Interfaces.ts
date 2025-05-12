import { UserAuth } from "./User.interfaces";

export interface contextValues {
    credencias:UserAuth,
    setCredencias:React.Dispatch<React.SetStateAction<UserAuth>>
}