# Importa a função responsável por ler o arquivo CSV
# reader_csv() retorna um iterador com cada linha da planilha
from app.database import reader_csv

def obter_contagem_musica():
    # Cria um dicionário para armazenar a contagem de ocorrências
    # A chave será a coluna música e o valor será o nome da música
    contagem = {}

    # Obtem o iterador do csv
    reader = reader_csv()

    # Para cada linha da planilha
    for row in reader:
        if not row:
            # Ignora linhas vazias
            continue
        
        # Obtem o valor do campo 'musica' da linha atual
        nome_musica = row.get('musica')

        if not nome_musica:
            # Ignora registros que não possuem nome da música
            continue
        
        # Remove espaços extras
        nome_musica = nome_musica.strip()

        # Incrementa o contador para essa música
        # Se ainda não existir, inicia com 0
        contagem[nome_musica] = contagem.get(nome_musica, 0) + 1

        resultado = [
            {"musica":musica, "total":total}
            for musica, total in contagem.items()
        ]
    
    # Retorna o dicionário com a contagem final por número de série
    return resultado