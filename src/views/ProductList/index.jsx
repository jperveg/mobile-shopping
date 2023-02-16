import { useProductList } from 'hooks'
import { ProductListView } from './view'

export const ProductList = () => {
  const {
    handleChangeSearchInput,
    searchText,
    isFilterActive,
    products,
    filteredProducts,
  } = useProductList()
  return (
    <ProductListView
      handleChangeSearchInput={handleChangeSearchInput}
      searchText={searchText}
      isFilterActive={isFilterActive}
      products={products}
      filteredProducts={filteredProducts}
    />
  )
}
