import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion"; // Import framer-motion for animations

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        // marginTop: "2rem",
        // overflowY:"hidden"
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center", color: "black" }}>
        {/* Animated Introduction Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Typography
            variant="h2"
            color="black"
            fontWeight="bold"
            fontSize="2.5rem"
            marginTop={5}
            gutterBottom
          >
            Admin Dashboard
          </Typography>
          <Typography
            variant="h6"
            color="black"
            fontSize="1.5rem"
            marginTop="2.7rem"
            gutterBottom
          >
            Manage tests, view submissions, and track platform progress
          </Typography>
        </motion.div>

        {/* New Login Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Box
            // mt={4}
            // gap={20}
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
            verticalAlign="center"
          >
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => navigate("/login/admin")}
              sx={{
                padding: "10px 100px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                backgroundColor: "lightgray",
                height: "4rem",
                borderRadius: "0.8rem",
              }}
            >
              Login
            </Button>
          </Box>
          <Box
            // mt={4}
            // gap={20}
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
            verticalAlign="center"
          >
            <Button
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => navigate("/login/admin")}
              sx={{
                padding: "20px 80px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                height: "4rem",
                borderRadius: "0.8rem",
                cursor: "pointer",
                backgroundColor: "blueviolet",
                marginTop: "3rem",
              }}
            >
              View Tests
            </Button>
          </Box>{" "}
          <Box
            // mt={4}
            // gap={20}
            alignItems="center"
            justifyContent="center"
            justifyItems="center"
            verticalAlign="center"
          >
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => navigate("/login/admin")}
              sx={{
                padding: "20px 60px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                height: "4rem",
                borderRadius: "0.8rem",
                cursor: "pointer",
                backgroundColor: "#f50057",
                marginTop: "3rem",
              }}
            >
              View Analytics
            </Button>
          </Box>
        </motion.div>

        {/* Admin Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: "30px",
              marginTop: "50px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              color="primary"
              textAlign="center"
              marginBottom="1.8rem"
            >
              Admin Capabilities
            </Typography>
            <Typography variant="h6" prop marginBottom="1.4rem">
              📋 <strong>Manage Tests:</strong> Create, update, and delete tests
              easily with our intuitive interface.
            </Typography>
            <Typography variant="h6" prop marginBottom="1.4rem">
              📝 <strong>Review Submissions:</strong> View detailed reports on
              submitted tests and analyze user performance.
            </Typography>
            <Typography variant="h6" prop marginBottom="1.4rem">
              📊 <strong>Track Analytics:</strong> Use analytics tools to track
              user performance and platform usage.
            </Typography>
            <Typography variant="h6" prop marginBottom="1.4rem">
              ⚙️ <strong>Streamline Processes:</strong> Manage everything
              seamlessly from one dashboard.
            </Typography>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AdminHomePage;
