import multer from 'multer';
import path from 'path';
import crypto from 'crypto';


const storage = multer.diskStorage({
	destination: path.resolve(__dirname, '..', '..', 'imageData'),
	filename(req, file, callback) {
		const hash = crypto.randomBytes(6).toString('hex');

		const filename = `${hash}-${file.originalname}`;

		callback(null, filename);

	}
});

const upload = multer({ storage: storage });

export default upload;
