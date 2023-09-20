'use client'

import Input from "@/components/input";
import { useState, useCallback } from "react";

export default function Auth() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const [version, setVersion] = useState("login")
  const toggleVersion = useCallback(() => {
    setVersion((currentVersion) => currentVersion === "login" ? "register" : "login")
  }, []);


  return (
    <div className="w-full h-full relative bg-[url('/img/login.jpg')] bg-cover bg-no-repeat bg-top bg-fixed">
      <div className="w-full h-full bg-black sm:bg-black/50">
        <nav className="px-12 py-5">
          <img src="/img/hero.svg" alt="hero" className="h-20" />
        </nav>
        <div className="flex justify-center -mt-12">
          <div className="bg-black/70 p-16 self-center mt-2 sm:w-2/5 lg:max-w-md w-full rounded-md">
            <h2 className=" text-white text-4xl mb-8 font-semibold">
              {version == "login" ? "Sing In" : "Sing Up"}
            </h2>
            <div className="flex flex-col gap-4">
              <Input id="username" label="Username" type="text" value={username} onChange={(ev: any) => { setUsername(ev.target.value) }} />
              <Input id="email" label="Email" type="email" value={email} onChange={(ev: any) => { setEmail(ev.target.value) }} />
              <Input id="Password" label="Password" type="password" value={password} onChange={(ev: any) => { setPassword(ev.target.value) }} />
              {version == "register" ? <Input id="Password" label="Repeat password" type="password" value={password2} onChange={(ev: any) => { setPassword2(ev.target.value) }} /> : null}
            </div>
            <button className="bg-sky-600 py-3 text-white rounded-md w-full mt-10 hover:bg-sky-950 transition">
              {version == "login" ? "login" : "register"}
            </button>
            <p className=" text-white mt-4">
              {version == "login" ? "never used our platform?" : "back to login and"}
            </p>
            <span onClick={toggleVersion} className="text-white underline cursor-pointer hover:text-sky-600 transition">
              {version == "login" ? "create an account" : "use your account"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
