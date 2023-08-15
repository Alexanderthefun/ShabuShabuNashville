import React from "react";
import Card from './DrinkCard';
import { useEffect, useState } from "react";
import { ExpandableMenu } from "../ExpandableItems/ExpandableDrink.js";
import './Drinks.css'
import { getDrinks } from "../../Modules/Database";

export const Drinks = () => {
    const [drinks, setDrinks] = useState([]);
    const [nonAlcohol, setNonAlcohol] = useState([]);
    const [alcoholDrinks, setAlcoholDrinks] = useState([]);
    const [sodas, setSodas] = useState([]);
    const [hotTeas, setHotTeas] = useState([]);
    const [japaneseSodas, setJapaneseSodas] = useState([]);
    const [ades, setAdes] = useState([]);
    const [cheeseTeas, setCheeseTeas] = useState([]);
    const [milkTeas, setMilkTeas] = useState([]);
    const [lattes, setLattes] = useState([]);
    const [smoothies, setSmoothies] = useState([]);
    const [fruitTeas, setFruitTeas] = useState([]);
    const [whiskeys, setWhiskeys] = useState([]);
    const [sojus, setSojus] = useState([]);
    const [cocktails, setCocktails] = useState([]);
    const [wines, setWines] = useState([]);
    const [sakes, setSakes] = useState([]);
    const [beers, setBeers] = useState([]);
    const [expandedMenu, setExpandedMenu] = useState(null);



    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const fetchedDrinks = await getDrinks();
                setDrinks(fetchedDrinks);
            } catch (error) {
                console.error('Error fetching drinks:', error);
            }
        };

        fetchDrinks();
    }, []);


    const newDrinkList = [];
    useEffect(() => {
        for (const drink of drinks) {
            newDrinkList.push(drink);
        }
    }, [drinks])

    useEffect(() => {
        const booze = [];
        const notBooze = [];
        for (const drink of drinks) {
            if (drink.hasAlcohol) {
                booze.push(drink)
            } else {
                notBooze.push(drink)
            }
        }
        setAlcoholDrinks(booze);
        setNonAlcohol(notBooze);
    }, [drinks])

    useEffect(() => {
        const theSodas = [];
        const theHotTeas = [];
        const theJapaneseSodas = [];
        const theAdes = [];
        const theCheeseTeas = [];
        const theMilkTeas = [];
        const theLattes = [];
        const theSmoothies = [];
        const theFruitTeas = [];
        if (nonAlcohol) {
            for (const drink of nonAlcohol) {
                if (drink.type == 'Soda') {
                    theSodas.push(drink);
                } else if (drink.type == 'Hot Tea') {
                    theHotTeas.push(drink);
                } else if (drink.type == 'Japanese Soda') {
                    theJapaneseSodas.push(drink);
                } else if (drink.type == 'Ade') {
                    theAdes.push(drink);
                } else if (drink.type == 'Cheese Tea') {
                    theCheeseTeas.push(drink);
                } else if (drink.type == 'Milk Tea') {
                    theMilkTeas.push(drink);
                } else if (drink.type == 'Latte') {
                    theLattes.push(drink);
                } else if (drink.type == 'Smoothie') {
                    theSmoothies.push(drink);
                } else {
                    theFruitTeas.push(drink);
                }
            }
            setSodas(theSodas);
            setHotTeas(theHotTeas);
            setJapaneseSodas(theJapaneseSodas);
            setAdes(theAdes);
            setCheeseTeas(theCheeseTeas);
            setMilkTeas(theMilkTeas);
            setLattes(theLattes);
            setSmoothies(theSmoothies);
            setFruitTeas(theFruitTeas);
        }
    }, [nonAlcohol])

    useEffect(() => {
        const theWhiskey = [];
        const theSojus = [];
        const theCocktails = [];
        const theWines = [];
        const theSakes = [];
        const theBeers = [];

        if (alcoholDrinks) {
            for (const drink of alcoholDrinks) {
                if (drink.type == 'Whiskey') {
                    theWhiskey.push(drink);
                } else if (drink.type == 'Soju') {
                    theSojus.push(drink);
                } else if (drink.type == 'Cocktail') {
                    theCocktails.push(drink)
                } else if (drink.type == 'Wine') {
                    theWines.push(drink);
                } else if (drink.type == 'Sake') {
                    theSakes.push(drink);
                } else {
                    theBeers.push(drink);
                }
            }
        }
        setWhiskeys(theWhiskey);
        setSojus(theSojus);
        setCocktails(theCocktails);
        setWines(theWines);
        setSakes(theSakes);
        setBeers(theBeers);
    }, [alcoholDrinks])

    const handleMenuClick = (category) => {
        if (expandedMenu === category) {
            setExpandedMenu(null);
        } else {
            setExpandedMenu(category);
        }
    };



    return (
        <div className="drinkParent">
            <div className="nonAlcohol">
                <h1 className="drinkHeader">FAMILY DRINKS</h1>
                <ExpandableMenu
                    category="Milk Teas"
                    drinks={milkTeas}
                    isExpanded={expandedMenu === 'Milk Teas'}
                    onClick={() => handleMenuClick('Milk Teas')} />
                <ExpandableMenu
                    category="Fruit Teas"
                    drinks={fruitTeas}
                    isExpanded={expandedMenu === 'Fruit Teas'}
                    onClick={() => handleMenuClick('Fruit Teas')} />
                <ExpandableMenu
                    category="Cheese Teas"
                    drinks={cheeseTeas}
                    isExpanded={expandedMenu === 'Cheese Teas'}
                    onClick={() => handleMenuClick('Cheese Teas')} />
                <ExpandableMenu
                    category="Hot Teas"
                    drinks={hotTeas}
                    isExpanded={expandedMenu === 'Hot Teas'}
                    onClick={() => handleMenuClick('Hot Teas')} />
                <ExpandableMenu
                    category="Lattes"
                    drinks={lattes}
                    isExpanded={expandedMenu === 'Lattes'}
                    onClick={() => handleMenuClick('Lattes')} />
                <ExpandableMenu
                    category="Smoothies"
                    drinks={smoothies}
                    isExpanded={expandedMenu === 'Smoothies'}
                    onClick={() => handleMenuClick('Smoothies')} />
                <ExpandableMenu
                    category="Ades"
                    drinks={ades}
                    isExpanded={expandedMenu === 'Ades'}
                    onClick={() => handleMenuClick('Ades')} />
                <ExpandableMenu
                    category="Japanese Sodas"
                    drinks={japaneseSodas}
                    isExpanded={expandedMenu === 'Japanese Sodas'}
                    onClick={() => handleMenuClick('Japanese Sodas')} />
                <ExpandableMenu
                    category="Sodas"
                    drinks={sodas}
                    isExpanded={expandedMenu === 'Sodas'}
                    onClick={() => handleMenuClick('Sodas')} />
            </div>
            <div className="booze">
                <h1 className="drinkHeader">BAR MENU</h1>
                <ExpandableMenu
                    category="Sake"
                    drinks={sakes}
                    isExpanded={expandedMenu === 'Sakes'}
                    onClick={() => handleMenuClick('Sakes')} />
                <ExpandableMenu
                    category="Soju"
                    drinks={sojus}
                    isExpanded={expandedMenu === 'Sojus'}
                    onClick={() => handleMenuClick('Sojus')} />
                <ExpandableMenu
                    category="Japanese Whiskey"
                    drinks={whiskeys}
                    isExpanded={expandedMenu === 'Whiskeys'}
                    onClick={() => handleMenuClick('Whiskeys')} />
                <ExpandableMenu
                    category="Beer"
                    drinks={beers}
                    isExpanded={expandedMenu === 'Beers'}
                    onClick={() => handleMenuClick('Beers')} />
                <ExpandableMenu
                    category="Wine"
                    drinks={wines}
                    isExpanded={expandedMenu === 'Wines'}
                    onClick={() => handleMenuClick('Wines')} />
                <ExpandableMenu
                    category="Cocktails"
                    drinks={cocktails}
                    isExpanded={expandedMenu === 'Cocktails'}
                    onClick={() => handleMenuClick('Cocktails')} />
            </div>
            <div className="addOns">
                <p>The following add-ons may be added to any non-alcoholic drinks:</p>
                <li>Brown-Sugar Boba: $0.50</li>
                <li>Rainbow Jelly: $0.50</li>
                <li>Cream Cap: $0.50</li>
                <li>Cheese Cream Cap: $0.75</li>
            </div>
        </div>
    );
}

// useEffect(() => {
//     getAllDrinks().then(data => {
//         console.log(data);
//         if (data !== null) {
//             setDrinks(data);
//             console.log(drinks);
//         } else {
//             console.log('Somethings wrong yo.')
//         }
//     })
// }, []);