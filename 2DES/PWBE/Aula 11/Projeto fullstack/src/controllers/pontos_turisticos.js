const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;

    // console.log(data);

    const ponto_turistico = await prisma.pontos_turisticos.create({
        data
    });

    res.status(201).json(ponto_turistico).end();
}

const read = async (req, res) => {
    const pontos_turisticos = await prisma.pontos_turisticos.findMany();

    res.status(200).json(pontos_turisticos).end();
}
//localhost:3000/telefones/1
const remove = async (req, res) => {
    const ponto_turistico = await prisma.pontos_turisticos.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(ponto_turistico).end();
}
//parametro id
//body info
const update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const ponto_turistico = await prisma.pontos_turisticos.update({
        where: {
            id
        },
        data
    });

    res.status(200).json(ponto_turistico).end();
}

module.exports =  {
    create,
    read,
    remove,
    update,
}


