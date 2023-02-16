import { Loading } from 'components'

export const ProductDetailView = (
  product,
  handleGoBack,
  valuesForm,
  handleChangePropSelector,
  isAddShoppingCartEnabled,
  handleAddShoppingCart,
  isLoading
) => {
  const optionColors = product?.options?.colors
  const optionStorages = product?.options?.storages
  return (
    <div className="product-detail-view">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="product-detail-view-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-view-info">
            {Object.keys(product).map((prod) => {
              return typeof product[prod] === 'string' ||
                typeof product[prod] === 'number' ? (
                <div key={prod}>
                  <u>{prod}</u>
                  {' : '}
                  {product[prod]}
                </div>
              ) : (
                ''
              )
            })}
          </div>
          {optionColors && optionStorages && (
            <div className="product-detail-view-actions">
              <div>
                Color:
                <select name="color">
                  {optionColors.length > 1 ? (
                    <option value="-1">Select an option</option>
                  ) : (
                    ''
                  )}
                  {optionColors.map((color) => (
                    <option key={color.code} value={color.code}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
