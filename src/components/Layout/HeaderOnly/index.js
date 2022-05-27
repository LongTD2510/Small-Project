import HeaderOnly from "../HeaderOnly/Header/HeaderOnly"
import React from 'react'

export default function DefaultLayout({children}) {
  return (
      <>
          <HeaderOnly />
          {console.log(children)}
          <div className="container">
              <div className="content">{children}</div>
          </div>
      </>
  )
}
