# Importa a função responsável por ler o arquivo CSV
# reader_csv() retorna um iterador com cada linha da planilha
from app.database import reader_csv

def get_music_count():
    # Cria um dicionário para armazenar a contagem de ocorrências
    # A chave será o nome da música e o valor será a quantidade de reproduções
    count = {}

    # Obtem o iterador do csv
    reader = reader_csv()

    # Para cada linha da planilha
    for row in reader:
        # Ignora linhas vazias
        if not row:
            continue

        # Obtém o valor do campo 'track_name' da linha atual
        track_name = row.get("track_name")

        # Ignora registros que não possuem nome da música
        if not track_name:
            continue
        
        # Remove espaços extras
        track_name = track_name.strip()

        # Incrementa o contador para essa música
        # Se ainda não existir, inicia com 0
        count[track_name] = count.get(track_name, 0) + 1

    result = [
        {"track_name":music, "play_count":total}
        for music, total in count.items()
    ]

    # Ordena da música com maior número de reproduções para a menor
    result.sort(key = lambda item: item["play_count"], reverse = True)
    
    # Retorna a lista com a contagem final por música
    return result

# TESTE
if __name__ == "__main__":
    for item in get_music_count():
        print(item)
