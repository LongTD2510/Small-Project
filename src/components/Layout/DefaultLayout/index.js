import HeaderDefault from "./Header/HeaderDefault";

import React from 'react'

export default function DefaultLayout({children}) {
  return (
      <>
          <HeaderDefault />
          <div>
              {children}
          </div>
      </>
  )
}
