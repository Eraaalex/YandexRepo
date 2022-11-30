import {Books} from "../components/Books/Books";
import {useEffect, useState} from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

export const BasketPage = ({chosenBooks}) => {
    useEffect(() => {
    }, []);
    let sum = 0;
    chosenBooks[0].books.map((book) => (sum += book.cost));
    return (
        <div>
            <div className={styles.container_for_basket}>
                <div className={styles.basket_list}>
                    <h3>Ваш заказ: </h3>
                    <ul className={styles.basket_ul}>
                        {chosenBooks[0].books.map((book) => (
                            <div
                                key={Math.floor(Math.random() * 1000)}
                                className={styles.basket_list_item}
                            >
                                <p>{book.name}</p>
                                <p className={styles.cost}>{book.cost} ₽</p>
                            </div>
                        ))}
                    </ul>
                    <div className={styles.control_sum}>
                        <div className={styles.sum}>Итого:</div>
                        <div>{sum} </div>
                        <button className={styles.button_buy}>Купить</button>
                    </div>
                </div>
                <Books genre={chosenBooks[0]} initial_count={1}></Books>
            </div>
        </div>
    );
};
