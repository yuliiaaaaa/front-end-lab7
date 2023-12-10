import React from "react";
import "./App.css";
import { GoodList } from "./GoodList";
import Goods from "./Goods.json";
import {Header} from './Header';
import {Content} from './Content';
import {Image} from './Image';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image />
      <GoodList goods={Goods} />
    </div>
  );
}

export default App;
