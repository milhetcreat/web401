import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AllAnimaux from "../components/AllAnimaux";
import AffichType from '../components/AffichType';

export default function Test() {
    const { idType } = useParams();
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        console.log(idType);
            }, [idType]);

    return (
        <div>
            <AffichType></AffichType>
            <AllAnimaux></AllAnimaux>
        </div>
    );
}