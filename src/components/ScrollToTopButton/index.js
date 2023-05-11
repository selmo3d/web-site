import  styles from "./ScrollToTopButton.module.css"

function SrollToTopButton() {
    
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button onClick={handleClick} className={styles.scrollbutton}>
            &#9650;
        </button>
    );
};

export default SrollToTopButton;