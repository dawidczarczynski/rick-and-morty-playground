import { CoreProviders } from 'core/providers';
import { Layout } from 'layout/components/Layout';
import { CharactersPage } from 'characters/page/CharactersPage';

export function App() {
    return (
        <CoreProviders>
            <Layout>
                <CharactersPage />
            </Layout>
        </CoreProviders>
    );
}
