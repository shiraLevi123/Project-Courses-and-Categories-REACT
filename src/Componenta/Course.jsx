import React, { useEffect, useState } from 'react';
import { getListAllCourse, getAllLecturers, getAllCategories, addCourse, deleteCourse } from './API';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Select, InputLabel, FormControl, Container, Box } from '@mui/material';
import CenteredContainer from './CenteredContainer';

export default function Courses() {
    const [coursesList, setCoursesList] = useState([]);
    const [selectCourse, setSelectCourse] = useState(null);
    const [showCourse, setShowCourse] = useState(false);
    const [showAddCourseDialog, setShowAddCourseDialog] = useState(false);
    const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] = useState(false);
    const [courseToDelete, setCourseToDelete] = useState(null);
    const { userName } = useParams();

    const [allLectures, setAllLectures] = useState([]);
    const [allCategory, setAllCategory] = useState([]);

    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState(0);
    const [lecture, setLectureId] = useState(0);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const data = {
        name: name,
        description: description,
        price: price,
        id: 0,
        lecturer: {
            id: lecture
        },
        category: {
            id: categoryId
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getListAllCourse();
                setCoursesList(data);
                if (userName === "manager") {
                    const lecturers = await getAllLecturers();
                    setAllLectures(lecturers);
                    const categories = await getAllCategories();
                    setAllCategory(categories);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [userName]);

    const showCoursesDetails = (course) => {
        setSelectCourse(course);
        setShowCourse(true);
    };

    const handleDeleteCourse = async () => {
        if (courseToDelete) {
            try {
                await deleteCourse(courseToDelete.id);
                const updatedCoursesList = await getListAllCourse();
                setCoursesList(updatedCoursesList);
                setShowConfirmDeleteDialog(false);
                setCourseToDelete(null);
            } catch (error) {
                console.error("Error deleting course:", error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCourse(data);
            const updatedCoursesList = await getListAllCourse();
            setCoursesList(updatedCoursesList);
            setName("");
            setDescription("");
            setPrice(0);
            setCategoryId(0);
            setLectureId(0);
            setShowAddCourseDialog(false);
        } catch (error) {
            console.error('Add course failed:', error);
        }
    };

    return (
        <CenteredContainer>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 16 }}>
                <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
                    Courses List 🎗️
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', mb: 4 }}>
                    {coursesList.map((course) => (
                        <Card key={course.id} sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" align="center">
                                    {course.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" align="center">
                                    {course.description}
                                </Typography>
                                <Button
                                    onClick={() => showCoursesDetails(course)}
                                    sx={{
                                        mt: 2,
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        color: '#FFEB3B',
                                        backgroundColor: '#FFFFE0',
                                        '&:hover': {
                                            backgroundColor: '#FFFFC0',
                                            boxShadow: '0 0 10px rgba(255, 255, 224, 0.5)',
                                        },
                                        borderRadius: 1,
                                        padding: '8px 16px',
                                    }}
                                    variant="contained"
                                >
                                    View Details 🎗️
                                </Button>


                                {userName === "manager" && (
                                    <Button
                                        onClick={() => {
                                            setCourseToDelete(course);
                                            setShowConfirmDeleteDialog(true);
                                        }}
                                        sx={{
                                            mt: 2,
                                            color: 'red',
                                            '&:hover': {
                                                color: '#fff',
                                                backgroundColor: 'rgba(255, 0, 0, 0.7)',
                                                boxShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
                                            },
                                            borderRadius: 1,
                                            padding: '8px 16px',
                                        }}
                                        variant="contained"
                                    >
                                        Delete Course 🎗️
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                    {userName === "manager" && (
                        <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CardContent>
                                <Typography variant="h5" component="div" align="center">
                                    Add New Course 🎗️
                                </Typography>
                                <Button
                                    onClick={() => setShowAddCourseDialog(true)}
                                    sx={{
                                        mt: 2,
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        backgroundColor: '#FFFFE0',
                                        '&:hover': {
                                            backgroundColor: '#FFFFC0',
                                            boxShadow: '0 0 10px rgba(255, 255, 224, 0.5)',
                                        },
                                        borderRadius: 1,
                                        padding: '8px 16px',
                                    }}
                                    variant="contained"
                                >
                                    Add Course 🎗️
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </Box>

                <Dialog open={showCourse} onClose={() => setShowCourse(false)} fullWidth maxWidth="sm">
                    <DialogTitle>Course Details 🎗️</DialogTitle>
                    <DialogContent>
                        {selectCourse && (
                            <div>
                                <Typography variant="h6" gutterBottom>
                                    {selectCourse.name}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>🎗️ Description:</strong> {selectCourse.description}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>🎗️ Category:</strong> {selectCourse.category.name}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>🎗️ Lecture Name:</strong> {selectCourse.lecturer.name}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong> 🎗️Phone:</strong> {selectCourse.lecturer.phone}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong> 🎗️Price:</strong> {selectCourse.price}$
                                </Typography>
                            </div>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowCourse(false)} variant="text">
                            Close 🎗️
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={showAddCourseDialog} onClose={() => setShowAddCourseDialog(false)} fullWidth maxWidth="sm">
                    <DialogTitle>+Add New Course 🎗️</DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <TextField
                                    label="Price"
                                    variant="outlined"
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <InputLabel>Category 🎗️</InputLabel>
                                <Select
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <MenuItem value={0}>Select Category</MenuItem>
                                    {allCategory.map((category) => (
                                        <MenuItem key={category.id} value={category.id}>
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl fullWidth margin="normal">
                                <InputLabel>Lecturer 🎗️</InputLabel>
                                <Select
                                    value={lecture}
                                    onChange={(e) => setLectureId(e.target.value)}
                                >
                                    <MenuItem value={0}>Select Lecturer</MenuItem>
                                    {allLectures.map((lecturer) => (
                                        <MenuItem key={lecturer.id} value={lecturer.id}>
                                            {lecturer.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Button type="submit" variant="contained" sx={{ mt: 2, backgroundColor: '#FFFFE0', '&:hover': { backgroundColor: '#FFFFC0', boxShadow: '0 0 10px rgba(255, 255, 224, 0.5)' } }}>
                                Submit 🎗️
                            </Button>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowAddCourseDialog(false)} variant="text">
                            Close 🎗️
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Confirm Delete Dialog */}
                <Dialog open={showConfirmDeleteDialog} onClose={() => setShowConfirmDeleteDialog(false)} fullWidth maxWidth="sm">
                    <DialogTitle>Confirm Delete 🎗️</DialogTitle>
                    <DialogContent>
                        <Typography variant="body1">
                            Are you sure you want to delete the course "{courseToDelete?.name}"?
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowConfirmDeleteDialog(false)} variant="text">
                            Cancel 🎗️
                        </Button>
                        <Button onClick={handleDeleteCourse} variant="contained" color="error">
                            Delete 🎗️
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </CenteredContainer>
    );
}
