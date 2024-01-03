const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-500 to-green-900">
      {children}
    </div>
  )
}

export default AuthLayout
