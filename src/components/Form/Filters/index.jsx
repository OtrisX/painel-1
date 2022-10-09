import { useEffect, useState } from "react"
import DropdownTreeSelect from "react-dropdown-tree-select"
import 'react-dropdown-tree-select/dist/styles.css'

export default function Filters({ availableCategories, onChange, selectedCategoryId }) {

    function formatCategories(categories) {
        for (const category of categories) {
            category.children = formatCategories(category.children)
            if(category.id === selectedCategoryId) { category.checked = true }
            else { category.checked = false }
            category.label = category.name
            category.value = category.id
        }
        return categories
    }

    return (
        <div>
            {
                <DropdownTreeSelect 
                    onChange={onChange}
                    data={formatCategories(availableCategories)}
                    mode={"radioSelect"}
                    texts={{ placeholder: "Pesquisar por categorias", noMatches: "Nenhum resultado encontrado" }}
                    clearSearchOnChange
                />
            }
        </div>
    )
}
