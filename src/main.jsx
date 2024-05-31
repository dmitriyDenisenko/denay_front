import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from "./routing/Router.jsx";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import {DevSupport} from "@react-buddy/ide-toolbox";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <Router/>
        </DevSupport>
    </React.StrictMode>,
)
