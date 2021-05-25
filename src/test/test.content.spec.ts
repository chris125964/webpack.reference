import { Content, MemContent } from '../logic/content';
import { expect } from 'chai';

const sortByNr = (el1: MemContent, el2: MemContent) => {
  if (el1.nr < el2.nr) {
    return -1;
  } else if (el1.nr > el2.nr) {
    return 1;
  } else {
    if (el1.index < el2.index) {
      return -11;
    } else if (el1.index > el2.index) {
      return 1;
    } else {
      return 0;
    }
  }
};

const sortByIndexx = (el1: MemContent, el2: MemContent) => {
  if (el1.indexx < el2.indexx) {
    return -1;
  } else if (el1.indexx > el2.indexx) {
    return 1;
  } else {
    if (el1.index < el2.index) {
      return -11;
    } else if (el1.index > el2.index) {
      return 1;
    } else {
      return 0;
    }
    return 0;
  }
};

var assert = require('assert');
describe('test function createXFromY', function () {
  it('createXFromY(5, 8) should create 5 different pairs', function () {
    let cont = new Content(8);
    let resultArray = cont.createXFromY(5);

    // sort by criteria nr then by criteria index
    resultArray.sort(sortByNr);
    let refElement = -1;
    // for (let loop = 0; loop < resultArray.length; loop += 1) {
    //   let currentElement = resultArray[loop];
    //   console.log(`${JSON.stringify(currentElement, null)} - ${loop}`);
    // }
    for (let loop = 0; loop < resultArray.length; loop += 1) {
      let currentElement = resultArray[loop];
      if (loop % 2 === 0) {
        // loop is even number
        expect(currentElement.nr).greaterThan(
          refElement,
          `${currentElement.nr} must be greater than previous element ${refElement}`,
        );
        expect(currentElement.index).equal(1, 'first index');
        refElement = currentElement.nr;
      } else {
        // loop is odd number
        expect(currentElement.nr).to.equal(refElement);
        expect(currentElement.index).equal(2, 'second index');
      }
    }

    // sort by criteria indexx then by criteria index
    resultArray.sort(sortByIndexx);
    refElement = -1;
    for (let loop = 0; loop < resultArray.length; loop += 1) {
      let currentElement = resultArray[loop];
      if (loop % 2 === 0) {
        // first element
        expect(currentElement.indexx).to.equal(loop / 2);
        expect(currentElement.index).to.equal(1);
      } else {
        // second element
        expect(currentElement.indexx).to.equal((loop - 1) / 2);
        expect(currentElement.index).to.equal(2);
      }
    }
  });
  it('createXFromY(5) should create [0,1,2,3,4]', function () {
    let cont = new Content(5);
    let resultArray = cont.createXFromY(5);
    resultArray.sort(sortByNr);
    for (let loop = 0; loop < resultArray.length; loop += 1) {
      let currentElement = resultArray[loop];
      // console.log(`${loop}: ${JSON.stringify(currentElement, null)}`);
      expect(currentElement.nr).to.equal(Math.floor(loop / 2));
      expect(currentElement.index).to.equal((loop % 2) + 1);
    }
  });
  it('createXFromY(20) should create a exception', function () {
    let cont = new Content(10);
    expect(function () {
      cont.createXFromY(20);
    }).to.throw('x (20) must not be greater than this.size (10)');
  });
});
