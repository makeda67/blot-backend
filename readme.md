# BLOT

## Description
You are a great viking leader??

Do you want to invade other villages??

You have gold but not a great army?? 

Here is your solution!!!


Blot (like the ritual that vikings do before the battles), is an app that let you contract some soldiers and create your own armies to invade enemies.
****
## User stories

- **404:** As user I want to know if I went to a page that doesn't exist and it's my fault.
- **Signup:** As user I want to create my own account.
- **Login:** As user I want to log in into my account.
- **Logout:** As user I want to log out of my account.
- **Create armies:** As user I want to create new armies.
- **Edit armies:** As user I want to get into an army and modify it.
- **Delete armies:** As user I want to get into an army and delete it.
- **Modify profile:** As user I want to modify my profile.
****

## Backlog

- As user I want to find enemies.
- As user I want to use map box to mark attack points.
****

## Frontend
### Routes
| Path                      | Component            | Permissions | Behavior                                                     |
| ------------------------- | -------------------- | ----------- | ------------------------------------------------------------ |
| `/`                       | SplashPage           | public      | Home page                                        |
| `/auth/signup`            | SignupPage           | anon only   | Signup form, link to login, navigate to homepage after signup |
| `/auth/login`             | LoginPage            | anon only   | Login form, link to signup, navigate to homepage after login |                             |
| `/army/add`        | ArmyCreatePage   | user only   | Creates an army                                          |
| `/army/:id/modify`         | ArmyModifyPage                   | user only   | Modify an army                                           |
| `/user/:id`     | UserPage      | users only   | Profile of a user                              |
| `/user/edit` | UserEditPage      | user only   | Edit information                               |

### Components
- Navbar

- FooterShield

- FooterCheck

- FooterBack

- FooterEdit

- LoginPage

- SignupPage

- CreateArmyPage

- ModifyArmyPage

- UserPage

- UserEditPage

### Services
- Auth service

  - a

- Army Service

  -  Army.add(id)

  -  Army.modify(id)

  -  Army.delete(id)

- User Service
  
  -  User(id)

  -  User.edit(id)

****

## Backend
### Models
- **User**


    name: 'String',
    username: 'String',
    gold: 'number',
    profileImage: 'String'

- **Army**


    name: 'String',
    soldiers: Array,
    idUser: 'String'

- **Soldiers**


    name: 'String',
    price: 'number',
    description: 'String'


## EndPoints

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, username, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | `/`                |                              |                | 400          | Show all armies                                         |
| POST        | `/army/add` | {}                           | 201            | 400          | Create and save a new army                            |
| PUT         | `/army/:id/modify`       | {name, soldiers}           | 200            | 400          | Edit army                                              |
| DELETE      | `/army/:id/delete`     | {id}                         | 201            | 400          | Delete army                                            |
| GET         | `/user/:id`                | {id}                         |                |              | Show specific player                                         |
| PUT         | `/user/edit`           | {name, username, img, password}                   | 201            | 400          | Edit user                                                  |               

****
## Links

Repo: https://github.com/makeda67/BLOT