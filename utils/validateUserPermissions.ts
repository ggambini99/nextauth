type User = {
    permissions: string[];
    roles: string[];
}

type ValidateUserPermissionsParms = {
    user: User;
    permissions?: string[];
    roles?: string[];

}

export function validateUserPermissions({
    user,
    permissions,
    roles,
}: ValidateUserPermissionsParms ) {
    if (permissions?.length > 0) {
        const hasAllPermissions = permissions.every(permissions => {
            return user.permissions.includes(permissions);
        });

        if (!hasAllPermissions) {
            return false;
        }
    }

    if (roles?.length > 0) {
        const hasAllRoles = roles.some(role => {
            return user.permissions.includes(role);
        });

        if (!hasAllRoles) {
            return false;
        }
    }

    return true;
}