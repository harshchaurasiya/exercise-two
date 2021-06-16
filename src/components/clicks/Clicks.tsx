import React, { useState } from "react";
import "./styles.css";
import { observer } from "mobx-react-lite";
import { ClickStoreImplementation } from "./ClickStore";

interface ClicksProps {
  clickStore: ClickStoreImplementation;
}
const Clicks: React.FC<ClicksProps> = observer(({ clickStore }) => {
  return (
    <>
      <div className="click">{clickStore.clicks}</div>
      <div className="container">
        <button className="button" onClick={() => clickStore.incrementClick()}>
          Increment +{" "}
        </button>
        <button className="button" onClick={() => clickStore.decrementClick()}>
          Decrement -
        </button>
      </div>
    </>
  );
});

export default Clicks;
