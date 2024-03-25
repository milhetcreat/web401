import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AffichListAnimaux from "../components/AfichListAnimaux";
import AffichType from '../components/AffichType'

export default function Test() {
    const { idType } = useParams();
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        console.log(idType);
            }, [idType]);

    return (
        <div>
            <AffichType></AffichType>
            <AffichListAnimaux idType={idType}></AffichListAnimaux>
        </div>
    );
}