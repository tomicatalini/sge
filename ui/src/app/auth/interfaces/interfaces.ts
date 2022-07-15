export interface AuthResponse {
    access_token: string,
    token_type: string,
    refresh_token: string,
    expires_in: number,
    scope: string,
    apellido: string,
    nombre: string,
    email: string,
    roles: any[],
    areas: any[],
    responsabilidades: any[],
    user_groups: any[],
    jti: string
}