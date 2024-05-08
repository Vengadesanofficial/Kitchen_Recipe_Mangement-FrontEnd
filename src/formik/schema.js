import * as yup  from "yup"


export const validationSchema=yup.object({
title:yup.string().required("Please enter the title"),
ist:yup.string().required("Please enter the Instructions"),
ing1:yup.string().required("Please enter the Ingredients"),
ing2:yup.string().required("Please enter the Ingredients"),
ing3:yup.string().required("Please enter the Ingredients"),
ing4:yup.string().required("Please enter the Ingredients"),
qty1:yup.string().required("Please enter the Quantity"),
qty2:yup.string().required("Please enter the Quantity"),
qty3:yup.string().required("Please enter the Quantity"),
qty4:yup.string().required("Please enter the Quantity"),
imgUrl:yup.string().required("Please enter the ImageURL"),


})