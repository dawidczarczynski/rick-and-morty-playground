export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: string;
    gender: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
    image: string;
}
