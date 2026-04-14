from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import csv

app = FastAPI(title = "Painel 360")

#CORS -> Permite o frontend acessar
app.add_middleware(
    CORSMiddleware,
    allow_origins = ['*'], #restringir em produção
    allow_methods = ['*'],
    allow_headers = ['*'],
)

@app.get('/dados')
def ler_csv():
    with open('DATABASE_TEST.csv', newline = "", encoding = 'utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter="%")
        return list(reader)
