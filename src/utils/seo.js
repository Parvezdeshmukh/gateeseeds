/** Small helper to set the page title and meta description per route. */
export function setPageMeta(title, description) {
  document.title = title
  const tag = document.querySelector('meta[name="description"]')
  if (tag && description) tag.setAttribute('content', description)
}
