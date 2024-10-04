import { create } from 'zustand'
import { HealthCarer, Patient } from '../types/responseTypes';

interface State {
    userLogged: Patient | HealthCarer | null;
    setUserLogged: (user: Patient | HealthCarer) => void;
  }
  

export const useStore = create<State>((set) => ({
  userLogged: null,
  setUserLogged: (user: Patient | HealthCarer | null) => set({ userLogged: user}),
}))