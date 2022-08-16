import { Request, Response } from "express";
import { db } from '../../database/connection';

class CollectorController {
     async create(req: Request, res: Response) {
        const {
            name,
            email,
            password,
            cpf
        } = req.body;

        const trx = await db.transaction();

        const collector = {
            name,
            email,
            password,
            cpf
        }

        const insertedIds = await trx('collectors').insert(collector);
        const collector_id = insertedIds[0]

        await trx.commit();

        return res.status(201).send();
    }

    async list(req: Request, res: Response) { 
        const { id } = req.params;
        const all = db.select('*')
            .from("collectors")
            .then(rows => rows);
    }
}

export default CollectorController;