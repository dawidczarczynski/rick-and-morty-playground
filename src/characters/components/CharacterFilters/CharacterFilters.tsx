import { UseFormReturn } from 'react-hook-form';
import { Button } from 'shared/components/Button';
import { CharacterFiltersValue } from 'characters/model';
import {
    searchAttributes,
    statuses,
    genders,
} from './characterFiltersConstants';

import styles from './characterFilters.module.css';
import { useFormChangeSubscription } from 'shared/hooks/useFormValueSubscription';

interface CharacterFiltersProps extends UseFormReturn<CharacterFiltersValue> {
    onClear: () => void;
    onChange: (filters: CharacterFiltersValue) => void;
}

export function CharacterFilters({
    register,
    onClear,
    onChange,
    watch,
}: CharacterFiltersProps) {
    useFormChangeSubscription<CharacterFiltersValue>(onChange, watch);
    return (
        <form>
            <div className={styles.filtersection}>
                <p className={styles.sectionname}>Search</p>

                <label className={styles.searchlabel}>
                    Search for
                    <input
                        type="text"
                        placeholder="Search for character..."
                        className={styles.searchinput}
                        {...register('phrase')}
                    />
                </label>

                <label className={styles.searchlabel}>
                    Search by
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
                </label>
            </div>
            <div className={styles.filtersection}>
                <p className={styles.sectionname}>Status</p>
                {statuses.map(({ value, id }) => (
                    <div className={styles.filtercontrol} key={id}>
                        <label>
                            <input
                                {...register('status')}
                                type="radio"
                                value={value}
                                name="status"
                            />
                            {value}
                        </label>
                    </div>
                ))}
            </div>
            <div className={styles.filtersection}>
                <p className={styles.sectionname}>Gender</p>
                {genders.map(({ value, id }) => (
                    <div className={styles.filtercontrol} key={id}>
                        <label>
                            <input
                                {...register('gender')}
                                type="radio"
                                value={value}
                                name="gender"
                            />
                            {value}
                        </label>
                    </div>
                ))}
            </div>
            <div className={styles.filteractions}>
                <Button label="Clear" onClick={onClear} />
            </div>
        </form>
    );
}
