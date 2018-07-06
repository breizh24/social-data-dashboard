const Fetcher = (
  version,
  category,
  subCategory,
  social,
  minDate,
  maxDate,
  indicators,
  limit,
) => {
  let urlToFetch
  if (typeof limit === 'undefined') {
    urlToFetch = `http://165.227.158.131/dp/api/v${version}/${subCategory}/${category}/${social}/range/${minDate}/${maxDate}/order/${indicators}`
  } else {
    urlToFetch = `http://165.227.158.131/dp/api/v${version}/${subCategory}/${social}/${category}/range/${minDate}/${maxDate}/${limit}`
  }
  return fetch(urlToFetch).then(response => response.json())
}

export { Fetcher }
