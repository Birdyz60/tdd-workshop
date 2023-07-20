let woundsCalc = require('./wounds-calc');

describe('wounds calculator', () => {

    it('Do nothing', () => {
        expect(true).toBe(true)
    });

    it('should return 0 with ano result', () => {
        let wounds = woundsCalc.calc([]);
        expect(wounds).toBe(0);
    });

    it('sould return 1 with a single hit', () => {
        let wounds = woundsCalc.calc([woundsCalc.RESULTS.hit]);
        expect(wounds).toBe(1);
    });

    it('sould return 0 with a miss', () => {
        let wounds = woundsCalc.calc([woundsCalc.RESULTS.miss]);
        expect(wounds).toBe(0);
    });

    it('should return 1 with a crit', () => {
        let wounds = woundsCalc.calc([woundsCalc.RESULTS.crit]);
        expect(wounds).toBe(1);
    })

    /* it('can handle surge roll', () => {
           let wounds = woundsCalc.calc(['surge']);
           expect(wounds).toBe(0);
   
       }) */
})