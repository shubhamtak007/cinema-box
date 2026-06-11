import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { useSearch } from '@/contexts/SearchContext';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group';

function SearchBar() {
    const [searchValue, updateSearchBarInputSearchValue] = useState<string | null>(null);
    const { setSearchValue } = useSearch()

    function onSearchValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        updateSearchBarInputSearchValue(event.target.value);
        setSearchValue(event.target.value);
    }

    function clearSearchBar() {
        updateSearchBarInputSearchValue(null);
        setSearchValue(null);
    }

    return (
        <div>
            <div className="search-bar">
                <InputGroup className="w-full h-[40px] w-[stretch]">
                    <InputGroupInput
                        type="text"
                        tabIndex={0}
                        placeholder="Search for the coin you want to analyze"
                        className="!text-[13px] h-[inherit]"
                        value={searchValue ? searchValue : ''}
                        onChange={(event) => { onSearchValueChange(event) }}
                    />

                    <InputGroupAddon>
                        <Search className="size-4" />
                    </InputGroupAddon>

                    <InputGroupAddon
                        className={`clear-btn ${(searchValue && searchValue.length > 0) ? 'block' : 'hidden'} cursor-pointer`}
                        align="inline-end"
                        onClick={() => { clearSearchBar() }}
                    >
                        <X />
                    </InputGroupAddon>
                </InputGroup>
            </div>
        </div>
    )
}

export default SearchBar;