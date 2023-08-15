import { useEffect, useState } from "react"
import Card from "./BrothCard";
import './Broth.css'
import { getBroths } from "../../Modules/Database";


export const Broths = () => {
    const [broths, setBroths] = useState([]);

    useEffect(() => {
        const fetchBroths = async () => {
          try {
            const fetchedBroths = await getBroths();
            setBroths(fetchedBroths);
          } catch (error) {
            console.error('Error fetching broths:', error);
          }
        };
    
        fetchBroths();
      }, []);


    return (
        <div className='brothParent'>
            {broths.map((broth) => (
                <Card
                    key={broth.id}
                    name={broth.name}
                    description={broth.description}
                    spicy={broth.spicy}
                    canBeGlutenFree={broth.canBeGlutenFree}
                    canBeVegetarian={broth.canBeVegetarian} />
            ))} 
        </div>
    )
}