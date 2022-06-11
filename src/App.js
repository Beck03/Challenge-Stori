import { useState } from 'react';
import React from 'react';
import RutasApp from './routers/RutasApp';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function App() {
  const [isAuth, setIsAuth] = useState(null)
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(user)
    } else {
      setIsAuth(null)
    }
  });
  return (
    <section className='app'>
        <RutasApp isAuth={isAuth} />
    </section>
  );
}