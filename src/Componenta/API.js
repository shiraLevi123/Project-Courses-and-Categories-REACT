import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.post['Accept'] = 'application/json';

// Courses API Functions
export async function getListAllCourse() {
    try {
        const response = await axios.get('/Courses/getAll');
        return response.data;
    } catch (err) {
        console.error('didnt found', err);
        throw err;
    }
}



export async function getCourseById(id) {
    try {
        const response = await axios.get(`/Courses/getById/${id}`);
        return response.data;
    } catch (err) {
        console.error('Course not found', err);
        throw err;
    }
}

export async function addCourse(course) {
    try {
        const response = await axios.post('/Courses/addCourse', course);
        console.log(course)
        return response.data;
    } catch (err) {
        console.error('Add course failed', err);
        throw err;
    }
}

export async function updateCourse(id) {
    try {
        const response = await axios.put(`/Courses/put/${id}`, course);
        return response.data;
    } catch (err) {
        console.error('Update course failed', err);
        throw err;
    }
}

export async function deleteCourse(id) {
    try {
        const response = await axios.delete(`/Courses/delete/${id}`);
        return response.data;
    } catch (err) {
        console.error('Delete course failed', err);
        throw err;
    }
}

// Users API Functions
export async function logIn(user) {
    try {
        const response = await axios.post('/Users/LogIn', user);
        console.log(response.status)
        return response.status;
    } catch (err) {
        return err.response.status
    }
}

export async function addUser(user) {
    try {
        const response = await axios.post('/Users/addUser', user);
        return response.status;
    } catch (err) {
        console.error('Sign up failed', err);
        throw err.response.status;
    }
}



export async function getUserById(id) {
    try {
        const response = await axios.get(`/Users/getById/${id}`);
        return response.data;
    } catch (err) {
        console.error('User not found', err);
        throw err;
    }
}

export async function getAllUsers() {
    try {
        const response = await axios.get('/Users/getAll');
        return response.data;
    } catch (err) {
        console.error('Users not found', err);
        throw err;
    }
}

export async function updateUser(id, user) {
    try {
        const response = await axios.put(`/Users/put/${id}`, user);
        return response.data;
    } catch (err) {
        console.error('Update user failed', err);
        throw err;
    }
}

export async function deleteUser(id) {
    try {
        const response = await axios.delete(`/Users/delete/${id}`);
        return response.data;
    } catch (err) {
        console.error('Delete user failed', err);
        throw err;
    }
}

// Lecturer API Functions
export async function getLecturerById(id) {
    try {
        const response = await axios.get(`/Lecturer/getById/${id}`);
        return response.data;
    } catch (err) {
        console.error('Lecturer not found', err);
        throw err;
    }
}

export async function getAllLecturers() {
    try {
        const response = await axios.get('/Lecturer/getAll');
        return response.data;
    } catch (err) {
        console.error('Lecturers not found', err);
        throw err;
    }
}

export async function addLecturer(lecturer) {
    try {
        const response = await axios.post('/Lecturer/addLecturer', lecturer);
        return response.data;
    } catch (err) {
        console.error('Add lecturer failed', err);
        throw err;
    }
}

export async function updateLecturer(id) {
    try {
        const response = await axios.put(`/Lecturer/put/${id}`, lecturer);
        return response.data;
    } catch (err) {
        console.error('Update lecturer failed', err);
        throw err;
    }
}

export async function deleteLecturer(id) {
    try {
        const response = await axios.delete(`/Lecturer/delete/${id}`);
        return response.data;
    } catch (err) {
        console.error('Delete lecturer failed', err);
        throw err;
    }
}

// Category API Functions
export async function getCategoryById(id) {
    try {
        const response = await axios.get(`/Category/getById/${id}`);
        return response.data;
    } catch (err) {
        console.error('Category not found', err);
        throw err;
    }
}

export async function getAllCategories() {
    try {
        const response = await axios.get('/Category/getAll');
        return response.data;
    } catch (err) {
        console.error('Categories not found', err);
        throw err;
    }
}

export async function addCategory(category) {
    try {
        const response = await axios.post('/Category/addCategory', category);
        return response.data;
    } catch (err) {
        console.error('Add category failed', err);
        throw err;
    }
}

export async function updateCategory(id) {
    try {
        const response = await axios.put(`/Category/put/${id}`, category);
        return response.data;
    } catch (err) {
        console.error('Update category failed', err);
        throw err;
    }
}

export async function deleteCategory(id) {
    try {
        const response = await axios.delete(`/Category/delete/${id}`);
        return response.data;
    } catch (err) {
        console.error('Delete category failed', err);
        throw err;
    }
}


