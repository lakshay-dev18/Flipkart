const ApiHelper = async (url: string, method?: string, body?:string) => {
    const data = await fetch(url, {
        method:method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
    })
    return data.json()
}
export default ApiHelper;