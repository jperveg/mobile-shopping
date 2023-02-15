import { FormInput } from '../../components'
import { ProductItem } from './ProductItem'
import './styles.scss'

export const ProductListView = ({
  handleChangeSearchInput,
  searchText,
  isFilterActive,
  products,
  filteredProducts,
  handleClickOnProductItem,
}) => {
  const productList = isFilterActive ? filteredProducts : products
  console.log(productList)
  return (
    <div className="app-list-container">
      <div className="app-list-container-header flex-right">
        <div className="app-list-container-header-input">
          <FormInput
            name="searchInput"
            onChange={handleChangeSearchInput}
            value={searchText}
            placeholder="Filter mobiles..."
            autoFocus
          />
        </div>
      </div>
      <div className="app-list-container-body flex-centered">
        <div className="app-list-container-body-content">
          {productList.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              brand={product.brand}
              model={product.model}
              price={product.price}
              imageURL={product.imageURL}
              handleClickOnProductItem={handleClickOnProductItem}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
