"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import styles from "./Products.module.css"
import ProductCard from "../../components/ProductCard/ProductCard"
import { ChevronDown, ChevronUp, X } from "react-feather"
import { allProducts, productCategories, liters, brands, finishes } from "../../data/products"

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [products, setProducts] = useState(allProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedAreas, setSelectedAreas] = useState([])
  const [selectedFinishes, setSelectedFinishes] = useState([])
  const [selectedLiters, setSelectedLiters] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [sortBy, setSortBy] = useState("relevance")
  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    areas: true,
    finishes: true,
    liters: true,
    brands: true,
  })

  useEffect(() => {
    const category = searchParams.get("category")?.split(",") || []
    const area = searchParams.get("area")?.split(",") || []
    const finish = searchParams.get("finish")?.split(",") || []
    const liter = searchParams.get("liter")?.split(",") || []
    const brand = searchParams.get("brand")?.split(",") || []
    const search = searchParams.get("search") || ""
    const sort = searchParams.get("sort") || "relevance"

    setSelectedCategories(category)
    setSelectedAreas(area)
    setSelectedFinishes(finish)
    setSelectedLiters(liter)
    setSelectedBrands(brand)
    setSearchTerm(search)
    setSortBy(sort)

    updateFilteredProducts(category, area, finish, liter, brand, search, sort)
  }, [searchParams])

  // Função para atualizar os produtos filtrados com base nos filtros selecionados
  const updateFilteredProducts = (categories, areas, finishes, litersArr, brandsArr, term, sort) => {
    const filtered = allProducts.filter((product) => {
      const matchesCategory = categories.length === 0 || categories.includes(product.categoryId)
      const matchesArea = areas.length === 0 || (product.area && areas.includes(product.area))
      const matchesFinish = finishes.length === 0 || (product.finish && finishes.includes(product.finish))
      const matchesLiter = litersArr.length === 0 || (product.liters && litersArr.includes(product.liters))
      const matchesBrand = brandsArr.length === 0 || (product.brand && brandsArr.includes(product.brand))
      const matchesSearch =
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(term.toLowerCase())

      return matchesCategory && matchesArea && matchesFinish && matchesLiter && matchesBrand && matchesSearch
    })

    // Sorting logic
    if (sort === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sort === "priceLowToHigh") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sort === "priceHighToLow") {
      filtered.sort((a, b) => b.price - a.price)
    }

    setProducts(filtered)
  }

  const updateURL = (categories, areas, finishes, litersArr, brandsArr, term, sort) => {
    const params = new URLSearchParams()

    if (categories.length > 0) params.set("category", categories.join(","))
    if (areas.length > 0) params.set("area", areas.join(","))
    if (finishes.length > 0) params.set("finish", finishes.join(","))
    if (litersArr.length > 0) params.set("liter", litersArr.join(","))
    if (brandsArr.length > 0) params.set("brand", brandsArr.join(","))
    if (term) params.set("search", term)
    if (sort && sort !== "relevance") params.set("sort", sort)

    setSearchParams(params)
  }

  // Funções para lidar com a seleção de filtros
  const handleCategoryChange = (category) => {
    let newCategories
    if (selectedCategories.includes(category)) {
      newCategories = selectedCategories.filter((c) => c !== category)
    } else {
      newCategories = [...selectedCategories, category]
    }

    setSelectedCategories(newCategories)
    updateURL(newCategories, selectedAreas, selectedFinishes, selectedLiters, selectedBrands, searchTerm, sortBy)
  }

  const handleAreaChange = (area) => {
    let newAreas
    if (selectedAreas.includes(area)) {
      newAreas = selectedAreas.filter((a) => a !== area)
    } else {
      newAreas = [...selectedAreas, area]
    }

    setSelectedAreas(newAreas)
    updateURL(selectedCategories, newAreas, selectedFinishes, selectedLiters, selectedBrands, searchTerm, sortBy)
  }

  const handleFinishChange = (finish) => {
    let newFinishes
    if (selectedFinishes.includes(finish)) {
      newFinishes = selectedFinishes.filter((f) => f !== finish)
    } else {
      newFinishes = [...selectedFinishes, finish]
    }

    setSelectedFinishes(newFinishes)
    updateURL(selectedCategories, selectedAreas, newFinishes, selectedLiters, selectedBrands, searchTerm, sortBy)
  }

  const handleLiterChange = (liter) => {
    let newLiters
    if (selectedLiters.includes(liter)) {
      newLiters = selectedLiters.filter((l) => l !== liter)
    } else {
      newLiters = [...selectedLiters, liter]
    }

    setSelectedLiters(newLiters)
    updateURL(selectedCategories, selectedAreas, selectedFinishes, newLiters, selectedBrands, searchTerm, sortBy)
  }

  // Função para lidar com a seleção de filtros de marca
  const handleBrandChange = (brandId) => {
    let newBrands
    if (selectedBrands.includes(brandId)) {
      newBrands = selectedBrands.filter((id) => id !== brandId)
    } else {
      newBrands = [...selectedBrands, brandId]
    }

    setSelectedBrands(newBrands)
    updateURL(selectedCategories, selectedAreas, selectedFinishes, selectedLiters, newBrands, searchTerm, sortBy)
  }

  const handleSearchChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    updateURL(selectedCategories, selectedAreas, selectedFinishes, selectedLiters, selectedBrands, term, sortBy)
  }

  const handleSortChange = (e) => {
    const sortValue = e.target.value
    setSortBy(sortValue)
    updateURL(
      selectedCategories,
      selectedAreas,
      selectedFinishes,
      selectedLiters,
      selectedBrands,
      searchTerm,
      sortValue,
    )
  }

  const toggleFilterSection = (section) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedAreas([])
    setSelectedFinishes([])
    setSelectedLiters([])
    setSelectedBrands([])
    setSearchTerm("")
    setSortBy("relevance")
    updateURL([], [], [], [], [], "", "relevance")
  }

  return (
    <div className={styles.productsContainer}>
      <aside className={styles.filters}>
        <h3>Filtros</h3>

        {/* Barra de pesquisa */}
        <div className={styles.searchBar}>
          <input type="text" placeholder="Pesquisar..." value={searchTerm} onChange={handleSearchChange} />
        </div>

        {/* Filtros Ativos */}
        {(selectedCategories.length > 0 ||
          selectedAreas.length > 0 ||
          selectedFinishes.length > 0 ||
          selectedLiters.length > 0 ||
          selectedBrands.length > 0) && (
          <div className={styles.activeFilters}>
            {selectedCategories.map((category) => (
              <span key={category} className={styles.activeFilter}>
                {category}
                <button onClick={() => handleCategoryChange(category)}>
                  <X size={14} />
                </button>
              </span>
            ))}
            {selectedAreas.map((area) => (
              <span key={area} className={styles.activeFilter}>
                {area}
                <button onClick={() => handleAreaChange(area)}>
                  <X size={14} />
                </button>
              </span>
            ))}
            {selectedFinishes.map((finish) => (
              <span key={finish} className={styles.activeFilter}>
                {finish}
                <button onClick={() => handleFinishChange(finish)}>
                  <X size={14} />
                </button>
              </span>
            ))}
            {selectedLiters.map((liter) => (
              <span key={liter} className={styles.activeFilter}>
                {liter}
                <button onClick={() => handleLiterChange(liter)}>
                  <X size={14} />
                </button>
              </span>
            ))}
            {selectedBrands.map((brandId) => {
              const brand = brands.find((b) => b.id === brandId)
              return (
                <span key={brandId} className={styles.activeFilter}>
                  {brand?.name}
                  <button onClick={() => handleBrandChange(brandId)}>
                    <X size={14} />
                  </button>
                </span>
              )
            })}
          </div>
        )}

        {/* Botão de Limpar Filtros */}
        <button className={styles.clearFiltersButton} onClick={clearAllFilters}>
          Limpar Filtros
        </button>

        {/* Filtro de Categorias */}
        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilterSection("categories")}>
            <h4>Categoria</h4>
            {expandedFilters.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          <div className={`${styles.filterOptions} ${!expandedFilters.categories ? styles.collapsed : ""}`}>
            {productCategories.map((category) => (
              <label key={category.id} className={styles.filterCheckbox}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                />
                <span>{category.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro de Áreas */}
        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilterSection("areas")}>
            <h4>Área de Aplicação</h4>
            {expandedFilters.areas ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          <div className={`${styles.filterOptions} ${!expandedFilters.areas ? styles.collapsed : ""}`}>
            <label className={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedAreas.includes("interno")}
                onChange={() => handleAreaChange("interno")}
              />
              <span>Interno</span>
            </label>
            <label className={styles.filterCheckbox}>
              <input
                type="checkbox"
                checked={selectedAreas.includes("externo")}
                onChange={() => handleAreaChange("externo")}
              />
              <span>Externo</span>
            </label>
          </div>
        </div>

        {/* Filtro de Acabamentos */}
        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilterSection("finishes")}>
            <h4>Acabamento</h4>
            {expandedFilters.finishes ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          <div className={`${styles.filterOptions} ${!expandedFilters.finishes ? styles.collapsed : ""}`}>
            {finishes.map((finish) => (
              <label key={finish.id} className={styles.filterCheckbox}>
                <input
                  type="checkbox"
                  checked={selectedFinishes.includes(finish.id)}
                  onChange={() => handleFinishChange(finish.id)}
                />
                <span>{finish.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro de Litros */}
        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilterSection("liters")}>
            <h4>Litros</h4>
            {expandedFilters.liters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          <div className={`${styles.filterOptions} ${!expandedFilters.liters ? styles.collapsed : ""}`}>
            {liters.map((liter) => (
              <label key={liter.id} className={styles.filterCheckbox}>
                <input
                  type="checkbox"
                  checked={selectedLiters.includes(liter.id)}
                  onChange={() => handleLiterChange(liter.id)}
                />
                <span>{liter.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro de Marcas */}
        <div className={styles.filterSection}>
          <div className={styles.filterTitle} onClick={() => toggleFilterSection("brands")}>
            <h4>Marca/Linha</h4>
            {expandedFilters.brands ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>

          <div className={`${styles.filterOptions} ${!expandedFilters.brands ? styles.collapsed : ""}`}>
            {brands.map((brand) => (
              <label key={brand.id} className={styles.filterCheckbox}>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand.id)}
                  onChange={() => handleBrandChange(brand.id)}
                />
                <span>{brand.name}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      <main className={styles.products}>
        <div className={styles.productsHeader}>
          <h2>Produtos</h2>
          <div className={styles.sort}>
            <label htmlFor="sort">Ordenar por:</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
              <option value="relevance">Relevância</option>
              <option value="name">Nome</option>
              <option value="priceLowToHigh">Menor preço</option>
              <option value="priceHighToLow">Maior preço</option>
            </select>
          </div>
        </div>

        <div className={styles.productsGrid}>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                description={product.shortDescription}
                link={`/produto/${product.id}`}
                area={product.area}
                finish={product.finish}
                price={product.price}
                features={product.features}
                brand={product.brand}
                whatsappNumber="5511999999999"
                mercadoLivreUrl={product.mercadoLivreUrl}
                showWhatsApp={true}
                showMercadoLivre={true}
              />
            ))
          ) : (
            <div className={styles.noProducts}>
              <p>Nenhum produto encontrado com os filtros selecionados.</p>
              <button className={styles.clearButton} onClick={clearAllFilters}>
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Products
