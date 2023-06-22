export default function Game({ title, cover, onRemove }) {
    return (
        <div>
        <img src={cover} alt="gameCover"/>
        <div>
          <h2>{title}</h2>
          <button onClick={onRemove}>Remover</button>
        </div>
      </div>
    )
}