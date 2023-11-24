import { Component } from "react";
import PropTypes from "prop-types";
import css from "./searchBar.module.css";

export default class Searchbar extends Component {
    state = {
        input: "",
    };

    search = (e) => {
        e.preventDefault();
        this.props.getInputValue(this.state.input);
        this.setState({ input: e.target.value });
    };

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    };

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.search}>
                    <button type="submit" className={css.button}>
                        <span className={css.buttonLabel}>Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.input}
                        onChange={this.handleInput}
                    />
                </form>
            </header>
        );
    };
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};