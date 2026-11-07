export type UserRole = 'SUPER_ADMIN' | 'AREA_ADMIN';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    assignedAtmIds: string[];
}