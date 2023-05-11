import styles from './Favorites.module.css';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import VideoList from '../../components/VideoList';
import { useFavoriteContext } from '../../contexts/favorites';
import ScrollToTopButton from '../../components/ScrollToTopButton';

function Favorites() {

    const { favorite } = useFavoriteContext();

    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>⭐Meus Videos Favoritos⭐</h2>
                    {<VideoList videos={favorite} emptyHeading={'Você não possui videos favoritos'} />}
                </section>
            </Container>
            <Footer />
            <ScrollToTopButton />
        </>
    );
};

export default Favorites;