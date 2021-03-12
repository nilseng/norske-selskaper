const enhetsregisteretApiUrl = 'https://data.brreg.no/enhetsregisteret/api/enheter'

interface IEnheterRes {
    _embedded: {
        enheter: any[

        ]
    },
    _links: {
        first: {
            href: string
        },
        self: {
            href: string
        },
        next: {
            href: string
        },
        last: {
            href: string
        }
    },
    page: {
        size: number,
        totalElements: number,
        totalPages: number,
        number: number
    }
}

export const getEnheter = async (queryParams?: { [key: string]: string | number }) => {
    const query = buildQuery(queryParams)
    const res = await fetch(`${enhetsregisteretApiUrl}${query}`)
    const data: IEnheterRes = await res.json()
    return data
}

const buildQuery = (queryParams?: { [key: string]: string | number }) => {
    if (!queryParams || Object.keys(queryParams).length <= 0) return '';
    let query = '?'
    for (const key of Object.keys(queryParams)) {
        if (query.length > 1) query += '&'
        query += `${key}=${queryParams[key]}`
    }
    return query
}