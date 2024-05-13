# Karma Auth Library

## KarmaAuth

This class provides methods to manage organization users, roles, and user roles.

### Constructor

**Syntax:**

```typescript
constructor(orgAuthId: string, orgAuthToken: string)
```

**Parameters:**

- `orgAuthId`: A string representing the organization's authentication ID.
- `orgAuthToken`: A string representing the organization's authentication token.

**Example:**

```javascript
const karmaAuth = new KarmaAuth('your_org_auth_id', 'your_org_auth_token');
```

### Properties

- `Users`: Instance of `OrgUsers` to manage organization users.
- `Roles`: Instance of `OrgRoles` to manage organization roles.
- `UserRoles`: Instance of `OrgUserRoles` to manage organization user roles.

### Methods

The methods are part of the instantiated classes `OrgUsers`, `OrgRoles`, and `OrgUserRoles`.

---

## KarmaUser

This class provides methods to manage user-specific operations.

### Constructor

**Syntax:**

```typescript
constructor(token: string)
```

**Parameters:**

- `token`: A string representing the user's token.

**Example:**

```javascript
const karmaUser = new KarmaUser('your_user_token');
```

### Properties

- `Users`: Instance of `Users` to manage user-specific operations.

---

## OrgUsers

This class provides methods to manage organization users.

### Constructor

**Syntax:**

```typescript
constructor(config: Config)
```

**Parameters:**

- `config`: An instance of the `Config` class.

### Methods

#### createUser

Creates a new user.

**Syntax:**

```typescript
createUser(userData: any): Promise<any>
```

**Parameters:**

- `userData`: An object containing user data.

**Example:**

```javascript
karmaAuth.Users.createUser({ name: "John Doe", email: "john@example.com" });
```

#### getUser

Fetches a user by UID.

**Syntax:**

```typescript
getUser(uid: string): Promise<any>
```

**Parameters:**

- `uid`: A string representing the user's ID.

**Example:**

```javascript
karmaAuth.Users.getUser('user_id');
```

#### authenticateUserByEmail

Authenticates a user by email and password.

**Syntax:**

```typescript
authenticateUserByEmail(email: string, password: string): Promise<any>
```

**Parameters:**

- `email`: A string representing the user's email.
- `password`: A string representing the user's password.

**Example:**

```javascript
karmaAuth.Users.authenticateUserByEmail('john@example.com', 'password123');
```

#### authenticateUserByPhone

Authenticates a user by phone and password.

**Syntax:**

```typescript
authenticateUserByPhone(phone: string, password: string): Promise<any>
```

**Parameters:**

- `phone`: A string representing the user's phone number.
- `password`: A string representing the user's password.

**Example:**

```javascript
karmaAuth.Users.authenticateUserByPhone('1234567890', 'password123');
```

#### updateUser

Updates user information by UID.

**Syntax:**

```typescript
updateUser(uid: string, updateData: any): Promise<any>
```

**Parameters:**

- `uid`: A string representing the user's ID.
- `updateData`: An object containing the updated user data.

**Example:**

```javascript
karmaAuth.Users.updateUser('user_id', { name: "Jane Doe", email: "jane@example.com" });
```

#### deleteUser

Deletes a user by UID.

**Syntax:**

```typescript
deleteUser(uid: string): Promise<any>
```

**Parameters:**

- `uid`: A string representing the user's ID.

**Example:**

```javascript
karmaAuth.Users.deleteUser('user_id');
```

---

## OrgUserRoles

This class provides methods to manage user roles within the organization.

### Constructor

**Syntax:**

```typescript
constructor(baseURL: string, config: Config)
```

**Parameters:**

- `baseURL`: A string representing the base URL for the API.
- `config`: An instance of the `Config` class.

### Methods

#### createUserRole

Creates a user role.

**Syntax:**

```typescript
createUserRole(roleID: string, userID: string): Promise<any>
```

**Parameters:**

- `roleID`: A string representing the role's ID.
- `userID`: A string representing the user's ID.

**Example:**

```javascript
karmaAuth.UserRoles.createUserRole('role_id', 'user_id');
```

---

## OrgRoles

This class provides methods to manage roles within the organization.

### Constructor

**Syntax:**

```typescript
constructor(baseURL: string, config: Config)
```

**Parameters:**

- `baseURL`: A string representing the base URL for the API.
- `config`: An instance of the `Config` class.

### Methods

#### createRole

Creates a new role.

**Syntax:**

```typescript
createRole(name: string, permissions: Permissions): Promise<any>
```

**Parameters:**

- `name`: A string representing the name of the role.
- `permissions`: An object representing the permissions assigned to the role.

**Example:**

```javascript
karmaAuth.Roles.createRole('Admin', { read: true, write: true, delete: false });
```

#### getRole

Fetches a role by RID.

**Syntax:**

```typescript
getRole(rid: string): Promise<any>
```

**Parameters:**

- `rid`: A string representing the role's ID.

**Example:**

```javascript
karmaAuth.Roles.getRole('role_id');
```

#### getAllRoles

Fetches all roles.

**Syntax:**

```typescript
getAllRoles(): Promise<any>
```

**Example:**

```javascript
karmaAuth.Roles.getAllRoles();
```

#### getRoleByName

Fetches a role by name.

**Syntax:**

```typescript
getRoleByName(name: string): Promise<any>
```

**Parameters:**

- `name`: A string representing the role's name.

**Example:**

```javascript
karmaAuth.Roles.getRoleByName('Admin');
```

#### updateRole

Updates a role by RID.

**Syntax:**

```typescript
updateRole(rid: string, updateData: {name: string, permissions: Permissions}): Promise<any>
```

**Parameters:**

- `rid`: A string representing the role's ID.
- `updateData`: An object containing the updated role data.

**Example:**

```javascript
karmaAuth.Roles.updateRole('role_id', { name: "Moderator", permissions: { read: true, write: true, delete: true } });
```

#### deleteRole

Deletes a role by RID.

**Syntax:**

```typescript
deleteRole(rid: string): Promise<any>
```

**Parameters:**

- `rid`: A string representing the role's ID.

**Example:**

```javascript
karmaAuth.Roles.deleteRole('role_id');
```

---

## Users

This class provides methods to manage user-specific operations outside of an organization context.

### Constructor

**Syntax:**

```typescript
constructor(token: string)
```

**Parameters:**

- `token`: A string representing the user's token.

### Methods

#### getUser

Fetches the current user's information.

**Syntax:**

```typescript
getUser(userData: any): Promise<any>
```

**Parameters:**

- `userData`: An object representing the user data.

**Example:**

```javascript
karmaUser.Users.getUser({ token: 'your_token' });
```

#### getUserRoles

Fetches roles for the user, optionally by RID.

**Syntax:**

```typescript
getUserRoles(rid?: string): Promise<any>
```

**Parameters:**

- `rid`: An optional string representing the role's ID.

**Example:**

```javascript
karmaUser.Users.getUserRoles('role_id');
```

#### deleteUserRole

Deletes a user role by RID.

**Syntax:**

```typescript
deleteUserRole(rid: string): Promise<any>
```

**Parameters:**

- `rid`: A string representing the role's ID.

**Example:**

```javascript
karmaUser.Users.deleteUserRole('role_id');
```