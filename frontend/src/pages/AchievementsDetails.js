import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../Styles/AchievementDetail.css'; // Import the CSS file

const AchievementsDetails = () => {
    const { id } = useParams();
    const [achievement, setAchievement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAchievementData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/achievements/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                
                setAchievement(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching achievement data:', error);
                setError('Failed to load achievement details.');
                setLoading(false);
            }
        };

        fetchAchievementData();
    }, [id]);

    return (
        <div>
            <Navbar />
            {loading ? (
                <div className="loading">
                    <div className="spinner"></div>
                </div>
            ) : error ? (
                <div className="error">{error}</div>
            ) : (
                <div className="achievement-container">
                    <div className="achievement-header">
                        <p className="achievement-level">Achievement / <span>{achievement.level}</span></p>
                        <h2>{achievement.title}</h2>
                    </div>
                    <div className="achievement-content">
                        <div className="achievement-images">
                            <img src={achievement.image} alt="Achievement 1" />
                            <img src={achievement.image} alt="Achievement 2" />
                            <img src={achievement.image} alt="Achievement 3" />
                        </div>
                        <p className="achievement-caption">{achievement.title}</p>
                    </div>
                    <div className="achievement-description">
                        <p>{achievement.description}</p>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default AchievementsDetails;
