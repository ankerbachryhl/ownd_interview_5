
export default async () => {

    const route = `https://api.reservoir.tools/orders/asks/v3`

    const res = await fetch(route, {
        method: 'get',
        cache: 'no-cache',
    })

    if (res.status !== 200) {
        const error = await res.json()

        if (!error.message && !error.code) {
            // throw new Error('No customer id found')
            return null
        }

        throw error
    }
    // The customer has been created
    return res.json() // customer object

}
