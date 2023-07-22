import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "components/Pages/Layout";
import {Home} from "components/Pages/Home";
import Questions from "components/Quiz/Questions";
import {NoPage} from "components/Pages/NoPage";

export function AppRoutes() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/quiz" element={<Questions/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}