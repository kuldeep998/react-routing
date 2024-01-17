import React from "react";
import Headers from "./Header";

export default function Dashboard(props) {
    return (
        <div>
            <Headers />
            <h1>Hello {props.name}, Welcome to zazy</h1>
        </div>
    );
}