/* eslint-disable react/prop-types */

export const AppContainer = ({className = "", children}) => {
  return (
    <div className={`${className} max-w-[1332px] mx-auto px-[20px]`}>
        {children}
    </div>
  )
}
