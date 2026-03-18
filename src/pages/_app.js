import "@/styles/globals.css";

import Nav from "../pages/nav"
export default function App({ Component, pageProps }) {
        
  return <>
   <Nav/>
  <Component {...pageProps} />
  
  </>
}
