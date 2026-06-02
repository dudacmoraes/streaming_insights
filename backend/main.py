from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

app = FastAPI(title = "Streaming Insights")

# Middleware de CORS -> permite que o frontend acesse a API durante o desenvolvimento
app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'], #restringir em produção
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*'],
)

app.include_router(router) # Registra as rotas da aplicação
