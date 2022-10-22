import toast, { Toaster } from 'react-hot-toast';
import React from 'react'

type Props = {
  children: React.ReactNode
}
const ToastProvider: React.FC<Props> = ({ children }) => {

  return (
    <>
      <Toaster />
      {children}
    </>
  )
}

export const useToast = () => {
  return {
    successToast: (str: string) => toast.success(`${str}`),
    errorToast: (str: string) => toast.error(`${str}`)
  }
}

export default ToastProvider