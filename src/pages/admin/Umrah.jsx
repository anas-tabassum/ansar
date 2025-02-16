import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Box, Typography, Paper } from "@mui/material";

const Umrah = () => {
    const [umrahData, setUmrahData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUmrah = async () => {
            try {
                const { data: { data } } = await axios.get(`${process.env.REACT_APP_BACKEND_HOST}umra`);
                setUmrahData(data);
            } catch (err) {
                setError("Failed to load Umrah data");
            } finally {
                setLoading(false);
            }
        };
        fetchUmrah();
    }, []);

    const handleUpdate = async (id, updatedUmrah) => {
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_HOST}umrah/${id}`, updatedUmrah);
            alert("Umrah data updated successfully!");
        } catch (err) {
            alert("Failed to update Umrah data.");
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" sx={{ mb: 3 }}>Manage Umrah</Typography>
            {loading ? (
                <Typography>Loading...</Typography>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                umrahData.map((umrah) => (
                    <Paper key={umrah.id} sx={{ p: 3, mb: 3 }}>
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            value={umrah.title}
                            onChange={(e) => setUmrahData(
                                umrahData.map(u => u.id === umrah.id ? { ...u, title: e.target.value } : u)
                            )}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="URL"
                            variant="outlined"
                            value={umrah.url}
                            onChange={(e) => setUmrahData(
                                umrahData.map(u => u.id === umrah.id ? { ...u, url: e.target.value } : u)
                            )}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={3}
                            value={umrah.description}
                            onChange={(e) => setUmrahData(
                                umrahData.map(u => u.id === umrah.id ? { ...u, description: e.target.value } : u)
                            )}
                            sx={{ mb: 2 }}
                        />
                        <Button variant="contained" onClick={() => handleUpdate(umrah.id, umrah)}>Update</Button>
                    </Paper>
                ))
            )}
        </Container>
    );
};

export default Umrah;
