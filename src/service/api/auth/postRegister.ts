import { post } from "@/service/sigletonAxios";
import type RegisterR from "@/service/data/auth/registerR";
import type R from "@/service/data/R";
import type RegisterInfo from "@/service/data/auth/RegisterInfo";

export const postRegisterInfo = (registerInfo: RegisterInfo): Promise<R<RegisterR>> => {
    return post("/auth/register", registerInfo)
}
