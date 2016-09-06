import React from "react";
import { expect } from "chai";
import Main from "../../scripts/components/main";
import { shallow } from 'enzyme';

describe("<Main />", () => {

	it("h1 should display text", () =>{
		const wrapper = shallow(<Main/>);
		const h1= wrapper.find("h1");
		expect(h1.text()).to.contain("Simple redux application");
	});

});