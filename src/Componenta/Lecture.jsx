import React, { useState, useEffect } from 'react';
import { getAllLecturers } from './API';
import { Card, CardContent, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, Container, Box } from '@mui/material';
import CenteredContainer from './CenteredContainer';

export default function Lecture() {
    const [lectures, setLectures] = useState([]);
    const [selectLecture, setSelectLecture] = useState(null);
    const [showLecture, setShowLecture] = useState(false);

    useEffect(() => {
        const loadLectures = async () => {
            try {
                const response = await getAllLecturers();
                setLectures(response);
            } catch (error) {
                console.log("Issue loading lecturers");
            }
        };
        loadLectures();
    }, []);

    const handleLectureClick = (lecture) => {
        setSelectLecture(lecture);
        setShowLecture(true);
    };

    return (
        <CenteredContainer>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 8 }}>
                <Typography variant="h4" gutterBottom align="center">
                    Our Lectures 🎗️
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', mb: 4 }}>
                    {lectures.map((lecture) => (
                        <Card
                            key={lecture.id}
                            sx={{
                                width: 'calc(33.33% - 16px)',
                                borderRadius: 2,
                                boxShadow: 3,
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: '#FFF9C4',
                                alignItems: 'center',
                            }}
                        >
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                                    {lecture.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {lecture.profession}
                                </Typography>
                                <Button
                                    onClick={() => handleLectureClick(lecture)}
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
                                    More About... 🎗️
                                </Button>

                            </CardContent>
                        </Card>
                    ))}
                </Box>

                <Dialog open={showLecture} onClose={() => setShowLecture(false)} fullWidth maxWidth="sm">
                    <DialogTitle>Lecture Details 🎗️</DialogTitle>
                    <DialogContent>
                        {selectLecture && (
                            <div>
                                <Typography variant="h6" gutterBottom>
                                    {selectLecture.name}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>🎗️ Phone:</strong> {selectLecture.phone}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>🎗️ Profession:</strong> {selectLecture.profession}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>🎗️ Years of Experience:</strong> {selectLecture.yearsExperience}
                                </Typography>
                            </div>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowLecture(false)} variant="text">
                            Close 🎗️
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </CenteredContainer>
    );
}
