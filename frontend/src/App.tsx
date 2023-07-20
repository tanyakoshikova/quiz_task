import React from 'react';
import './App.scss';
import Navbar from "components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Home} from "components/Pages/Home";
import Questions from "components/Quiz/Questions";
import {NoPage} from "components/Pages/NoPage";
import Layout from "components/Pages/Layout";

export function App() {

    return (
        <div className={"app"}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home/>} />
                    <Route path="/quiz" element={<Questions/>} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </div>
    );
}
