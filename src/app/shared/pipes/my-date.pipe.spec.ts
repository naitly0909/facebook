import {MyDatePipe} from './my-date.pipe';

describe('MyDatePipe', () => {
    let pipe;

    beforeEach(() => {
        pipe = new MyDatePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return null when pass invalid string', () => {
        const input = 'ciasteczko';
        const output = null;
        expect(pipe.transform(input)).toEqual(output);
    });

    it('shoulld return proper date string when passed UTC date string', () => {
        const input = 'Fri October 03 2019 16:01:09 GMT+0200 (czas środkowoeuropejski letni)';
        const output = '03 października 2019, 16:01:09';
        expect(pipe.transform(input)).toEqual(output);
    });

});
