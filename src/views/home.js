import AffichListAnimaux from "../components/AfichListAnimaux";
import AffichType from '../components/AffichType'

function Home() {
    return (
        <div>
            <AffichType></AffichType>
            <AffichListAnimaux></AffichListAnimaux>
        </div>
    );
}

export default Home;