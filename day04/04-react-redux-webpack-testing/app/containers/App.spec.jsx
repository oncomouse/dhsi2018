import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import post from 'fixtures/post.json';
import App from './App';
import { API_URL } from '../api/config';

describe('<App/>', () => {
  let store;
  let mockStore;
  let wrapper;
  before(() => {
    fetchMock.mock(new RegExp(`${API_URL}/posts/[0-9]+.*$`), JSON.stringify(post), { method: 'get' });
    mockStore = configureStore([thunk]);
  });
  beforeEach(() => {
    store = mockStore({
      Samples: [],
    });
    sinon.spy(App.prototype, 'componentDidMount');
    wrapper = mount(<Provider store={store}><App /></Provider>);
  });
  afterEach(() => {
    fetchMock.reset();
    App.prototype.componentDidMount.restore();
  });
  after(() => {
    fetchMock.restore();
  });
  // Unit Tests:
  it('should render without crashing', () => {
    expect(App.prototype.componentDidMount).to.be.calledOnce;
  });
  it('should render two buttons', () => {
    expect(wrapper.find('Button')).to.have.length(2);
  });
  // Integration Tests:
  it('should call the API when the first button is clicked', (done) => {
    wrapper.find('button').at(0).simulate('click');
    // Wait for fetch to finish:
    setTimeout(() => {
      expect(fetchMock.called()).to.be.true;
      expect(store.getActions()).to.have.length(1);
      expect(store.getActions()).to.have.nested.property('[0].payload.sample');
      done();
    }, 1);
  });
  it('should generate an action when second button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(store.getActions()).to.have.length(1);
  });
});
