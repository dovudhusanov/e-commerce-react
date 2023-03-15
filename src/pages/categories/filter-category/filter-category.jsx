import React from 'react';
import {FilterCategoryModal, FilterCategoryModalItems, FilterList, Title, FilterItem, FilterItemDiv, FilterColor, FilterColorParent} from "./filter-category.styles";
import {filterData} from "../../../data/data";
import {USDollar} from "../../../middleware/price-formatter";
import Checkbox from "../../../components/checkbox/checkbox";

function FilterCategory({active}) {

    const [isChecked, setIsChecked] = React.useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log("checked")
    };

    return (
        <FilterCategoryModal active={active}>
            <FilterCategoryModalItems>
                {filterData.map((filterItems) => (
                    <FilterList key={filterItems.id}>
                        {filterItems.items.map(item => (
                            <div key={item.id}>
                                <Title>{item.title}</Title>
                                <FilterItemDiv>
                                    {item.item.map(itemValue => (
                                        <div key={itemValue.id}>
                                            <FilterColorParent>
                                                {itemValue.color && <FilterColor style={{backgroundColor: itemValue.color}} />}
                                                {itemValue.colorName && <FilterItem>{itemValue?.colorName}</FilterItem>}
                                            </FilterColorParent>
                                            {itemValue.size && <FilterItem id={"check"}><Checkbox name={"check"} checked={isChecked} onChange={handleCheckboxChange}/> {itemValue?.size}</FilterItem>}
                                            {itemValue.brand && <FilterItem id={"check"}><Checkbox name={"check"} checked={isChecked} onChange={handleCheckboxChange}/>{itemValue?.brand}</FilterItem>}
                                            {itemValue.price && <FilterItem id={"check"}><Checkbox name={"check"} checked={isChecked} onChange={handleCheckboxChange}/>{USDollar.format(itemValue?.price)}+</FilterItem>}
                                            {itemValue.priceTo && itemValue.priceFrom && <FilterItem id={"check"}><Checkbox name={"check"} checked={isChecked} onChange={handleCheckboxChange}/>{USDollar.format(itemValue?.priceFrom)} - {USDollar.format(itemValue?.priceTo)}</FilterItem>}
                                        </div>
                                    ))}
                                </FilterItemDiv>
                            </div>
                        ))}
                    </FilterList>
                ))}
            </FilterCategoryModalItems>
        </FilterCategoryModal>
    );
}

export default FilterCategory;