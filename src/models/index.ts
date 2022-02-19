import * as yup from 'yup'

export const foodModel = yup.object().shape({
    nutritionalInfo: yup.string().strict().required(),
    type: yup.string().strict().required()
})

export const recipeModel = yup.object().shape({
    author: yup.string().strict().required(),
    type: yup.string().strict().required(),
    foods: yup.array()
})

//?