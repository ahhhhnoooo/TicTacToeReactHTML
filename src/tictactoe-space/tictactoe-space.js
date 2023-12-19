export default function TicTacToeSpace(props) {
    const value = props.value;
    const index = props.index;
    const onClick = props.onClick;

    let img;
    if (value !== '') {
        const src = "img/" + value + ".svg";
        img = (<img src={src} alt={value} />)
    }
    return (
        <div className="tictactoe-space" onClick={() => onClick(index)}>
            {img}
        </div>
    );
}