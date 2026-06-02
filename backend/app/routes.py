# Importa a APIRouter, utilizada para organizar e agrupar rotas da aplicação
from fastapi import APIRouter
# Importa a função do service que faz a contagem das músicas
from app.services import get_music_count

router = APIRouter() # Cria uma instância da APIRouter (esse objeto será utilizado para registrar os endpoints da api)

# Cria um endpoint GET para retornar as músicas mais ouvidas
@router.get("/top-musicas")
def top_musicas():
    return get_music_count()
