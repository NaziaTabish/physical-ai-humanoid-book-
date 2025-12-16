import cohere
from qdrant_client import QdrantClient, models

# -------------------------------
# 1. CONFIG
# -------------------------------
COHERE_API_KEY = "kDdGDgeC0NTuDfVqD4VIx4SKEciLl300OKoc2VG8"
QDRANT_URL='https://f3f2df43-dc8c-45a6-85e9-8019c7917638.us-east4-0.gcp.cloud.qdrant.io:6333'
QDRANT_API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.hB6RdLPx73jEONcrC-GtfrcZlWo9yyP9xpPx2K1HMbw'
COLLECTION = "Robotics-book"

# -------------------------------
# 2. INITIALIZE CLIENTS
# -------------------------------
cohere_client = cohere.Client(COHERE_API_KEY)

qdrant = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY
)

# -------------------------------
# 3. GET EMBEDDING (Cohere V3)
# -------------------------------
def get_embedding(text: str):
    response = cohere_client.embed(
        texts=[text],
        model="embed-english-v3.0",
        input_type="search_query"
    )
    return response.embeddings[0]


# -------------------------------
# 4. RETRIEVE TOP DOCUMENTS
# -------------------------------
def retrieve(query: str):
    embedding = get_embedding(query)

    result = qdrant.query_points(
        collection_name=COLLECTION,
        query=embedding,
        limit=5
    )

    # Return text payloads only
    return [point.payload.get("text", "") for point in result.points]


# -------------------------------
# 5. TEST
# -------------------------------
if __name__ == "__main__":
    print(retrieve("What data do you have?"))