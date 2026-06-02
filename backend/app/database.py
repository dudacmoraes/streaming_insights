# Importa o módulo csv da biblioteca padrão do Python
# Fornece suporte para leitura e escrita de arquivos csv
import csv
# Importa a classe Path do módulo pathlib
# Utilizada para manipulação de caminhos de arquivos de forma segura e multiplataforma
from pathlib import Path

# Define o diretório base do projeto
# __file__ representa o caminho do próprio arquivo database.py
# resolve() transforma em caminho absoluto
# parent.parent sobe dois níveis na hierarquia de pastas
BASE_DIR = Path(__file__).resolve().parent.parent

# Define o caminho completo do arquivo csv contendo os dados
# O arquivo está localizado na pasta "data" dentro do projeto
CSV_PATH = BASE_DIR / "data" / "data.csv"

def reader_csv():
    """
    Função responsável por ler o arquivo csv e fornecer os dados linha a linha
    Retorna:
        Um iterador que produz cada linha do csv como um dicionário, onde as chaves são os nomes das colunas
    """
    # Abre o arquivo csv em modo leitura
    # encoding = 'utf-8' garante leitura correta de caracteres especiais
    # newline = '' evita problemas de quebra de linha entre sistemas operacionais
    with open(CSV_PATH, encoding = 'utf-8-sig', newline = '') as file:
        # Cria um leitor csv que converte cada linha em um dicionário
        reader = csv.DictReader(file, delimiter = ';')
        
        # Percorre cada linha do csv
        for line in reader:
            # Retorna cada linha individualmente como um dicionário
            # O uso de yield transforma esta função em um generator
            yield line

# TESTE
if __name__ == "__main__":
    print("Path file:", CSV_PATH)
    for count, line in enumerate(reader_csv(), start = 1):
        print(f'Line {count}: {line}')
        
        if count == 5:
            break
