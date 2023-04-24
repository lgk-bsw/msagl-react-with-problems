import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { parseJSON } from "@msagl/parser"
import { RendererSvg } from "@msagl/renderer-svg"

const renderer = new RendererSvg()
const graph = parseJSON({
    nodes: [
        { id: "kspacey" },
        { id: "swilliams" },
        { id: "kbacon" },
        { id: "bpitt" },
        { id: "hford" },
        { id: "lwilson" }
    ],
    edges: [
        { source: "kspacey", target: "swilliams" },
        { source: "swilliams", target: "kbacon" },
        { source: "bpitt", target: "kbacon" },
        { source: "hford", target: "lwilson" },
        { source: "lwilson", target: "kbacon" }
    ]
})
renderer.setGraph(graph)

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
