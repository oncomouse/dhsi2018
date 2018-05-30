import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { identity, times } from 'ramda';
import Samples from './Samples';

const SAMPLE_LENGTH = 36;
const STRING_LENGTH = 8;
const randomString = () => Math.random()
  .toString(SAMPLE_LENGTH)
  .replace(/[^a-z]+/g, '')
  .substr(0, STRING_LENGTH - 1);
const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - (min + 1))) + min;
describe('<Samples/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Samples
      samples={[]}
      sampleAction={identity}
      resetAction={identity}
    />);
  });
  it('should render without crashing', () => {
    expect(wrapper.is('Samples')).to.equal(true);
  });
  it('should render a div as the first child', () => {
    expect(wrapper.childAt(0).name()).to.equal('ul');
  });
  it('should render an object of random strings as <li>', () => {
    const samples = [];
    times(() => {
      const r = randomString();
      samples.push(r);
    }, randomInteger(8, 24)); // eslint-disable-line no-magic-numbers
    wrapper.setProps({ samples });
    expect(wrapper.find('li')).to.have.length(Object.keys(samples).length);
  });
});
