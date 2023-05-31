import React, { Fragment } from 'react'
import { getFirestore } from 'firebase/firestore'
import { Outlet } from 'react-router-dom'
import { FirestoreProvider, useFirebaseApp } from 'reactfire'

export const Main = () => {
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
    <main>
      <Outlet />
    </main>
    </FirestoreProvider>
  )
}
