import { expect } from 'chai';
import { sayHi } from '../src/index.js';
import CSS from '../src/index.css';

describe('sayHi', ()=> {
  it('should say hi', ()=> {
    expect(sayHi()).to.equal('hi');
    expect(CSS.bla).to.equal('bla');
  });
});