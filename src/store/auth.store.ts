import { create } from 'zustand';
import { IUser,  } from '../types/user';

type IAuthStore = {
  user: IUser | null;
  isAuthorized: boolean;
  setUser: (user: IUser) => void;
};

export const useAuthStore = create<IAuthStore>((set) => {
  return {
    user: null,
    isAuthorized: false,
    setUser: (user) => set(() => ({ user: user })),
  };
});
