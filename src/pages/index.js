import { Router, useRouter } from "next/router";
import React from "react";
import Login from '../pages/auth/login'


export default function Home() {
  const router = useRouter()

  return (
    <>
    <Login/>
    </>
  );
}

