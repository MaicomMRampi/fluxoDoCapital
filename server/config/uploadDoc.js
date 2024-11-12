const multer = require('multer');
const path = require('path');
const fs = require('fs');
const storageDoc = multer.diskStorage({
    destination: (req, file, cb) => {
        const userId = req.body.idUser;
        // Caminho absoluto para a pasta de documentos do usuário
        const userDirectory = path.resolve(__dirname, '..', '..', 'uploads', 'document', userId);

        // Verifica se o diretório existe, caso contrário, cria
        if (!fs.existsSync(userDirectory)) {
            fs.mkdirSync(userDirectory, { recursive: true }); // Cria o diretório, incluindo os pais se necessário
        }

        // Define o diretório de destino
        cb(null, userDirectory);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname); // Mantém a extensão original
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    }
});

// Validação de tipo de arquivo e tamanho
const fileFilter = (req, file, cb) => {
    const allowedTypes = /pdf|doc|docx|jpg|jpeg|png/;

    // Tipos MIME permitidos para os arquivos
    const allowedMimeTypes = [
        'application/pdf',
        'application/msword', // Para .doc
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Para .docx
        'image/jpeg', // Para .jpg e .jpeg
        'image/png'   // Para .png
    ];

    const fileExtension = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedMimeTypes.includes(file.mimetype);

    if (fileExtension && mimeType) {
        cb(null, true); // Aceita o arquivo
    } else {
        cb(new Error('Tipo de arquivo inválido. Apenas PDF, DOC, DOCX, JPG e PNG são permitidos.'));
    }
};

const uploaddoc = multer({
    storage: storageDoc,
    limits: { fileSize: 6 * 1024 * 1024 }, // Limite de 6MB
    fileFilter: fileFilter
});
module.exports = uploaddoc