"use client"

import { useState, useEffect } from "react"
import styles from "./Products.module.css"
import { allProducts, productCategories, liters } from "../../data/products"
import ProductCard from "../../components/ProductCard/ProductCard"
import { Search, Filter, Grid, List, X, ChevronDown, ChevronUp } from "lucide-react"
import { useSearchParams } from "react-router-dom"

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  // Estados para filtros
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedAreas, setSelectedAreas] = useState([])
  const [selectedFinishes, setSelectedFinishes] = useState([])
  const [selectedLiters, setSelectedLiters] = useState([])
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(true)
  const [expandedFilters, setExpandedFilters] = useState({
    categories: true,
    areas: true,
    finishes: true,
    liters: true,
  })

  // Configurações da empresa - ALTERE AQUI SEUS DADOS
  const companyConfig = {
    whatsappNumber: "5511999999999", // Substitua pelo número da sua fábrica
    showWhatsApp: true,
    showMercadoLivre: true, // Altere para false se não quiser mostrar Mercado Livre
  }

  // Efeito para aplicar filtros da URL quando o componente carrega
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    const areaParam = searchParams.get("area")
    const finishParam = searchParams.get("finish")
    const litersParam = searchParams.get("liters")
    const searchParam = searchParams.get("search")
    const sortParam = searchParams.get("sort")

    if (categoryParam) {
      setSelectedCategories(categoryParam.split(","))
    }
    if (areaParam) {
      setSelectedAreas(areaParam.split(","))
    }
    if (finishParam) {
      setSelectedFinishes(finishParam.split(","))
    }
    if (litersParam) {
      setSelectedLiters(litersParam.split(","))
    }
    if (searchParam) {
      setSearchTerm(searchParam)
    }
    if (sortParam) {
      setSortBy(sortParam)
    }
  }, [])

  // Função para atualizar a URL quando os filtros mudam
  const updateURL = (categories, areas, finishes, liters, search, sort) => {
    const params = new URLSearchParams()

    if (categories.length > 0) {
      params.set("category", categories.join(","))
    }
    if (areas.length > 0) {
      params.set("area", areas.join(","))
    }
    if (finishes.length > 0) {
      params.set("finish", finishes.join(","))
    }
    if (liters.length > 0) {
      params.set("liters", liters.join(","))
    }
    if (search && search.trim()) {
      params.set("search", search)
    }
    if (sort && sort !== "name") {
      params.set("sort", sort)
    }

    // Só atualiza a URL se houver mudança
    const newParamsString = params.toString()
    const currentParamsString = searchParams.toString()

    if (newParamsString !== currentParamsString) {
      setSearchParams(params)
    }
  }

  // Áreas de uso (interno/externo)
  const areas = [
    { id: "interno", name: "Uso Interno" },
    { id: "externo", name: "Uso Externo" },
  ]

  // Tipos de acabamento
  const finishes = [
    { id: "fosco", name: "Fosco" },
    { id: "acetinado", name: "Acetinado" },
    { id: "semibrilho", name: "Semi-brilho" },
    { id: "brilhante", name: "Brilhante" },
    { id: "texturizado", name: "Texturizado" },
  ]

  // Função para alternar a expansão de uma seção de filtro
  const toggleFilterSection = (section) => {
    setExpandedFilters({
      ...expandedFilters,
      [section]: !expandedFilters[section],
    })
  }

  // Função para lidar com a seleção de filtros de categoria
  const handleCategoryChange = (categoryId) => {
    let newCategories
    if (selectedCategories.includes(categoryId)) {
      newCategories = selectedCategories.filter((id) => id !== categoryId)
    } else {
      newCategories = [...selectedCategories, categoryId]
    }

    setSelectedCategories(newCategories)
    updateURL(newCategories, selectedAreas, selectedFinishes, selectedLiters, searchTerm, sortBy)
  }

  // Função para lidar com a seleção de filtros de área
  const handleAreaChange = (areaId) => {
    let newAreas
    if (selectedAreas.includes(areaId)) {
      newAreas = selectedAreas.filter((id) => id !== areaId)
    } else {
      newAreas = [...selectedAreas, areaId]
    }

    setSelectedAreas(newAreas)
    updateURL(selectedCategories, newAreas, selectedFinishes, selectedLiters, searchTerm, sortBy)
  }

  // Função para lidar com a seleção de filtros de acabamento
  const handleFinishChange = (finishId) => {
    let newFinishes
    if (selectedFinishes.includes(finishId)) {
      newFinishes = selectedFinishes.filter((id) => id !== finishId)
    } else {
      newFinishes = [...selectedFinishes, finishId]
    }

    setSelectedFinishes(newFinishes)
    updateURL(selectedCategories, selectedAreas, newFinishes, selectedLiters, searchTerm, sortBy)
  }

  // Função para lidar com a seleção de filtros de litros
  const handleLitersChange = (litersId) => {
    let newLiters
    if (selectedLiters.includes(litersId)) {
      newLiters = selectedLiters.filter((id) => id !== litersId)
    } else {
      newLiters = [...selectedLiters, litersId]
    }

    setSelectedLiters(newLiters)
    updateURL(selectedCategories, selectedAreas, selectedFinishes, newLiters, searchTerm, sortBy)
  }

  // Função para limpar todos os filtros
  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedAreas([])
    setSelectedFinishes([])
    setSelectedLiters([])
    setSearchTerm("")
    setSortBy("name")
    setSearchParams({})
  }

  // Função para lidar com mudanças na busca
  const handleSearchChange = (value) => {
    setSearchTerm(value)
    updateURL(selectedCategories, selectedAreas, selectedFinishes, selectedLiters, value, sortBy)
  }

  // Função para lidar com mudanças na ordenação
  const handleSortChange = (value) => {
    setSortBy(value)
    updateURL(selectedCategories, selectedAreas, selectedFinishes, selectedLiters, searchTerm, value)
  }

  // Filtragem de produtos
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.shortDescription && product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory =
      selectedCategories.length === 0 || (product.categoryId && selectedCategories.includes(product.categoryId))

    const matchesArea = selectedAreas.length === 0 || (product.area && selectedAreas.includes(product.area))

    const matchesFinish = selectedFinishes.length === 0 || (product.finish && selectedFinishes.includes(product.finish))

    const matchesLiters = selectedLiters.length === 0 || (product.liters && selectedLiters.includes(product.liters))

    return matchesSearch && matchesCategory && matchesArea && matchesFinish && matchesLiters
  })

  // Ordenação de produtos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (a.price || 0) - (b.price || 0)
      case "price-high":
        return (b.price || 0) - (a.price || 0)
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  // Responsividade para filtros em dispositivos móveis
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowFilters(false)
      } else {
        setShowFilters(true)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={styles.productsPage}>
      <section className={`section ${styles.heroSection}`}>
        <div className="container">
          <h1>Nossos Produtos</h1>
          <p>Conheça nossa linha completa de tintas para todas as suas necessidades.</p>
        </div>
      </section>

      <div className={styles.filterSearchBar}>
        <div className="container">
          <div className={styles.filterSearchContent}>
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.filterControls}>
              <div className={styles.sortSelect}>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className={styles.sortDropdown}
                >
                  <option value="name">Nome A-Z</option>
                  <option value="price-low">Menor preço</option>
                  <option value="price-high">Maior preço</option>
                </select>
              </div>

              <div className={styles.viewToggle}>
                <button
                  className={`${styles.viewButton} ${viewMode === "grid" ? styles.active : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={18} />
                </button>
                <button
                  className={`${styles.viewButton} ${viewMode === "list" ? styles.active : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={18} />
                </button>
              </div>

              <button className={styles.mobileFilterButton} onClick={() => setShowFilters(!showFilters)}>
                <Filter size={18} />
                <span>Filtros</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.productsContainer}>
          {/* Sidebar de Filtros */}
          <div className={`${styles.filterSidebar} ${showFilters ? styles.showFilters : ""}`}>
            <div className={styles.filterHeader}>
              <h3>Filtros</h3>
              <button className={styles.clearFilters} onClick={clearAllFilters}>
                Limpar tudo
              </button>
              <button className={styles.closeFilters} onClick={() => setShowFilters(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Filtro de Categorias */}
            <div className={styles.filterSection}>
              <div className={styles.filterTitle} onClick={() => toggleFilterSection("categories")}>
                <h4>Tipo de Produto</h4>
                {expandedFilters.categories ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>

              {expandedFilters.categories && (
                <div className={styles.filterOptions}>
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
              )}
            </div>

            {/* Filtro de Áreas */}
            <div className={styles.filterSection}>
              <div className={styles.filterTitle} onClick={() => toggleFilterSection("areas")}>
                <h4>Área de Uso</h4>
                {expandedFilters.areas ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>

              {expandedFilters.areas && (
                <div className={styles.filterOptions}>
                  {areas.map((area) => (
                    <label key={area.id} className={styles.filterCheckbox}>
                      <input
                        type="checkbox"
                        checked={selectedAreas.includes(area.id)}
                        onChange={() => handleAreaChange(area.id)}
                      />
                      <span>{area.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Filtro de Acabamentos */}
            <div className={styles.filterSection}>
              <div className={styles.filterTitle} onClick={() => toggleFilterSection("finishes")}>
                <h4>Acabamento</h4>
                {expandedFilters.finishes ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>

              {expandedFilters.finishes && (
                <div className={styles.filterOptions}>
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
              )}
            </div>

            {/* Filtro de Litros */}
            <div className={styles.filterSection}>
              <div className={styles.filterTitle} onClick={() => toggleFilterSection("liters")}>
                <h4>Litros</h4>
                {expandedFilters.liters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>

              {expandedFilters.liters && (
                <div className={styles.filterOptions}>
                  {liters.map((liter) => (
                    <label key={liter.id} className={styles.filterCheckbox}>
                      <input
                        type="checkbox"
                        checked={selectedLiters.includes(liter.id)}
                        onChange={() => handleLitersChange(liter.id)}
                      />
                      <span>{liter.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className={styles.mainContent}>
            <section className={`section ${styles.productsSection}`}>
              <div className={styles.productsHeader}>
                <h2>Produtos</h2>
                <span className={styles.productCount}>
                  {sortedProducts.length} produto{sortedProducts.length !== 1 ? "s" : ""} encontrado
                  {sortedProducts.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Filtros ativos */}
              {(selectedCategories.length > 0 ||
                selectedAreas.length > 0 ||
                selectedFinishes.length > 0 ||
                selectedLiters.length > 0 ||
                searchTerm) && (
                <div className={styles.activeFilters}>
                  <span className={styles.activeFiltersLabel}>Filtros ativos:</span>

                  {selectedCategories.map((categoryId) => {
                    const category = productCategories.find((c) => c.id === categoryId)
                    return (
                      <span key={categoryId} className={styles.activeFilter}>
                        {category?.name}
                        <button onClick={() => handleCategoryChange(categoryId)}>
                          <X size={14} />
                        </button>
                      </span>
                    )
                  })}

                  {selectedAreas.map((areaId) => {
                    const area = areas.find((a) => a.id === areaId)
                    return (
                      <span key={areaId} className={styles.activeFilter}>
                        {area?.name}
                        <button onClick={() => handleAreaChange(areaId)}>
                          <X size={14} />
                        </button>
                      </span>
                    )
                  })}

                  {selectedFinishes.map((finishId) => {
                    const finish = finishes.find((f) => f.id === finishId)
                    return (
                      <span key={finishId} className={styles.activeFilter}>
                        {finish?.name}
                        <button onClick={() => handleFinishChange(finishId)}>
                          <X size={14} />
                        </button>
                      </span>
                    )
                  })}

                  {selectedLiters.map((litersId) => {
                    const liter = liters.find((l) => l.id === litersId)
                    return (
                      <span key={litersId} className={styles.activeFilter}>
                        {liter?.name}
                        <button onClick={() => handleLitersChange(litersId)}>
                          <X size={14} />
                        </button>
                      </span>
                    )
                  })}

                  {searchTerm && (
                    <span className={styles.activeFilter}>
                      Busca: "{searchTerm}"
                      <button onClick={() => handleSearchChange("")}>
                        <X size={14} />
                      </button>
                    </span>
                  )}
                </div>
              )}

              <div className={`${styles.productsGrid} ${viewMode === "list" ? styles.listView : ""}`}>
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((product) => (
                    <div key={product.id} className={styles.productCardWrapper}>
                      <ProductCard
                        image={product.image}
                        title={product.name}
                        description={product.shortDescription}
                        link={`/produto/${product.id}`}
                        area={product.area}
                        finish={product.finish}
                        price={product.price}
                        features={product.features}
                        brand={product.brand}
                        whatsappNumber={companyConfig.whatsappNumber}
                        mercadoLivreUrl={product.mercadoLivreUrl || ""}
                        showWhatsApp={companyConfig.showWhatsApp}
                        showMercadoLivre={companyConfig.showMercadoLivre}
                      />
                    </div>
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
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
