# UpStudy - Group Management Application

## Introduction

The application allows users to view and create study groups. Users can also edit and delete group details. Only logged in users can access personalized functionalities such as group creation. The application follows React-based principles with state management, API integration, and routing.

### Features

- **User Authentication**: Users can register, log in, and logout.
- **Group Management**: Users can create, view, and edit study groups.
- **Catalog View**: Display groups with brief details such as name, skill level, and image, capacity, location and meeting time.
- **Dynamic Navigation**: Navigation changes based on whether the user is logged in or not, and edit and delete are only accessible to the group's owner.

## Technical Stack

- **Frontend**:
  - **React.js**:
  - **React Router**
  - **Ant Design**
  - **Tailwind CSS**

- **Backend**:
  - **Softuni server 1.0.1**

## Application Structure

### Component Breakdown

1. **App.jsx**
   - **Purpose**: This is the root component that contains the application’s routing logic and context provider.
   
2. **Home.jsx**
   - **Purpose**: The home page that provides an overview of the application and features.
   
4. **Catalog.jsx**
   - **Purpose**: Displays a list of groups with their details (name, level, image).

5. **Details.jsx**
   - **Purpose**: Displays detailed information about a selected group.

6. **Edit.jsx**
   - **Purpose**: Allows users to edit group details.

7. **Create.jsx**
   - **Purpose**: Provides a form to create new groups.
   
8. **Login.jsx**
   - **Purpose**: Allows users to log into the application.

9. **Logout.jsx**
   - **Purpose**: Logs the user out of the application.

10. **Register.jsx**
    - **Purpose**: Allows new users to create an account.

11. **NotFound.jsx**
    - **Purpose**: Displays a "404 Not Found" page for unrecognized routes.

### Custom Hooks

1. **useGroups()**: Fetches all groups from the API and returns them.
   - **Purpose**: Encapsulates the logic for fetching group data.
   - **Implementation**: Uses `useEffect` to fetch data from the backend on component mount and `useState` to store groups.

2. **useLogin()**: Manages user login functionality.
   - **Purpose**: Handles the login process by sending the user credentials to the server and storing the response.
   
3. **useLogout()**: Handles user logout functionality.
   - **Purpose**: Sends a logout request to the server and clears the user data from global context.

4. **useRegister()**: Manages user registration functionality.
   - **Purpose**: Registers a new user by sending user credentials to the server.

### API Integration

The application uses an external API for user authentication and group management. The key API routes include:

- **POST /users/login**: Handles user login.
- **POST /users/register**: Handles user registration.
- **GET /users/logout**: Logs the user out.
- **GET /jsonstore/groups**: Fetches all groups for the catalog.
- **POST /jsonstore/groups**: Creates a new group.
- **PUT /jsonstore/groups/:id**: Updates an existing group.
- **DELETE /jsonstore/groups/:id**: Deletes a group.

### User Authentication

The authentication mechanism ensures that only logged-in users can create or edit groups. Upon successful login, a token is stored in the local storage, which is then used for subsequent requests to access authenticated routes.

- **Login**: Users log in with their email and password, which upon success redirects them directly to catalog.
- **Logout**: Users can log out by clicking a logout button, which sends a request to the server and redirects the user to the home page.
- **Registration**: New users register by filling in their email,password, re-password, phone number and first and last name.

### Styling

The application uses **Tailwind CSS** for styling. It employs utility classes for fast, responsive, and consistent styling across the application. Some notable styles include:

- **Responsive Grid Layout**: The group catalog uses a responsive grid layout with varying numbers of columns for different screen sizes.
- **Buttons and Inputs**: Styled with Tailwind’s utility classes for padding, background colors, text sizes, and hover effects.
- **Conditional Styling**: Elements like images and buttons have dynamic styles that change on hover or based on user actions.

## Future Enhancements

- **Error Handling**: Improve user experience by handling API errors more gracefully (e.g., showing error messages if data fetch fails).
- **User Profiles**: Introduce user profile pages where users can view and edit their personal details similar to their groups.
- **Group Join button**: Have a 'Join Group' button that can track whether the capacity of the group is under the limit


