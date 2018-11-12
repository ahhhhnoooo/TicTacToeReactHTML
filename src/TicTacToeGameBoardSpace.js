import React from 'react';
import xsvg from './x.svg';
import osvg from './o.svg';

class TicTacToeGameBoardSpace extends React.Component {
    constructor(props){
        super(props);
        this.id = props.id;
    }
    onClick = () => {
        this.props.onClick(this.id);
    }
    render() {
        let img;
        switch (this.props.value) {
            default:
            case null: { img = null; break; }
            case 'x': { img = xsvg; break; }
            case 'o': { img = osvg; break; }
        }
        return (
            <div onClick={this.onClick} className={this.props.className}>
                <img src={img} />
            </div>
        )
    }
}
export default TicTacToeGameBoardSpace;