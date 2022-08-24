import {
    CharacterGender,
    CharacterSearchAttribute,
    CharacterStatus,
} from 'characters/model/characterParams';

export interface CharacterFiltersValue {
    phrase: string;
    attribute: CharacterSearchAttribute;
    status: CharacterStatus | null;
    gender: CharacterGender | null;
}
