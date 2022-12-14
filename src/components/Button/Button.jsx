import React, { Component } from 'react';
import { ReactComponent as ArrowRight } from '../../assets/images/arrow-right.svg';
import { ReactComponent as TriangleRight } from '../../assets/images/triangle right.svg';
import './Button.scss';

export default class Button extends Component {
    button = {
        triangleRight: false,
        arrow: false,
        class: '',
    }
    constructor(props) {
        super(props);
        this.state = this.button;

        this.handleClasses();
    }

    componentDidMount() {

    }

    handleClasses = () => {

        if (this.props.color === 'white') {
            this.button.class += ' button--white';
        }

        if (this.props.type.includes('arrow')) {
            this.button.arrow = true;
        }

        if (this.props.type.includes('outline')) {
            this.button.class += ' button--outline';
        }

        if (this.props.type.includes('flat')) {
            this.button.class += ' button--flat';
        }

        if (this.props.type.includes('triangle-right')) {
            this.button.triangleRight = true
        }

    }

    render() {
        return (
            <button className={`button${this.state.class}`}>
                <TriangleRight className={`triangle_right ${this.button.triangleRight ? '' : 'triangle_right--none'}`}/>
                <span className='button__text'>{this.props.text}</span>
                <ArrowRight className={`button__arrow ${this.button.arrow ? '' : 'button__arrow--none'}`} />
            </button>
        )
    }
}
