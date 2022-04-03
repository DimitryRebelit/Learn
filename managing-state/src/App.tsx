import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Routing from "./Routing";


export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
           <Routing />
        </main>
      </div>
      <Footer />
    </>
  );
}
