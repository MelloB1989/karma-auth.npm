export interface Organisation{
    oid: string;
    name: string;
    email: string;
    createdAt: Date;
    details: string;
    contact: string;
    domain: string;
}

export interface updateOrganisation{
    oid: string;
    name?: string;
    email?: string;
    details?: string;
    contact?: string;
    domain?: string;
}

export interface ApiToken{
    tid: string;
    oid: string;
    token: string;
    createdAt: Date;
    expiresAt: Date;
    details: string;
}

export interface updateApiToken{
    tid: string;
    token?: string;
    expiresAt?: Date;
    details?: string;
}

export interface User{
    uid: string;
    oid: string;
    email: string;
    phone: string;
    name: string;
    createdAt: Date;
    details: string;
    password: string;
    lastPassword: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
    emailVerified: boolean;
    emailVerificationToken: string;
    phoneVerified: boolean;
}

export interface updateUser{
    email?: string;
    phone?: string;
    name?: string;
    details?: string;
    password?: string;
    lastPassword?: string;
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    emailVerified?: boolean;
    emailVerificationToken?: string;
    phoneVerified?: boolean;
}

export interface updateUserDetails{
    email?: string;
    phone?: string;
    name?: string;
    details?: string;
}

export interface Role{
    rid: string;
    oid: string;
    name: string;
    createdAt: Date;
    allows: string;
    denies: string;
}

export interface updateRole{
    name?: string;
    allows?: string;
    denies?: string;
}

export interface UserRole{
    uid: string;
    rid: string;
    createdAt: Date;
}

export interface Permissions{
    allows: string[];
    denies: string[];
}