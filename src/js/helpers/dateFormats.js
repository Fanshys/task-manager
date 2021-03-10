export function formatDate (date) {
    if (!date) return null

    return date.split('-').reverse().join('.')
}

export function parseDate (date) {
    if (!date) return null

    return date.split('.').reverse().join('-')
}