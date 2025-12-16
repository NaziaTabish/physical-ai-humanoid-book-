# Physical AI & Humanoid Robotics Textbook - RAG Chatbot Setup

This document provides instructions for setting up the Retrieval-Augmented Generation (RAG) chatbot integrated with the Physical AI & Humanoid Robotics textbook website.

## Architecture Overview

The RAG chatbot system consists of:
- **Frontend**: React component integrated into the Docusaurus site
- **Backend**: FastAPI server with OpenAI and Qdrant integration
- **Database**: Qdrant vector database for document storage and retrieval
- **AI Services**: OpenAI for embeddings and question answering

## Prerequisites

- Python 3.8+
- Node.js 18+
- Access to OpenAI API
- Qdrant Cloud account (or self-hosted Qdrant instance)
- The textbook content in the `docs/` directory

## Setup Instructions

### 1. Backend Setup

#### Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

#### Environment Configuration

Create a `.env` file in the `backend/` directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
QDRANT_URL=https://your-cluster.qdrant.tech:6333
QDRANT_API_KEY=your_qdrant_api_key_here
```

#### Initialize the RAG System

```bash
cd backend
python initialize_rag.py
```

This script will:
- Extract content from all markdown files in the `../docs/` directory
- Split content into chunks for better retrieval
- Generate embeddings using OpenAI
- Store vectors in Qdrant database

### 2. Backend Server

Start the FastAPI server:

```bash
cd backend
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

API Endpoints:
- `GET /api/health` - Health check
- `POST /api/chat` - Chat endpoint
- `POST /api/documents/index` - Index documents
- `GET /api/documents/count` - Get document count

### 3. Frontend Integration

The chatbot is automatically integrated into all pages through the Layout wrapper at `src/theme/Layout.js`.

### 4. Frontend Configuration

The chatbot component is configured to use the backend API. You can customize the backend URL by setting the `BACKEND_URL` environment variable when building the site:

```bash
BACKEND_URL=http://your-backend-url.com npm run build
```

## How It Works

### Text Selection Feature
- Users can select text on any page
- The selected text is automatically sent to the chatbot when asking questions
- This allows for context-specific answers based on selected content

### RAG Process
1. User asks a question
2. If text is selected, it's used as context
3. Otherwise, the system searches the vector database for relevant content
4. Relevant documents are sent to OpenAI for answer generation
5. The answer is returned with source information

## Configuration Options

### Backend Configuration
- `QDRANT_URL`: URL for your Qdrant instance
- `QDRANT_API_KEY`: API key for Qdrant access
- `OPENAI_API_KEY`: OpenAI API key
- `COLLECTION_NAME`: Name of the Qdrant collection (default: "textbook_content")

### Frontend Configuration
- `backendUrl`: URL of the backend API (default: "http://localhost:8000")

## Customization

### Styling
- The chatbot component styles are in `src/components/Chatbot/Chatbot.module.css`
- Colors adapt to the Docusaurus theme (light/dark mode)

### Behavior
- Modify the chatbot component in `src/components/Chatbot/Chatbot.jsx`
- Adjust the system prompt in `backend/main.py` for different behavior

## Troubleshooting

### Common Issues

1. **Qdrant Connection Issues**
   - Verify your Qdrant URL and API key
   - Check that the Qdrant instance is accessible from your server

2. **OpenAI API Issues**
   - Verify your OpenAI API key
   - Check that your OpenAI account has sufficient credits

3. **Document Indexing Issues**
   - Ensure the `docs/` directory contains markdown files
   - Check that the file paths are correct relative to the backend

4. **Frontend-Backend Communication**
   - Verify the backend is running and accessible
   - Check browser console for CORS errors (if running on different ports)

### Testing the API

You can test the API directly using curl:

```bash
curl -X POST "http://localhost:8000/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What is Physical AI?",
    "max_context_length": 2000
  }'
```

## Security Considerations

- Store API keys securely and never commit them to version control
- Use environment variables for configuration
- Implement rate limiting in production
- Validate and sanitize user inputs

## Production Deployment

### Backend
- Deploy the FastAPI application to a cloud provider (AWS, GCP, Azure, etc.)
- Use a production WSGI server like Gunicorn
- Set up proper logging and monitoring

### Frontend
- Update the backend URL in the environment variables during build
- Ensure CORS settings allow your frontend domain

## API Reference

### POST /api/chat
Ask a question about the textbook content.

Request:
```json
{
  "question": "Your question here",
  "context_selection": "Optional selected text to use as context",
  "max_context_length": 2000
}
```

Response:
```json
{
  "answer": "Generated answer",
  "sources": ["source1", "source2"],
  "confidence": 0.85
}
```

### POST /api/documents/index
Index documents into the vector database.

Request:
```json
{
  "documents": [
    {
      "id": "document_id",
      "content": "Document content here",
      "metadata": {"source": "source_info"}
    }
  ]
}
```

## Performance Optimization

- Adjust chunk size and overlap in the initialization script for optimal retrieval
- Use Qdrant's built-in optimization features
- Implement caching for frequently asked questions
- Monitor and optimize API response times