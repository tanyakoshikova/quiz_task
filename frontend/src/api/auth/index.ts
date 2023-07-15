import {axiosInstance} from "api/instance";
import Endpoints from "api/endpoints";
import {ILoginRequest} from "api/auth/types";
import {ILoginResponse} from "api/auth/types";
import {AxiosPromise} from "axios";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
    axiosInstance.post(Endpoints.AUTH.LOGIN, params)

export const refreshToken = (): AxiosPromise<ILoginResponse> => axiosInstance.get(Endpoints.AUTH.REFRESH)

export const logout = (): AxiosPromise => axiosInstance.get(Endpoints.AUTH.LOGOUT)

export const getProfile = (): AxiosPromise<string> => axiosInstance.get(Endpoints.AUTH.PROFILE)

