import React from "react";
import { Letters } from "./Letters/Letters";
import { MealCard } from "./MealCard/MealCard";

import "./Home.css";
import { Loader } from "../../common/Loader/Loader";

export class Home extends React.Component {
  state = {
    selectedLetter: null,
    loading: false,
    meals: [],
    errMsg: null,
  };

  changeLetter = (letter) => {
    this.setState({ selectedLetter: letter });
    this.getMealsByLetter(letter);
  };

  getMealsByLetter(letter) {
    this.setState({ loading: true, meals: [], errMsg: null });

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ meals: json.meals, loading: false });
      })
      .catch(() => {
        this.setState({
          meals: [],
          loading: false,
          errMsg: "Something went wrong",
        });
      });
  }

  render() {
    return (
      <div className="page home">
        <Letters
          currentLetter={this.state.selectedLetter}
          changeLetter={this.changeLetter}
        />

        {this.state.errMsg ? (
          <h3>{this.state.errMsg}</h3>
        ) : (
          <React.Fragment>
            {this.state.selectedLetter && this.state.meals ? (
              <div className="nr-of-meals-container">
                {this.state.loading ? (
                  <Loader />
                ) : (
                  <h3 className="nr-of-meals">{`Number of meals at ${this.state.selectedLetter}: ${this.state.meals.length}`}</h3>
                )}
              </div>
            ) : null}

            {this.state.selectedLetter && this.state.meals ? (
              <div className="meal-cards-container">
                {this.state.meals.map((meal, index) => {
                  return (
                    <MealCard
                      key={index}
                      title={meal.strMeal}
                      imgSrc={meal.strMealThumb}
                    />
                  );
                })}
              </div>
            ) : null}
          </React.Fragment>
        )}
      </div>
    );
  }
}
