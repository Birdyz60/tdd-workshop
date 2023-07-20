let rot13 = require('./rot13');

describe('rot13', () => {

    /*  it ('do nothing', ()=> {
         expect(true).toBe(true);
     }) */
    it('Should return n when caracter is a', () => {
        expect(rot13.transform('a')).toBe('n')
    });

    it('should return o when caracteur is b', () => {
        expect(rot13.transform('b')).toBe('o')
    });

    it('should return a when caracteur is n', () => {
        expect(rot13.transform('n')).toBe('a')
    });

    it('should return m when caracteur is z', () => {
        expect(rot13.transform('z')).toBe('m')
    });

    it('should return z when caracteur is m', () => {
        expect(rot13.transform('m')).toBe('z')
    });

    it('should return { when caracteur is {', () => {
        expect(rot13.transform('{')).toBe('{')
    });

    it('should return ` when caracteur is `', () => {
        expect(rot13.transform('`')).toBe('`')
    });

    it('Should return N when caracter is A', () => {
        expect(rot13.transform('A')).toBe('N')
    });

    it('Should return A when caracter is N', () => {
        expect(rot13.transform('N')).toBe('A')
    });
})