import 'index.scss'
import './styles.scss'

export const ProductItem = ({
  id,
  brand,
  model,
  price,
  imageURL,
  handleClickOnProductItem,
}) => {
  return (
    <div
      className="app-proudct-item"
      onClick={() => handleClickOnProductItem(id)}
    >
      <div className="app-proudct-item-image flex-centered">
        <img src={imageURL} alt={model} width={97} height={207} />
      </div>
      <div className="app-proudct-item-content flex-left-col">
        <div className="app-proudct-item-content-info">
          <strong>{'Marca: '}</strong>
          {brand}
        </div>
        <div className="app-proudct-item-content-info">
          <strong>{'Modelo: '}</strong>
          {model}
        </div>
        <div className="app-proudct-item-content-info">
          <strong>{'Precio: '}</strong>
          {`${price} €`}
        </div>
      </div>
    </div>
  )
}
