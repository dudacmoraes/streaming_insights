# Importa a APIRouter, utilizada para organizar e agrupar rotas da aplicação
from fastapi import APIRouter
from app.services import obter_contagem_musica

router = APIRouter() # Cria uma instância da APIRouter (esse objeto será utilizado para registrar os endpoints da api)

# Defune um endpoint HTTP GET no caminho "/dados/grafico"
# Esse endpoint é responsável por retornar dados agregados, destinados ao consumo por gráficos no frontend
@router.get("/dados/grafico")
def dados_grafico():
    # Chama a função de serviço que realiza a contagem de ocorrências por música
    # Retorna um dicionário no formato { musica : nome_musica }
    return obter_contagem_musica()