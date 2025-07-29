import { createContext } from 'react';
import { type User } from 'firebase/auth';

export interface AuthContextType {
  currentUser: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);
