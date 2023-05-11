import Header from "../../components/Header";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function AddVideo() {
    return (
        <>
            <Header />
            <Container>
                <Form />                
            </Container>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}

export default AddVideo;