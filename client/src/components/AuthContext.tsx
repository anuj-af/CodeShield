// import type React from "react"
// import { createContext, useContext, useState, useEffect } from "react"
// import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, type User } from "firebase/auth"
// import { auth } from "./firebaseConfig"

// interface AuthContextType {
//   user: User | null
//   loading: boolean
//   signIn: () => Promise<void>
//   signOut: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<User | null>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user)
//       setLoading(false)
//     })

//     return () => unsubscribe()
//   }, [])

//   const signIn = async () => {
//     const provider = new GoogleAuthProvider()
//     await signInWithPopup(auth, provider)
//   }

//   const signOutUser = async () => {
//     await signOut(auth)
//   }

//   return <AuthContext.Provider value={{ user, loading, signIn, signOut: signOutUser }}>{children}</AuthContext.Provider>
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }

"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type User,
} from "firebase/auth"
import { auth } from "./firebaseConfig"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  testLogin: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  }

  const signOutUser = async () => {
    await signOut(auth)
  }

  const testLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, "test@codeshield.com", "testpassword123")
    } catch (error) {
      console.error("Error signing in with test account", error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut: signOutUser, testLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}