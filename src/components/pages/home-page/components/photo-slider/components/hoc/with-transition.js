import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withTransition = (Wrapped) => {
  return class extends Component {
    timerInterval = null;

    SLIDER_TIME = 4000;
    PAUSE_TIME = 6000;

    state = {
      photosList: [],
      counter: 1,
      animation: null,
      autoSliding: true
    };

    componentDidMount() {
      // photolist for slider
      const { photosList } = this.props;
  
      const firstCloneArray =
      photosList
      .slice(0, 4)
      .map(({ id, ...rest }) => {
        const newId = id + 'clone';
          return {
            id: newId,
            ...rest
          };                         
      });
  
      const last = photosList.slice(-1);
      const { id: idLast, ...restLast } = last[0];
      const lastClone = { id: idLast + 'clone', ...restLast };
  
      const newList = [ lastClone, ...photosList, ...firstCloneArray ];
      this.setState({ photosList: newList });

      // slider functionality
      this.startSliding();
  
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.startSliding();
        } else {
          this.stopSliding();
        }
      });
    }

    startSliding = () => {
      this.timerInterval = setInterval(this.onAutoTransition, this.SLIDER_TIME);
    };

    stopSliding = () => {
      clearInterval(this.timerInterval);
    };

    toggleSlider = (idx) => {

      if (this.state.autoSliding) {
        this.stopSliding();
        this.setState({ autoSliding: false });

        this.timeOut = setTimeout(() => {
          this.setState({ autoSliding: true });
          this.startSliding();
        }, this.PAUSE_TIME);
      }

      if (idx > 0) {
        if (this.state.counter >= this.state.photosList.length - 4) return;
        this.setState(({ counter }) => {
          return {
            animation: 'transition',
            counter: ++counter
          };
        });
      }

      if (idx < 0) {
        if (this.state.counter <= 0) return;
        this.setState(({ counter }) => {
          return {
            animation: 'transition',
            counter: --counter
          };
        });
      }
    };

    onTransitionEnd = () => {
      if (this.state.counter === 0) {
        this.setState({
          animation: 'transitionNone',
          counter: this.state.photosList.length - 5
        });
      }

      if (this.state.counter === this.state.photosList.length - 4) {
        this.setState(({ counter }) => {
          return {
            animation: 'transitionNone',
            counter: this.state.photosList.length - counter - 3
          };
        });
      }
    };

    onAutoTransition = () => {
      if (this.state.counter >= this.state.photosList.length - 4) return;
        this.setState(({ counter }) => {
          return {
            animation: 'transition',
            counter: ++counter
          };
        });
    };

    componentWillUnmount() {
      clearInterval(this.timerInterval);
      clearTimeout(this.timeOut);
      document.removeEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.startSliding();
        } else {
          this.stopSliding();
        }
      });
    }

    render() {
      const { photosList, counter, animation } = this.state;

      const style = {
        transform: `translateX(`+ (-225 * counter) + `px)`
      };

      return (
        <Wrapped
          photosList={photosList}
          style={style}
          animation={animation}
          toggleSlider={this.toggleSlider}
          onTransitionEnd={this.onTransitionEnd}
        />
      );
    }
  }
};

withTransition.propTypes = {
  photosList: PropTypes.arrayOf(PropTypes.object)
};

export default withTransition;