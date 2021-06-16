import { action, makeObservable, observable } from "mobx";

export class ClickStoreImplementation {
  clicks = 0;

  constructor() {
    makeObservable(this, {
      clicks: observable,
      incrementClick: action,
      decrementClick: action,
    });
  }
  incrementClick() {
    this.clicks = this.clicks + 1;
  }
  decrementClick() {
    this.clicks = this.clicks - 1;
  }
}

export const ClickStore = new ClickStoreImplementation();
