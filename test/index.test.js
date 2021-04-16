import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow, mount } from "enzyme";
import { expect } from "chai";
import { spy, stub, useFakeTimers } from "sinon";
import Adapter from "enzyme-adapter-react-16";
import "@babel/polyfill";
configure({ adapter: new Adapter() });

import GifSearch from "../src/components/GifSearch.js";

describe("<GifSearch />", () => {
  it("mounts correctly", () => {
    let searchWrapper = shallow(<GifSearch />);
    expect(searchWrapper).to.exist;
  });
});
