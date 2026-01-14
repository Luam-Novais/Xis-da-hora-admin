import { JwtPayload } from 'jwt-decode';
export interface IAuthJwtPayload extends JwtPayload {
  role: string;
}
