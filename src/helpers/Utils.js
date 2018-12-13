
export const searchCategory = (arr, searchTerm) => {
    if(searchTerm.length){
        let result = [];
        searchTerm = searchTerm.toLowerCase();
        result = arr.filter( item => 
            item.cheats.some(cheat => 
                cheat.description.toLowerCase().includes(searchTerm)
                || cheat.command.toLowerCase().includes(searchTerm)
                || cheat.keywords.some( keyword => keyword.includes(searchTerm)))
        ).map(item =>
            Object.assign({}, item, {'cheats': item.cheats.filter( cheat => 
                cheat.description.toLowerCase().includes(searchTerm)
                || cheat.command.toLowerCase().includes(searchTerm)
                || cheat.keywords.filter( keyword => keyword.includes(searchTerm)))
            })
        );
        return result;
    }

    return arr;
}