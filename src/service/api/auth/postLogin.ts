import { post } from "@/service/sigletonAxios";
import type LoginInfo from "@/service/data/auth/LoginInfo";
import type LoginR from "@/service/data/auth/loginR";
import type R from "@/service/data/R";

export const postLoginInfo = (loginInfo: LoginInfo): Promise<R<LoginR>> => {
    return post("/auth/login", loginInfo);
}