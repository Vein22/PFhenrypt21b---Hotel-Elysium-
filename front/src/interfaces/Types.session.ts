export interface userSession {
    token: string,
    userData: {
        id: number,
        address: string,
        name: string,
        email: string,
        phone: string,
        order: []
    }
}