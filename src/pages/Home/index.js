import React from "react";
import Sidebar from "../../components/Sidebar";
import AllGame from "../AllGame";
import "./index.css";

export default function Home() {
    return (
        <div className="casino-admin">
            <Sidebar />
            <AllGame />
        </div>
    );
}
