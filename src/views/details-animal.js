import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DetailAnimal() {
    const { idAnimal } = useParams();
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        const fetchAnimalDetails = () => {
            fetch(
                `https://milhet.alwaysdata.net/sae401/api/animaux/${idAnimal}`
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then((data) => {
                    setAnimal(data);
                })
                .catch((error) => {
                    console.error("Error fetching animal details:", error);
                });
        };

        fetchAnimalDetails();
    }, [idAnimal]);

    return (
        <div>
            {animal && (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <img
                            width="400px"
                            src={"https://milhet.alwaysdata.net/sae401/" + animal.PHOTO}
                            alt={animal.title}
                        />
                    </div>
                    <div>
                        <h3>{animal.PRENOM}</h3>
                        <h2>{animal.PRENOM}</h2>
                        <p>{animal.overview}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
