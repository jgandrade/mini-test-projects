const expect = require('chai').expect;

//TEST SUITE
describe('checkString', () => {
    let bookName = require('./script').bookName;
    it('All Leading Letter should be Capitalized', () => {
        expect(bookName('the great detective conan')).to.equal('The Great Detective Conan');
        expect(bookName('the great detective conan')).to.be.a('string');
    });
    it('There should be no integers', () => {
        expect(bookName('the great detective conan')).to.be.a('string');
    });
});


