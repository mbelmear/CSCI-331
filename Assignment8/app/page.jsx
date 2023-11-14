"use client"
import Counter from "./Components/CountButton";
import ProductSearch from "./Components/Search";
import { useEffect, useState } from "react";

export default function Page() {
    // productsState is initially an empty array
    const [productsState, setProductsState] = useState([]);

    // when the component mounts, then this code is seen
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                const newProducts = json.map((products) => {
                    return (
                        "-" +
                        products.title +
                        ":  $" +
                        products.price +
                        " " +
                        products.image
                    );
                });
                setProductsState(newProducts);
            });
    }, []);

    const hasProducts = productsState.length > 0;

    // a great functionality of the framework is you don't have to rewrite Counter/Search code
    return (
        <main>
            <title>NextJS</title>
            <h1>Counters</h1>
            <br />
            <Counter name={"Counter +1"} mult={1} size={1} />
            <br />
            <Counter name={"Counter +2"} mult={2} size={2} />
            <hr />
            <h1>GitHub</h1>
            <a href="https://github.com/mbelmear/CSCI-331">My Repo</a>
            <hr />
            <h1>Search Bar</h1>

            {/* conditional rendering with a ternary statement that displays a loading screen */}
            {hasProducts ? <ProductSearch products={productsState} /> : "Loading..."}
            <br />
        </main>
    );
}