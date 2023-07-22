import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { Context } from 'vite-ssr-unhead/react'

export default function ({ router }: Context) {
  const [count, setCount] = useState(0)
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/repos">Repos</Link>
      </nav>

      <div>
        <button onClick={() => setCount(count + 1)}>Count:{count}</button>
      </div>

      <Routes>
        {router.routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component route={route} />}
          />
        ))}
      </Routes>
    </>
  )
}
