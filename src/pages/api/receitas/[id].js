import { receitas } from "../../../../dados"

export default function ReceitasId(req, res) {

    const { id } = req.query
    const receitasFiltrada = receitas.find(p => p.id == id)

    res.status(200).json(receitasFiltrada)
}