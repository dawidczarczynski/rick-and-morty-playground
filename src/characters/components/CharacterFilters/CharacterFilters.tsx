import { UseFormReturn } from 'react-hook-form';
import { Button } from 'shared/components/Button';
import { CharacterFiltersValue } from 'characters/model';
import {
    searchAttributes,
    statuses,
    genders,
} from 'characters/components/CharacterFilters/characterFiltersConstants';

import styles from './characterFilters.module.css';

interface CharacterFiltersProps extends UseFormReturn<CharacterFiltersValue> {
    clearFilters: () => void;
}

export function CharacterFilters({
    register,
    clearFilters,
}: CharacterFiltersProps) {
    return (
        <form>
            <div className={styles.filtersection}>
                <label className={styles.searchlabel}>Search for</label>
                <input
                    type="text"
                    placeholder="Search for character..."
                    className={styles.searchinput}
                    {...register('phrase')}
                />

                <label className={styles.searchlabel}>Search by</label>
                <select
                    className={styles.searchinput}
                    {...register('attribute')}
                >
                    {searchAttributes.map(({ value, label }) => (
                        <option value={value} key={value}>
                            {label}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.filtersection}>
                <p className={styles.sectionname}>Status</p>
                {statuses.map(({ value, id }) => (
                    <div className={styles.filtercontrol} key={id}>
                        <input
                            {...register('status')}
                            type="radio"
                            value={value}
                            name="status"
                            id={id}
                        />
                        <label htmlFor={id}>{value}</label>
                    </div>
                ))}
            </div>
            <div className={styles.filtersection}>
                <p className={styles.sectionname}>Gender</p>
                {genders.map(({ value, id }) => (
                    <div className={styles.filtercontrol} key={id}>
                        <input
                            {...register('gender')}
                            type="radio"
                            value={value}
                            name="gender"
                            id={id}
                        />
                        <label htmlFor={id}>{value}</label>
                    </div>
                ))}
            </div>
            <div className={styles.filteractions}>
                <Button label="Clear" onClick={clearFilters} />
            </div>
        </form>
    );
}
