import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Container,
    TextField,
    Button,
    Box,
    Typography,
    Paper,
    ThemeProvider,
    createTheme
} from "@mui/material";

// Create custom theme to override TextField styles
const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderWidth: '1px',
                            borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                            borderWidth: '1px',
                            borderColor: '#e0e0e0',
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '1px !important',
                            borderColor: '#e0e0e0 !important',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        '&.Mui-focused': {
                            color: 'rgba(0, 0, 0, 0.6)',
                        },
                    },
                    // Hide the label when the field has a value
                    '& .MuiInputLabel-root.MuiInputLabel-shrink': {
                        display: 'none',
                    },
                },
            },
        },
    },
});

const Lesson = () => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const token = localStorage.getItem("token");
                const { data: { data } } = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}lessons`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setLessons(data);
            } catch (err) {
                setError("Failed to load lessons");
            } finally {
                setLoading(false);
            }
        };
        fetchLessons();
    }, []);

    const handleUpdate = async (lesson) => {
        try {
            const token = localStorage.getItem("token");
            await axios.post(`${process.env.REACT_APP_BACKEND_HOST}admin/lesson`,
                { id: lesson._id, title: lesson.title, url: lesson.url, description: lesson.description },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert("Lesson updated successfully!");
        } catch (err) {
            alert("Failed to update lesson.");
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Typography variant="h4" sx={{ mb: 3 }}>Manage Lessons</Typography>
                {loading ? (
                    <Typography>Loading...</Typography>
                ) : error ? (
                    <Typography color="error">{error}</Typography>
                ) : (
                    lessons.map((lesson) => (
                        <Paper key={lesson.id} sx={{ p: 3, mb: 3 }}>
                            <TextField
                                fullWidth
                                placeholder="Title"
                                variant="outlined"
                                value={lesson.title}
                                onChange={(e) => setLessons(
                                    lessons.map(l => l._id === lesson._id ? { ...l, title: e.target.value } : l)
                                )}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                placeholder="URL"
                                variant="outlined"
                                value={lesson.url}
                                onChange={(e) => setLessons(
                                    lessons.map(l => l._id === lesson._id ? { ...l, url: e.target.value } : l)
                                )}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                placeholder="Description"
                                variant="outlined"
                                multiline
                                rows={3}
                                value={lesson.description}
                                onChange={(e) => setLessons(
                                    lessons.map(l => l._id === lesson._id ? { ...l, description: e.target.value } : l)
                                )}
                                sx={{ mb: 2 }}
                            />
                            <Button
                                variant="contained"
                                onClick={() => handleUpdate(lesson)}
                                sx={{
                                    backgroundColor: '#1976d2',
                                    '&:hover': {
                                        backgroundColor: '#1565c0',
                                    }
                                }}
                            >
                                Update
                            </Button>
                        </Paper>
                    ))
                )}
            </Container>
        </ThemeProvider>
    );
};

export default Lesson;