import {sort} from './categoryReducer';

describe( 'Category Reducer', () => {

    it('should sort categories by name', () => {
        const categories = [
            { name: 'C'},
            { name: 'A'},
            { name: 'B'},
        ];

        sort(categories);

        expect(categories[0].name).toEqual('A');
        expect(categories[1].name).toEqual('B');
        expect(categories[2].name).toEqual('C');
    });
});