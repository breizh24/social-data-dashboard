const Fetcher = (
  version,
  category,
  subCategory,
  social,
  minDate,
  maxDate,
  indicators,
) => {
  let urlToFetch = `http://165.227.158.131/dp/api/v${version}/${subCategory}/${category}/${social}/range/${minDate}/${maxDate}/order/${indicators}`
  return fetch(urlToFetch).then(response => response.json())
}

export { Fetcher }
