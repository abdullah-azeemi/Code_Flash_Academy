'use client';
import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link as ScrollLink } from 'react-scroll';
import { FaDiscord, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #122377, #081037, #000000)',
        color: '#fff',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {/* Navigation Bar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 50px',
          }}
        >
          {/* Left Side: App Name */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#fff', fontFamily: 'Poppins, sans-serif' }}
          >
            CodeFlash
          </Typography>

          {/* Middle: Navigation Buttons */}
          <Box sx={{ display: 'flex', gap: '20px' }}>
            {['Home', 'About', 'Features', 'Pricing', 'Contact'].map(
              (item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70} // Adjust for the height of the navigation bar
                >
                  <Button
                    sx={{
                      color: '#ccc',
                      '&:hover': {
                        color: '#fff',
                      },
                      '&.active': {
                        color: '#fff',
                      },
                    }}
                  >
                    {item}
                  </Button>
                </ScrollLink>
              )
            )}
          </Box>

          {/* Right Side: Sign Up Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#7214FF',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#5e12d7',
              },
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Section: Information */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '100px 20px',
        }}
        id="home"
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            color: '#C0C0C0', // Silver/grey shining color
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Welcome to CodeFlash Academy 🚀
        </Typography>
        <Typography
          variant="h6"
          sx={{
            maxWidth: '800px',
            color: '#D3D3D3', // Slightly lighter silver/grey color
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          CodeFlash Academy is your gateway to mastering coding with ease. Our
          AI-powered platform offers interactive flashcards, quizzes, and
          project-based learning to help you achieve your coding goals. Join us
          today and start your journey towards becoming a coding expert!
        </Typography>

        {/* Get Started Button */}
        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: '#7214FF',
            color: '#fff',
            borderRadius: '20px',
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#5e12d7',
            },
          }}
        >
          Get Started
        </Button>
      </Box>

      {/* About Section */}
      <Box
        sx={{
          padding: '100px 20px',
          backgroundColor: 'transparent', // Keep the gradient background flowing
          color: '#fff',
        }}
        id="about"
      >
        {/* Title */}
        <Fade direction="up" triggerOnce>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 5,
              color: '#C0C0C0', // Silver/grey color for the title
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            About CodeFlash Academy
          </Typography>
        </Fade>

        {/* Content */}
        <Grid container spacing={4}>
          {/* Left Side: Image or Icon */}
          <Grid item xs={12} md={6}>
            <Slide direction="left" triggerOnce>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: 'auto',
                  overflow: 'hidden', // Ensures the image doesn't overflow the box
                }}
              >
                <img
                  src="/medium-shot-man-wearing-vr-glasses.jpg" // Ensure the path is correct
                  alt="Man wearing VR glasses"
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '8px',
                    objectFit: 'cover', // Ensures the image fits well within the box
                  }}
                />
              </Box>
            </Slide>
          </Grid>

          {/* Right Side: Text */}
          <Grid item xs={12} md={6}>
            <Slide direction="right" triggerOnce>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: '#D3D3D3', // Silver/grey color for the text
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                At CodeFlash Academy, we believe in empowering individuals to
                excel in the ever-evolving field of coding. Our platform is
                designed to make learning to code accessible, engaging, and
                effective for everyone, whether you're just starting out or
                looking to enhance your existing skills.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 3,
                  color: '#D3D3D3',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                With a focus on project-based learning and personalized education,
                we offer a variety of tools and resources to help you achieve your
                goals. Join our community of learners and start your journey
                towards becoming a coding expert today.
              </Typography>
            </Slide>
          </Grid>
        </Grid>
      </Box>

       {/* Features Section */}
       <Box
        sx={{
          padding: '100px 20px',
        }}
        id="features"
      >
        {/* Title */}
        <Fade direction="up" triggerOnce>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 5,
              color: '#C0C0C0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Features
          </Typography>
        </Fade>

        {/* Features Cards */}
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Fade direction="up" triggerOnce>
              <Card
                sx={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Interactive Flashcards
                  </Typography>
                  <Typography
                    sx={{
                      color: '#D3D3D3',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Engage with dynamic flashcards that adapt to your learning pace.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Fade direction="up" triggerOnce>
              <Card
                sx={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    AI-Powered Quizzes
                  </Typography>
                  <Typography
                    sx={{
                      color: '#D3D3D3',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Test your knowledge with quizzes powered by AI for personalized feedback.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Fade direction="up" triggerOnce>
              <Card
                sx={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Project-Based Learning
                  </Typography>
                  <Typography
                    sx={{
                      color: '#D3D3D3',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Apply your skills with hands-on projects that enhance real-world experience.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Feature 4 */}
          <Grid item xs={12} md={4}>
            <Fade direction="up" triggerOnce>
              <Card
                sx={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Advanced Analytics
                  </Typography>
                  <Typography
                    sx={{
                      color: '#D3D3D3',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Track your learning progress with detailed analytics and insights.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Feature 5 */}
          <Grid item xs={12} md={4}>
            <Fade direction="up" triggerOnce>
              <Card
                sx={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Community Engagement
                  </Typography>
                  <Typography
                    sx={{
                      color: '#D3D3D3',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Connect with other learners and experts through our community forums.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Feature 6 */}
          <Grid item xs={12} md={4}>
            <Fade direction="up" triggerOnce>
              <Card
                sx={{
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  color: '#fff',
                  textAlign: 'center',
                  padding: '20px',
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Personalized Learning Paths
                  </Typography>
                  <Typography
                    sx={{
                      color: '#D3D3D3',
                      fontFamily: 'Poppins, sans-serif',
                      mb: 2,
                    }}
                  >
                    Customize your learning journey with tailored recommendations and goals.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Box>
      <Box
      sx={{
        padding: '100px 20px',
      }}
      id="pricing"
    >
      {/* Title */}
      <Fade direction="up" triggerOnce>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 5,
            color: '#C0C0C0',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Pricing Plans
        </Typography>
      </Fade>

      {/* Pricing Cards */}
      <Grid container spacing={4}>
        {/* Basic Plan */}
        <Grid item xs={12} md={4}>
          <Fade direction="up" triggerOnce>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent glass effect
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                color: '#fff',
                textAlign: 'center',
                padding: '20px',
                backdropFilter: 'blur(10px)', // Glass effect
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  Basic Plan
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 4,
                  }}
                >
                  $19/month
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  - Access to basic features
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  - Limited support
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#7214FF',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#5e12d7',
                    },
                    borderRadius: '20px',
                    mt: 3,
                    fontWeight: 'bold',
                  }}
                >
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Fade>
        </Grid>

        {/* Pro Plan */}
        <Grid item xs={12} md={4}>
          <Fade direction="up" triggerOnce>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent glass effect
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                color: '#fff',
                textAlign: 'center',
                padding: '20px',
                backdropFilter: 'blur(10px)', // Glass effect
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  Pro Plan
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 4,
                  }}
                >
                  $49/month
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  - All Basic features
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  - Priority support
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  - Additional resources
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#7214FF',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#5e12d7',
                    },
                    borderRadius: '20px',
                    mt: 3,
                    fontWeight: 'bold',
                  }}
                >
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Fade>
        </Grid>

        {/* Premium Plan */}
        <Grid item xs={12} md={4}>
          <Fade direction="up" triggerOnce>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent glass effect
                borderRadius: '12px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                color: '#fff',
                textAlign: 'center',
                padding: '20px',
                backdropFilter: 'blur(10px)', // Glass effect
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  Premium Plan
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 4,
                  }}
                >
                  $99/month
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  - All Pro features
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  - 1-on-1 mentoring
                </Typography>
                <Typography
                  sx={{
                    color: '#D3D3D3',
                    fontFamily: 'Poppins, sans-serif',
                    mb: 2,
                  }}
                >
                  - Exclusive content
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#7214FF',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#5e12d7',
                    },
                    borderRadius: '20px',
                    mt: 3,
                    fontWeight: 'bold',
                  }}
                >
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </Box>

      {/* Contact Section */}
      <Box
        sx={{
          padding: '100px 20px',
        }}
        id="contact"
      >
        {/* Title */}
        <Fade direction="up" triggerOnce>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 5,
              color: '#C0C0C0',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Contact Us 📞
          </Typography>
        </Fade>

        {/* Contact Information */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              color: '#D3D3D3',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Have questions or feedback? Reach out to us via email or follow us on social media!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: '#D3D3D3',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Email: support@codeflashacademy.com
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <a
              href="https://facebook.com/CodeFlashAcademy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#D3D3D3',
              }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://discord.gg/CodeFlashAcademy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#D3D3D3',
              }}
            >
              <FaDiscord />
            </a>
            <a
              href="https://linkedin.com/codeflashacademy"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#D3D3D3',
              }}
            >
              <FaLinkedin />
            </a>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: 'Poppins, sans-serif' }}>
          &copy; {new Date().getFullYear()} CodeFlash Academy. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
