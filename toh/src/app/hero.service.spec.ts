import { HeroService } from "./hero.service";

describe('HeroService', () => {
  it('do nothing', () => {
    expect(true).toBe(true);
  });

  it('should have no messages on initialization', () => {
    let heroService = new HeroService();

    expect(heroService.messages.length).toBe(0);
  });

  describe('when getHeros is called', () => {
    it('should have one message', () => {
      let heroService = new HeroService();

      heroService.getHeroes();

      expect(heroService.messages.length).toBe(1);
    });

    it('should have message "Retrieved all Heroes', () => {
      let heroService = new HeroService();

      heroService.getHeroes();

      expect(heroService.messages[0]).toBe('Retrieved all Heroes');
    });
  });

  describe('when getHero is called', () => {

    it('should have one message', () => {
      let heroService = new HeroService();

      heroService.getHero(0);

      expect(heroService.messages.length).toBe(1);
    });

    it('should have message "Retrieved Hero 12" when 12 is passed', () => {
      let heroService = new HeroService();

      heroService.getHero(12);

      expect(heroService.messages[0]).toBe('Retrieved Hero 12');
    });

    it('should have message "Retrieved Hero 22" when 22 is passed', () => {
      let heroService = new HeroService();

      heroService.getHero(22);

      expect(heroService.messages[0]).toBe('Retrieved Hero 22');
    });
  });

  describe('when ClearMessages is called', () => {
    it('shold have no messages', () => {
      let heroService = new HeroService();
      // Cette notation permet d'accéder aux méthodes privées
      heroService['addMessage']('hi');

      heroService.clearMessages();

      expect(heroService.messages.length).toBe(0);
    })
  })
})
