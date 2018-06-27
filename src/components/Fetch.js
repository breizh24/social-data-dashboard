import React, { Component } from 'react'

const Fetcher = (
  version,
  category,
  subCategory,
  minDate,
  maxDate,
  indicators,
) => {
  let urlToFetch = `http://165.227.158.131/dp/api/${version}/${subCategory}/${category}/twitter/range/${minDate}/${maxDate}/order/${indicators}`
  fetch(urlToFetch).then(response => response.json())
}

export { Fetcher }
