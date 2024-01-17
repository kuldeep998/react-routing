import React from "react";
import Headers from "./Header";

export default function Login() {
    return (
        <div>
            <Headers />
            <pre>
                <form>
                    Enter Email <input type="email" name="email" /><br />
                    Enter Password <input type="password" name="password" /><br />
                    <button>Login</button>
                </form>
            </pre>
        </div>
    )
};