import React from 'react'
import Clicks from './clicks/Clicks'
import { ClickStore, ClickStoreImplementation } from './clicks/ClickStore'

function App() {
    return (
        <Clicks clickStore={ClickStore}/>
    )
}

export default App
