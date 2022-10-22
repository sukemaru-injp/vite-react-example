import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router } from 'react-router-dom';
import ToastProvider from '../components/ToastProvider';

const queryClient = new QueryClient()

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <p>Loading...</p>
      }
    >
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Router>{children}</Router>
        </ToastProvider>
      </QueryClientProvider>
    </React.Suspense>
  );
};