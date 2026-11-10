'use client';
import { createContext, useContext } from 'react';
import { business, type Business } from '@/lib/business';
const Context=createContext<Business>(business);
export function BusinessProvider({value,children}:{value:Business;children:React.ReactNode}){return <Context.Provider value={value}>{children}</Context.Provider>}
export function useBusiness(){return useContext(Context)}
