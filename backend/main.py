from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

app = FastAPI(title = "Streaming Insights")

# CORS -> Permite o frontend acessar
app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'], #restringir em produção
    allow_methods = ['*'],
    allow_headers = ['*'],
)

app.include_router(router)