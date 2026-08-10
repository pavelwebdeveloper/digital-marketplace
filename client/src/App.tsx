import { useEffect, useState } from "react";
import { getHealth } from "./services/api";

function App() {
    const [message, setMessage] = useState("Connecting to API...");

    useEffect(() => {
        getHealth()
            .then((data) => {
                setMessage(data.message);
            })
            .catch(() => {
                setMessage("Could not connect to API");
            });
    }, []);

    return (
        <div>
            <h1>Digital Marketplace</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;