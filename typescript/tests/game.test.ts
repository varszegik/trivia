import {GameRunner} from '../src/game-runner';
import {Game} from "../src/game";


describe('The test environment', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });

    it("should access game", function () {
        expect(GameRunner).not.toBeUndefined();
    });

    describe('#roll', () => {
        let game: Game;
        beforeEach(() => {
            game = new Game();
            game.add('player');
            jest.spyOn(console, 'log');
        })

        it('asks a pop question in the first round', () => {
            game.roll(2);
            expect(console.log).toHaveBeenCalledWith('???');
        })
    })

});
