import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Drinks } from "./drinks/Drinks"
import { Home } from "./home/Home"
import { Broths } from "./broths/Broths"
import { About } from "./about/About"

export default function ApplicationViews() {
    return (
        <Routes>
            <Route path="/">
                <Route
                    index
                    element={<Home />}
                />
                <Route
                    path="broths"
                    element={<Broths />}
                />
                <Route
                    path="drinks"
                    element={<Drinks />}
                />
                <Route
                    path="about"
                    element={<About />}
                />
                <Route path="*" element={<p>Go away</p>} />
            </Route>
        </Routes>
    );
}