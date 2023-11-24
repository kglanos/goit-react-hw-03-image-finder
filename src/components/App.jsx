import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
    state = {
        inputValue: '',
        modalImage: '',
        showModal: false,
        page: 1,
    };

    handleFormSubmit = (inputValue) => {
        this.setState({ inputValue, page: 1 });
    }

    /* handleLoadMore = () => {
        this.setState((prevState) => ({ page: prevState.page + 1 }));
    }

    handleModal = (modalImage) => {
        this.setState({ modalImage, showModal: true });
    }

    closeModal = () => {
        this.setState({ showModal: false });
    } */

    render() {
        return (
            <div>
                <Searchbar onSubmit={this.handleFormSubmit} />
                {/* <ImageGallery inputValue={this.state.inputValue} page={this.state.page} handleModal={this.handleModal} />
                {this.state.showModal && <Modal modalImage={this.state.modalImage} closeModal={this.closeModal} />}
                {this.state.inputValue && <Button handleLoadMore={this.handleLoadMore} />} */}
            </div>
        );
    };
}