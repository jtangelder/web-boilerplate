import { sayHi } from '../src/index.js';
import CSS from '../src/index.css';

describe('Boilerplate', ()=> {
  it('should test JS code', ()=> {
    expect(sayHi()).to.equal('hi');
  });

  it('should be able to test the CSS properties', ()=> {
    expect(CSS.bla).to.exist;
    expect(CSS.bla).to.equal('bla');
  });

  it('should be able to use jsdom', ()=> {
    expect(global.window).to.not.exist;
    expect(global.document).to.not.exist;

    jsdom();
    expect(window).to.exist;
    expect(document).to.exist;
    expect(document.body).to.exist;
  });
});
