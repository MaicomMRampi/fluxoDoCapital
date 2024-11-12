const db = require('../config/db');


const query = `CREATE TABLE IF NOT EXISTS Despesas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    data DATE NOT NULL,
    idUser INT NOT NULL,
    idCategoria INT NOT NULL,
    idFormaPagamento INT NOT NULL,
    idPagante INT NOT NULL,
    idResponsavel INT NOT NULL,
    idMes INT NOT NULL,
    observacao VARCHAR(255),
    FOREIGN KEY (idCategoria) REFERENCES Categorias(id),
    FOREIGN KEY (idFormaPagamento) REFERENCES FormasPagamento(id),
    FOREIGN KEY (idPagante) REFERENCES Pagantes(id),
    FOREIGN KEY (idResponsavel) REFERENCES Responsaveis(id),
    FOREIGN KEY (idMes) REFERENCES Meses(id),
    FOREIGN KEY (idUser) REFERENCES Users(id)
)`;

db.execute(query)
    .then(() => {
        console.log('Tabelas criadas com sucesso');
    })
    .catch((error) => {
        console.error('Erro ao criar as tabelas:', error);
    });


