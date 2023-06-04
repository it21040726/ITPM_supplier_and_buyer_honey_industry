import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../actions/categoryActions'
import './style1.css'

/**
* @author
* @function CategoryHeader
**/

export const CategoryHeader = (props) => {
    const category = useSelector(state => state.category)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const displayNestedCategories = (categories) => {
        let catArray = []
        for (let category of categories) {
            catArray.push(
                <li key={category.name}>
                    {
                        category.parentId ? <a href={`#`} >{category.name}</a> : 
                        <span>{category.name}</span>
                    }
                    
                    {category.children.length > 0 ? (<ul>{displayNestedCategories(category.children)}</ul>) : null}
                </li>
            )
        }
        return catArray
    }
    return (
        <div>
            <ul>
                {
                    category.categories.length > 0 ? displayNestedCategories(category.categories) : null
                }
            </ul>
        </div>
    )

}