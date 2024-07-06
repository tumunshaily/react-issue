"use client"
import styles from "./page.module.css";
import InputR from "../components/input/InputR";
import Input from "../components/input/Input";
import {useEffect, useState} from "react";

export default function Home() {
    const [changeState, setChangeState] = useState(true)
    const [newName, setNewName] = useState("initial")
    const clickHandler = () => {
        setChangeState(!changeState)
    }
    useEffect(() => {
        setNewName(newName + Math.random().toString())
        console.log("it triggered and re rendered")
    },[changeState])
  return (
    <main className={styles.main}>
        <button onClick={clickHandler} > Not rerender </button>
      <Input style={{background:"black", color:"white"}}  idName={newName}/>
        <button onClick={clickHandler} > re render </button>
      <InputR style={{background:"black", color:"white"}}  idName={newName}/>
    </main>
  );
}
