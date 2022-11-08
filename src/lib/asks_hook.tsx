
export default async (contractAddress) => {

    const route = `https://api.reservoir.tools/orders/asks/v3?` + contractAddress

    const res = await fetch(route, {
        method: 'get',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'demo-api-key',
        },
    })

    if (res.status !== 200) {
        const error = await res.json()

        if (!error.message && !error.code) {
            return null
        }

        throw error
    }
    return res.json()

}
