import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material";

const Hajj = () => {
    const [hajjData, setHajjData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchHajj = async () => {
            try {
                const { data: { data } } = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}hajj`);
                setHajjData(data);
            } catch (err) {
                setError("Failed to load Hajj data");
            } finally {
                setLoading(false);
            }
        };
        fetchHajj();
    }, []);

    const handleUpdate = async (id, updatedHajj) => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_HOST}hajj/${id}`, updatedHajj);
            alert("Hajj data updated successfully!");
        } catch (err) {
            alert("Failed to update Hajj data.");
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" sx={{ mb: 3 }}>Manage Hajj</Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                hajjData.map((hajj) => (
                    <Paper key={hajj.id} sx={{ p: 3, mb: 3 }}>
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            value={hajj.title}
                            onChange={(e) => setHajjData(
                                hajjData.map(h => h.id === hajj.id ? { ...h, title: e.target.value } : h)
                            )}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="URL"
                            variant="outlined"
                            value={hajj.url}
                            onChange={(e) => setHajjData(
                                hajjData.map(h => h.id === hajj.id ? { ...h, url: e.target.value } : h)
                            )}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={hajj.description}
                            onChange={(e) => setHajjData(
                                hajjData.map(h => h.id === hajj.id ? { ...h, description: e.target.value } : h)
                            )}
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" onClick={() => handleUpdate(hajj.id, hajj)}>Update</Button>
                    </Paper>
                ))
            )}
        </Container>
    );
};

export default Hajj;
