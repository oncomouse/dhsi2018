import { expect } from 'chai';
import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import post from 'fixtures/post.json';
import reducer, { addSampleAction, resetAction } from './Samples';
import { API_URL } from '../api/config';

describe('ducks/Samples', () => {
  const initialState = [];
  // mock up a simple store:
  let store;
  beforeEach(() => {
    fetchMock.mock(new RegExp(`${API_URL}/posts/[0-9]+.*$`), JSON.stringify(post), { method: 'get' });
    store = {
      dispatch: sinon.stub(),
      getState: sinon.stub(),
    };
    store.dispatch.returnsArg(0);
  });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('should return initialState', () => {
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });
  it('should handle a sampleAction', (done) => {
    addSampleAction()(store.dispatch, store.getState).then((action) => {
      const result = reducer(initialState, action);
      expect(result).to.be.an('array');
      expect(result).to.have.length(1);
      expect(result[0]).to.be.a('string');
      expect(store.dispatch).to.be.calledOnce;
      done();
    }).catch(err => done(err));
  });
  it('should handle a resetAction', (done) => {
    addSampleAction()(store.dispatch, store.getState).then((action) => {
      const result = reducer(
        reducer(initialState, action)
        , resetAction(),
      );
      expect(result).to.deep.equal(initialState);
      expect(store.dispatch).to.be.calledOnce;
      done();
    }).catch(err => done(err));
  });
  it('should handle an ERROR', (done) => {
    fetchMock.get(new RegExp(`${API_URL}/posts/[0-9]+.*$`), 404, { overwriteRoutes: true });
    const testState = ['foo'];
    addSampleAction()(store.dispatch, store.getState).then((action) => {
      const result = reducer(testState, action);
      expect(result).to.deep.equal(testState);
      expect(store.dispatch).to.be.calledOnce;
      done();
    }).catch(err => done(err));
  });
});
