import React, { useEffect, useState } from 'react';
import { getListAllCourse, getAllCategories } from './API';
import { Container, Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import CenteredContainer from './CenteredContainer';

export default function CategoriesWithCourses() {
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesData = await getAllCategories();
                setCategories(categoriesData);

                const coursesData = await getListAllCourse();
                setCourses(coursesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCategoryId !== null) {
            const filtered = courses.filter(course => course.category.id === selectedCategoryId);
            setFilteredCourses(filtered);
        } else {
            setFilteredCourses([]);
        }
    }, [selectedCategoryId, courses]);

    const handleCategoryClick = (categoryId) => {
        if (selectedCategoryId === categoryId) {
            setSelectedCategoryId(null);
        } else {
            setSelectedCategoryId(categoryId);
        }
    };

    return (
        <CenteredContainer>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6, border: '1px solid #FFD700', borderRadius: 2, p: 3, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Typography variant="h4" gutterBottom>
                        Categories 🎗️
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '16px',
                            justifyContent: 'center',
                            mb: 6
                        }}
                    >
                        {categories.map(category => (
                            <Button
                                key={category.id}
                                onClick={() => handleCategoryClick(category.id)}
                                variant="contained"
                                sx={{
                                    borderRadius: 2,
                                    backgroundColor: '#FFD700',
                                    color: '#000',
                                    fontWeight: 'bold',
                                    fontSize: '16px',
                                    padding: '12px 24px',
                                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    '&:hover': {
                                        backgroundColor: '#FFC107',
                                        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                                    },
                                }}
                            >
                                {category.name}
                            </Button>
                        ))}
                    </Box>
                </Box>

                {selectedCategoryId && (
                    <Box sx={{ mt: 8 }}>
                        <Typography variant="h4" gutterBottom align="center">
                            Courses in Selected Category 🎗️
                        </Typography>
                        <Grid container spacing={4} justifyContent="center">
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map(course => (
                                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                                        <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', backgroundColor: '#FFF9C4', transition: 'transform 0.3s, box-shadow 0.3s', '&:hover': { transform: 'scale(1.03)', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)' } }}>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    {course.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {course.description}
                                                </Typography>
                                                <Typography variant="body1" sx={{ mt: 8 }}>
                                                    <strong>Price:</strong> ${course.price}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            ) : (
                                <Typography variant="body1" align="center">
                                    No courses available for this category 🎗️
                                </Typography>
                            )}
                        </Grid>
                    </Box>
                )}
            </Container>
        </CenteredContainer>
    );
}
