import { DataLogin } from '../types/form';
import { IUserJWTPayload } from '../types/user';
import { data_Post } from '../utils/fetchOptions';
import { jwtDecode } from 'jwt-decode';
type ResponseJson = {acessToken?: string, messageError?: string }
export async function loginService(data: DataLogin) {
  const { url, options } = data_Post(data, 'auth/login');
  const res = await fetch(url, options as RequestInit);
  const json:ResponseJson = await res.json();
   return {res, json}
}
