import NavBar from '@/component/shared/NavBar/NavBar'

const layout = ({ children } : {children : React.ReactNode} ) => {
  return (
    <div>
      <NavBar />
        {children}
    </div>
  )
}

export default layout