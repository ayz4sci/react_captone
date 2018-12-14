import { searchCategory } from './SearchUtil';

describe( 'Search Categories', () => {

    it('should search through categories and return item found irrespective of search term letter case', () => {
        const categories = [
            {
                name: 'Status',
                cheats: [{
                    description: "Display git status",
                    command: "git status",
                    keywords: []
                }]
            },
            {
                name: 'Log',
                cheats: [{
                    description: "Show log",
                    command: "git log",
                    keywords: []
                }]
            },
            {
                name: 'Stash',
                cheats: [{
                    description: "Stash changes",
                    command: "git stash",
                    keywords: []
                },{
                    description: "Stash apply",
                    command: "git stash apply",
                    keywords: []
                }]
            }
        ];

        const result = searchCategory(categories, "STASH")

        expect(result[0].name).toEqual('Stash');
        expect(result[0].cheats[0].description).toEqual('Stash changes');
    });
});