# LLAMA Mongo Server & AWS Server

Welcome to the LLAMA Mongo Server and AWS Server! These servers provide functionality for transcribing audio from YouTube videos and encrypting/decrypting data using AES encryption, as well as interfacing with AWS services.

## LLAMA Mongo Server

The LLAMA Mongo Server handles the transcription of audio from YouTube videos and provides endpoints for managing transcriptions.

### Setup

1. **Clone Repository**: 
   - Clone the LLAMA Mongo Server repository to your local machine: `git clone https://github.com/saikrishnayadav764/llanmab.git`.
2. **Navigate to Directory**: 
   - Navigate to the project directory: `cd llanmab`.
3. **Install Dependencies**: 
   - Install dependencies by running `npm install`.
4. **Set Environment Variables**: 
   - Create a `.env` file based on `.env.example` and provide necessary values.
5. **Start Server**: 
   - Start the server by running `npm start`.

### Endpoints

#### Transcribe

- **URL**: `/transcribe`
- **Method**: `POST`
- **Description**: Transcribes audio from a YouTube video.
- **Request Body**:
  ```json
  {
    "name": "Example Transcription",
    "link": "YouTube Video Link",
    "source": "Youtube"
  }
  ```
- **Response**:
  - `200 OK`: Returns the transcription URL.
  - `400 Bad Request`: Invalid request or unsupported source.
  - `500 Server Error`: Internal server error.

#### Get Transcriptions

- **URL**: `/transcriptions`
- **Method**: `GET`
- **Description**: Retrieves all transcriptions.
- **Response**:
  - `200 OK`: Returns an array of all transcriptions.
  - `500 Server Error`: Internal server error.

## AWS Server

The AWS Server interfaces with AWS services for various functionalities.

### Setup

1. **Clone Repository**: 
   - Clone the AWS Server repository to your local machine: `git clone <repository_url>`.
2. **Navigate to Directory**: 
   - Navigate to the project directory: `cd <directory_name>`.
3. **Install Dependencies**: 
   - Install dependencies by running `npm install`.
4. **Set Environment Variables**: 
   - Create a `.env` file based on `.env.example` and provide necessary values.
5. **Start Server**: 
   - Start the server by running `npm start`.

### Endpoints

Include documentation for the AWS server endpoints here...

### Deployment

- Both servers are deployed on Render and can be accessed at the following URLs:
  - LLAMA Mongo Server: [llamab.onrender.com](https://llamab.onrender.com/)
  - AWS Server: [awsserver.onrender.com](https://awsserver.onrender.com/)
