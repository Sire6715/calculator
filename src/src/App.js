import React, { useEffect } from "react"
import Calc from "./components/calc"
import useLocalStorage from "use-local-storage"
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from "@fortawesome/free-solid-svg-icons"

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme');

  useEffect(() => {
    setTheme('theme')
  }, [])

  library.add(faCircle)

  function theme1() {
    const newTheme = theme === 'theme2' ? 'theme' : 'theme'
    setTheme(newTheme)
  }
  function theme2() {
    const newTheme = theme === 'theme' ? 'theme1' : 'theme1'
    setTheme(newTheme)
  }
  function theme3() {
    const newTheme = theme === 'theme1' ? 'theme2' : 'theme2'
    setTheme(newTheme)
  }



  return (
    <section className="font-leaguespartan background flex flex-col justify-center items-center h-screen w-screen transition-all relative " data-theme={theme}>
      <div role="main" className='calculator lg:w-[27em]'>
        <div className="flex flex-row-reverse justify-between items-baseline">
          <div className="flex mb-4 items-end ">
            <span className={`${theme !== "theme" ? "theme--label" : "text-white"} text-[10px] font-bold mr-4 mb-1`}>THEME</span>
            <div>
              <span>
                <ul  className={`${theme !== "theme" ? "theme--label" : "text-white"} text-[10px] font-bold gap-4 flex mb-2`}>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </span>
              <div role="navigation" className="flex togglerspan justify-items-stretch">
                <span className=" flex flex-col">
                  <button  id="blue" title="bluetheme" onClick={theme1} className={`${theme === "theme" ? "toggler" : "inactivetoggler"}`}>
                    <FontAwesomeIcon icon="fa-solid fa-circle" /></button>
                </span>
                <span className=" flex flex-col">
                  <button  id="white" title="whitetheme" onClick={theme2} className={`${theme === "theme1" ? "toggler" : "inactivetoggler"}`}>
                    <FontAwesomeIcon icon="fa-solid fa-circle" /></button>
                </span>
                <span className=" flex flex-col">
                  <button  id="purple" title="purpletheme" onClick={theme3} className={`${theme === "theme2" ? "toggler" : "inactivetoggler"}`}>
                    <FontAwesomeIcon icon="fa-solid fa-circle" /></button>
                </span>
              </div>
            </div>
          </div>
          <h1 className={`${theme !== "theme" ? "cacl" : "text-white"}  text-2xl font-bold`}>cacl</h1>
        </div>
        <Calc theme={theme} />
      </div>
      <h1 className="absolute bottom-0">Challenge by
        <span className={`${theme !== "theme" ? "theme--label" : "text-white"}`}>
          Frontend Mentor
        </span>
        Coded by Your
        <span className={`${theme !== "theme" ? "theme--label" : "text-white"}`}> sire</span>.</h1>
    </section>
  )
}
