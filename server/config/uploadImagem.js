// config/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        try {


            const userDirectory = path.resolve(__dirname, '..', '..', 'uploads', 'images');

            // Verifica se o diretório existe, caso contrário, cria
            if (!fs.existsSync(userDirectory)) {
                fs.mkdirSync(userDirectory, { recursive: true });
            }
            cb(null, userDirectory);
        } catch (err) {
            console.error('Erro ao definir o diretório de destino:', err);
            cb(err, null);
        }
    },

    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        cb(null, `${name}-${Date.now()}${ext}`); // Adiciona um timestamp para evitar conflitos
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
