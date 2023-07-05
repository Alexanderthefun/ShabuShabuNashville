import { useEffect, useState } from "react"
import { getAllBroths } from "../../Modules/BrothManager";
import Card from "./BrothCard";
import './Broth.css'


export const Broths = () => {
    const [broths, setBroths] = useState([]);

    useEffect(() => {
        getAllBroths().then(data => {
            console.log(data);
            if (data !== null) {
                setBroths(data);
            } else {
                console.log('Somethings wrong yo.')
            }
        })
    }, [])

    return (
        <div className='brothParent'>
            {broths.map((broth) => (
                <Card 
                    key={broth.id}
                    name={broth.name}
                    description={broth.description}
                spicy={broth.spicy}
                canBeGlutenFree={broth.canBeGlutenFree}
                canBeVegetarian={broth.canBeVegetarian}  />
            ))}
        </div>
    )
}