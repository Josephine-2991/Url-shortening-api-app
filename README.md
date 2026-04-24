# Frontend Mentor - Shortly URL shortening API Challenge

![Design preview for the Shortly URL shortening API coding challenge](preview.jpg)

## Welcome! 👋

## URL Shortener Project

## Overview
This project is a simple URL shortener built with HTML, Bootstrap, and Vanilla JavaScript. It allows users to input a long URL and receive a shortened version using an external API.

## Problem
Long URLs are difficult to share and manage. The goal was to create a fast, user-friendly tool that converts long links into short, shareable URLs.

## Solution Approach
The solution was built by breaking the problem into small, manageable steps:
1. Input Handling
Users enter a URL through a form. The input is captured and trimmed before processing.
2. Validation
Before sending any request, the URL is validated using the built-in URL constructor to ensure it is properly formatted (http or https).
3. API Integration
The valid URL is sent to an external shortening service (TinyURL API). The response returns a shortened link.
4. UI Updates
Once a response is received:
•	The original and shortened URLs are displayed dynamically
•	A Copy button is added for quick copying
•	New results are inserted at the top of the list
5. Error Handling
If the input is invalid or the API request fails:
•	Clear error messages are displayed
•	The input field is highlighted for feedback
6. Loading State Management
To improve user experience:
•	The submit button is disabled during requests
•	A loading state prevents multiple submissions

## Key Features
•	URL validation before processing
•	Real-time error feedback
•	API-based URL shortening
•	Copy-to-clipboard functionality
•	Responsive and interactive UI
•	Loading state control

## What I Learned
This project helped me understand:
•	How to structure frontend logic using modular functions
•	How to integrate external APIs
•	How to manage UI states (loading, error, success)
•	How to dynamically update the DOM based on user actions

## Summary
The application works by validating user input, sending it to a URL shortening API, and dynamically rendering the result with proper UI feedback, including copy functionality and error handling.






