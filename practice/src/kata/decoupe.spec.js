let decoupeManager = require('./decoupe');

describe('decoupe manager', () => {

    it('Juste pour voir que le cadre est en place', () => {
        expect(true).toBe(true);
    });

    it('Utilise 0 planche lors le client souhaite 0 planche', () => {
        const planchesUtiliees = decoupeManager.decoupe(0, 0, 0);
        expect(planchesUtiliees).toBe(0);
    });

    it('Utilise 1 planche lors le client souhaite 1 planche de 2m et que je dispose de planche de 2m', () => {
        const planchesUtiliees = decoupeManager.decoupe(1, 0, 0);
        expect(planchesUtiliees).toBe(1);
    });
    /* 
        it('Utilise 2 planches lors le client souhaite 2 planches de 2m et que je dispose de planche de 2m', () => {
            const planchesUtiliees = decoupeManager.decoupe(2);
            expect(planchesUtiliees).toBe(2);
        }); */


    it('Utilise 2 planches lors le client souhaite 1 planche de 2m et 1 planche de 1m et que je dispose de planche de 2m', () => {
        const planchesUtiliees = decoupeManager.decoupe(1, 1, 0);
        expect(planchesUtiliees).toBe(2);
    });

    it('Utilise 1 planche lors le client souhaite 2 planches de 30cm et que je dispose de planche de 2m', () => {
        const planchesUtiliees = decoupeManager.decoupe(0, 0, 2);
        expect(planchesUtiliees).toBe(1);
    });
})